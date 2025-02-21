"use client";
import { useState, useCallback } from "react";
import SubscriptionPanel from "@/components/SubscriptionPanel";
import PdfAnalysis from "@/components/PdfAnalysis";
import { processPdfWithDeepSeek } from "@/lib/pdf-service";

export default function Dashboard() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingState, setLoadingState] = useState<
    "idle" | "loading" | "error"
  >("idle");

  const handleAnalyze = useCallback(async (file: File) => {
    setLoadingState("loading");
    try {
      const result = await processPdfWithDeepSeek(file);
      setSummary(result.summary);
      setLoadingState("idle");
    } catch (error) {
      console.error("PDF Analysis Error:", error);
      setLoadingState("error");
      setSummary(null);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-100">Dashboard</h1>
      </header>

      {!isSubscribed ? (
        <SubscriptionPanel onSubscribe={() => setIsSubscribed(true)} />
      ) : (
        <PdfAnalysis
          onAnalyze={handleAnalyze}
          summary={summary}
          loadingState={loadingState}
        />
      )}
    </div>
  );
}
