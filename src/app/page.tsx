import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from '@/sanity/lib/live';
import { postsQuery } from '@/sanity/lib/queries';
import BlogList from '@/components/BlogList';

export default async function Home() {
  // Fetch posts from Sanity
  const result = await sanityFetch({
    query: postsQuery,
    params: {},
  });
  
  const posts = result.data || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <Image
            className="mx-auto mb-6"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sanity + Next.js Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Live content from Sanity CMS
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto">
          {/* Quick Access Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Studio Access Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Sanity Studio
              </h2>
              <p className="text-gray-600 mb-4">
                Access your content management system to create and edit blog posts, authors, and categories.
              </p>
              <Link
                href="/studio"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open Studio
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            {/* Preview Access Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Preview Mode
              </h2>
              <p className="text-gray-600 mb-4">
                Test the Presentation Tool with live preview functionality.
              </p>
              <Link
                href="/preview"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Test Preview
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Blog Posts Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Posts
              </h2>
              <Link
                href="/studio"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Add New Post →
              </Link>
            </div>
            
            <BlogList posts={posts} />
          </section>

          {/* Instructions */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              How to Test Presentation Tool
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</div>
                <div>
                  <p className="text-gray-700">
                    <strong>Set up environment variables:</strong> Update your <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file with your Sanity project details.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</div>
                <div>
                  <p className="text-gray-700">
                    <strong>Install dependencies:</strong> Run <code className="bg-gray-100 px-2 py-1 rounded">npm install @sanity/presentation</code>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</div>
                <div>
                  <p className="text-gray-700">
                    <strong>Start the development server:</strong> Run <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">4</div>
                <div>
                  <p className="text-gray-700">
                    <strong>Test the Presentation Tool:</strong> Go to <code className="bg-gray-100 px-2 py-1 rounded">/studio</code> and click on the "Presentation" tab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600">
          <p>Built with Next.js 15 and Sanity CMS</p>
        </footer>
      </div>
    </div>
  );
}
