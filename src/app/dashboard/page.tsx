// app/dashboard/page.tsx
"use client";
import { useState } from "react";
import SubscriptionButton from "@/components/SubscriptionButton";
import PdfUploader from "@/components/PdfUploader";

// Mock analysis function (replace with actual API call)
const mockAnalyzePdf = async (file: File): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return `Mock summary for ${file.name}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`;
};

export default function Dashboard() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async (file: File) => {
    setIsLoading(true);
    try {
      const result = await mockAnalyzePdf(file);
      setSummary(result);
    } catch (error) {
      console.error("Analysis failed:", error);
      alert("Analysis failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {!isSubscribed ? (
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Subscribe to access PDF analysis features
          </p>
          <SubscriptionButton onSubscribe={() => setIsSubscribed(true)} />
        </div>
      ) : (
        <div className="space-y-6">
          <PdfUploader onFileSelected={handleAnalyze} isLoading={isLoading} />
          {summary && (
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <p className="text-gray-300 whitespace-pre-wrap">{summary}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
