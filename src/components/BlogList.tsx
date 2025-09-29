import BlogPost from './BlogPost'

interface Author {
  name: string
  image?: {
    asset: {
      _id: string
      url: string
    }
  }
}

interface Category {
  title: string
  slug: {
    current: string
  }
}

interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  author?: Author
  categories?: Category[]
  body?: any[]
}

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">
            No Content Yet
          </h3>
          <p className="text-yellow-700 mb-4">
            Create your first blog post in the Sanity Studio to see it here.
          </p>
          <a
            href="/studio"
            className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Go to Studio
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogPost key={post._id} post={post} />
      ))}
    </div>
  )
}
