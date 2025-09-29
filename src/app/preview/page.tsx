import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export default function PreviewPage() {
  const isDraftMode = draftMode().isEnabled

  if (!isDraftMode) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Draft Mode Active
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Sanity Presentation Tool Preview
          </h1>
          
          <p className="text-gray-600 mb-6">
            This is a preview page for testing the Sanity Presentation Tool. 
            You can see this page in the Presentation Tool within your Sanity Studio.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              How to test:
            </h2>
            <ol className="list-decimal list-inside text-blue-800 space-y-1">
              <li>Go to your Sanity Studio at <code className="bg-blue-100 px-1 rounded">/studio</code></li>
              <li>Click on the "Presentation" tab in the top navigation</li>
              <li>You should see this preview page in the Presentation Tool</li>
              <li>Try editing content in the Studio to see live updates</li>
            </ol>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800">
              <strong>Note:</strong> Make sure you have set up your environment variables 
              in <code className="bg-yellow-100 px-1 rounded">.env.local</code> file.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
