import { useState, useCallback, ChangeEvent } from "react";

interface PdfUploaderProps {
  onFileSelected: (file: File) => Promise<void>;
  isLoading: boolean;
}

export default function PdfUploader({
  onFileSelected,
  isLoading,
}: PdfUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    }
  }, []);

  const handleAnalyze = useCallback(async () => {
    if (selectedFile) {
      await onFileSelected(selectedFile);
    }
  }, [selectedFile, onFileSelected]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="flex-1 cursor-pointer">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="bg-gray-800 p-4 rounded-lg border-2 border-dashed border-gray-600 hover:border-purple-500 transition-colors">
            <p className="text-gray-400">
              {selectedFile ? selectedFile.name : "Click to select PDF"}
            </p>
          </div>
        </label>
        <button
          onClick={handleAnalyze}
          disabled={!selectedFile || isLoading}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Analyzing..." : "Analyze PDF"}
        </button>
      </div>
      {selectedFile && (
        <p className="text-sm text-gray-400">
          Selected file: {selectedFile.name} (
          {Math.round(selectedFile.size / 1024)} KB)
        </p>
      )}
    </div>
  );
}
