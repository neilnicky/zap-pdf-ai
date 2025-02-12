
'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [summary, setSummary] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Mock subscription handler
  const handleSubscribe = () => {
    setIsSubscribed(true)
  }

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) setFile(selectedFile)
  }

  // Mock analysis function
  const analyzePDF = async () => {
    if (!file) return
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock summary generation
    setSummary(`Generated summary for ${file.name}:\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...`)
    setIsLoading(false)
  }

  if (!isSubscribed) {
    return (
      <div className="max-w-2xl mx-auto text-center mt-12">
        <h2 className="text-3xl font-bold mb-6">Premium Features</h2>
        <p className="text-gray-300 mb-8">
          Upgrade to our premium plan to access PDF summarization and other advanced features.
        </p>
        <button
          onClick={handleSubscribe}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Subscribe Now
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* File Upload Section */}
        <div className="mb-8">
          <label className="block text-lg font-medium mb-4">
            Upload PDF
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="block w-full text-gray-400 file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0 file:text-sm file:font-semibold
                     file:bg-purple-500 file:text-white hover:file:bg-purple-600"
          />
        </div>

        {/* Analyze Button */}
        <button
          onClick={analyzePDF}
          disabled={!file || isLoading}
          className={`w-full py-3 px-6 rounded-lg transition-colors
            ${(!file || isLoading) 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-purple-500 hover:bg-purple-600'}`}
        >
          {isLoading ? 'Analyzing...' : 'Analyze PDF'}
        </button>

        {/* Results Section */}
        {summary && (
          <div className="mt-8 p-4 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Summary</h3>
            <p className="text-gray-300 whitespace-pre-line">{summary}</p>
          </div>
        )}
      </div>
    </div>
  )
}