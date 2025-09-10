'use client'

import { useState } from 'react'

export default function TestPage() {
  const [envCheck, setEnvCheck] = useState<any>(null)
  const [testResult, setTestResult] = useState<any>(null)

  const checkEnvironment = async () => {
    try {
      const response = await fetch('/api/check-env')
      const data = await response.json()
      setEnvCheck(data)
    } catch (error) {
      console.error('Error checking environment:', error)
    }
  }

  const testProcessPrompt = async () => {
    try {
      const response = await fetch('/api/process-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInput: 'A 30 year old male with black hair'
        })
      })

      const data = await response.json()
      setTestResult({ type: 'process-prompt', data })
    } catch (error) {
      console.error('Error testing process-prompt:', error)
      setTestResult({ type: 'process-prompt', error: error instanceof Error ? error.message : 'Unknown error' })
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>
      
      <div className="space-y-4">
        <button
          onClick={checkEnvironment}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Check Environment Variables
        </button>

        <button
          onClick={testProcessPrompt}
          className="px-4 py-2 bg-green-500 text-white rounded ml-2"
        >
          Test Process Prompt API
        </button>

        {envCheck && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h2 className="font-bold">Environment Check:</h2>
            <pre className="mt-2">{JSON.stringify(envCheck, null, 2)}</pre>
          </div>
        )}

        {testResult && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h2 className="font-bold">Test Result ({testResult.type}):</h2>
            <pre className="mt-2">{JSON.stringify(testResult.data || testResult.error, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
} 