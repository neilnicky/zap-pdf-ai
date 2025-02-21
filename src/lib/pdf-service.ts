
export interface AnalysisResult {
    summary: string
    pages: number
    processedAt: Date
  }
  
  export async function processPdfWithDeepSeek(file: File): Promise<AnalysisResult> {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('strategy', 'quick')
  
    const response = await fetch('https://api.deepseek.com/v1/pdf/analyze', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`,
      },
      body: formData,
    })
  
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }
  
    const data = await response.json()
    
    return {
      summary: data.summary,
      pages: data.metadata.pages,
      processedAt: new Date(data.processed_at),
    }
  }