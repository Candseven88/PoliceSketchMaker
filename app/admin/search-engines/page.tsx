'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function SearchEngineAdmin() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lastSubmission, setLastSubmission] = useState<any>(null)
  const [customUrls, setCustomUrls] = useState('')

  const submitAllPages = async () => {
    setIsSubmitting(true)
    
    // 显示开始提交的消息
    toast.loading('正在提交页面到搜索引擎...', { id: 'submit-pages' })
    
    try {
      const response = await fetch('/api/submit-to-search-engines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'all' }),
      })

      const result = await response.json()
      
      if (response.ok) {
        toast.success(
          `✅ 成功提交 ${result.submittedUrls.length} 个页面到 ${result.searchEngines.join(', ')}`,
          { id: 'submit-pages', duration: 5000 }
        )
        setLastSubmission({
          ...result,
          submissionTime: new Date().toLocaleString('zh-CN')
        })
        console.log('Submission successful:', result)
      } else {
        toast.error(`❌ 提交失败: ${result.error || 'Unknown error'}`, { id: 'submit-pages' })
        console.error('API error:', result)
      }
    } catch (error) {
      console.error('Submission error:', error)
      toast.error('❌ 网络错误，请检查网络连接', { id: 'submit-pages' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const submitCustomUrls = async () => {
    if (!customUrls.trim()) {
      toast.error('Please enter URLs to submit')
      return
    }

    const urls = customUrls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0)

    if (urls.length === 0) {
      toast.error('No valid URLs found')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit-to-search-engines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls }),
      })

      const result = await response.json()
      
      if (response.ok) {
        toast.success(`Successfully submitted ${urls.length} custom URLs`)
        setLastSubmission(result)
        setCustomUrls('')
      } else {
        toast.error(result.error || 'Failed to submit URLs')
      }
    } catch (error) {
      console.error('Submission error:', error)
      toast.error('Network error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const checkIndexNowStatus = async () => {
    try {
      const response = await fetch('/api/submit-to-search-engines')
      const result = await response.json()
      
      if (response.ok) {
        toast.success('IndexNow API is active and ready')
        console.log('IndexNow Status:', result)
      } else {
        toast.error('IndexNow API is not responding')
      }
    } catch (error) {
      toast.error('Failed to check IndexNow status')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Search Engine Submission Admin</h1>
        
        {/* Search Engine Verification Status */}
        <div className="bg-slate-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Search Engine Verification Status</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Bing Verification */}
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-blue-400 mb-3">Bing Webmaster Tools</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-400">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Meta Tag Verified
                </div>
                <p className="text-slate-400">
                  <code className="bg-slate-700 px-2 py-1 rounded text-xs">
                    msvalidate.01: 2A3D6A7DDB964111DE8F41E18922EAC1
                  </code>
                </p>
                <a 
                  href="https://www.bing.com/webmasters" 
                  target="_blank" 
                  className="text-blue-400 hover:underline inline-flex items-center"
                >
                  Manage in Bing Webmaster Tools
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Yandex Verification */}
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-yellow-400 mb-3">Yandex Webmaster</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-400">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  HTML File Verified
                </div>
                <p className="text-slate-400">
                  <a 
                    href="/yandex_677dba60c0824767.html" 
                    target="_blank" 
                    className="text-blue-400 hover:underline"
                  >
                    yandex_677dba60c0824767.html
                  </a>
                </p>
                <a 
                  href="https://webmaster.yandex.com" 
                  target="_blank" 
                  className="text-blue-400 hover:underline inline-flex items-center"
                >
                  Manage in Yandex Webmaster
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* IndexNow Status */}
          <div className="bg-slate-800 rounded-lg p-4">
            <h3 className="text-lg font-medium text-purple-400 mb-3">IndexNow Protocol</h3>
            <div className="flex gap-4 mb-4">
              <button
                onClick={checkIndexNowStatus}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm"
              >
                Check API Status
              </button>
            </div>
            <div className="text-sm text-slate-400 space-y-1">
              <p>• IndexNow API Key: f0ef1c3f...ea5 (configured)</p>
              <p>• Supported Search Engines: Bing, Yandex, IndexNow API</p>
              <p>• Key File: <a href="/f0ef1c3f63f3c438d486f003417584218945df9e039dffc49dc6d6a294472ea5.txt" target="_blank" className="text-blue-400 hover:underline">Verify Key File</a></p>
            </div>
          </div>
        </div>

        {/* Submit All Pages */}
        <div className="bg-slate-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Submit All Important Pages</h2>
          <p className="text-slate-300 mb-4">
            This will submit all important pages to search engines via IndexNow protocol.
          </p>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Pages to be submitted:</h3>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Homepage (/)</li>
              <li>• About Page (/about)</li>
              <li>• AI Image Describer (/ai-image-describer)</li>
              <li>• Blog (/blog)</li>
              <li>• How to Make Sketch Guide (/blog/how-to-make-sketch-of-face-complete-guide)</li>
              <li>• AI Photo Editing Guide (/blog/ai-photo-editing-revolution-professional-techniques)</li>
            </ul>
          </div>
          <button
            onClick={submitAllPages}
            disabled={isSubmitting}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-lg transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit All Pages'}
          </button>
        </div>

        {/* Custom URL Submission */}
        <div className="bg-slate-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Submit Custom URLs</h2>
          <p className="text-slate-300 mb-4">
            Enter URLs (one per line) to submit to search engines:
          </p>
          <textarea
            value={customUrls}
            onChange={(e) => setCustomUrls(e.target.value)}
            placeholder="/new-page&#10;/updated-content&#10;https://policesketchmaker.it.com/specific-page"
            className="w-full h-32 bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-100 mb-4"
          />
          <button
            onClick={submitCustomUrls}
            disabled={isSubmitting || !customUrls.trim()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-lg transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Custom URLs'}
          </button>
        </div>

        {/* Last Submission Results */}
        {lastSubmission && (
          <div className="bg-slate-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Last Submission Results</h2>
            <div className="bg-slate-800 rounded-lg p-4">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                {JSON.stringify(lastSubmission, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {/* Search Engine Submission Links */}
        <div className="bg-slate-900 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Manual Search Engine Submission</h2>
          <p className="text-slate-300 mb-4">
            For additional coverage, you can manually submit your sitemap to these search engines:
          </p>
          <div className="space-y-2 text-sm">
            <div>
              <strong>Google Search Console:</strong>
              <a href="https://search.google.com/search-console" target="_blank" className="text-blue-400 hover:underline ml-2">
                Submit Sitemap
              </a>
            </div>
            <div>
              <strong>Bing Webmaster Tools:</strong>
              <a href="https://www.bing.com/webmasters" target="_blank" className="text-blue-400 hover:underline ml-2">
                Submit Sitemap
              </a>
            </div>
            <div>
              <strong>Yandex Webmaster:</strong>
              <a href="https://webmaster.yandex.com" target="_blank" className="text-blue-400 hover:underline ml-2">
                Submit Sitemap
              </a>
            </div>
            <div>
              <strong>Baidu Search Resource Platform:</strong>
              <a href="https://ziyuan.baidu.com" target="_blank" className="text-blue-400 hover:underline ml-2">
                Submit Sitemap
              </a>
            </div>
          </div>
          <div className="mt-4 p-3 bg-slate-800 rounded">
            <p className="text-sm text-slate-400">
              Sitemap URL: <code className="text-blue-400">https://policesketchmaker.it.com/sitemap.xml</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 