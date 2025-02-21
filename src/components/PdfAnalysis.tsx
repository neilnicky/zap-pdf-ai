
import { useCallback, useState, ChangeEvent } from 'react'
import { FileUpload } from '@/components/ui/file-upload'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface PdfAnalysisProps {
  onAnalyze: (file: File) => Promise<void>
  summary: string | null
  loadingState: 'idle' | 'loading' | 'error'
}

export default function PdfAnalysis({ 
  onAnalyze, 
  summary,
  loadingState 
}: PdfAnalysisProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file?.type === 'application/pdf') {
      setSelectedFile(file)
    }
  }, [])

  const isValidFile = selectedFile && selectedFile.size <= 5 * 1024 * 1024 // 5MB limit

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <FileUpload
          accept="application/pdf"
          onChange={handleFileChange}
          label="Select PDF document"
          disabled={loadingState === 'loading'}
        />
        
        <Button
          onClick={() => selectedFile && onAnalyze(selectedFile)}
          disabled={!isValidFile || loadingState === 'loading'}
          className="w-full sm:w-auto"
        >
          {loadingState === 'loading' ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</>
          ) : (
            'Analyze PDF'
          )}
        </Button>

        {loadingState === 'error' && (
          <p className="text-red-400 text-sm">
            Analysis failed. Please try again with a valid PDF file.
          </p>
        )}
      </div>

      {summary && (
        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-purple-400">Document Summary</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {summary}
          </p>
        </div>
      )}
    </div>
  )
}