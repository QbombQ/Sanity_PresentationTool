import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

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

interface BlogPostProps {
  post: BlogPost
}

export default function BlogPost({ post }: BlogPostProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {post.mainImage && (
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(post.mainImage).width(400).height(200).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <span>{formatDate(post.publishedAt)}</span>
          {post.author && (
            <>
              <span>•</span>
              <span>By {post.author.name}</span>
            </>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h2>
        
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span
                key={category.slug.current}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <a
            href={`/posts/${post.slug.current}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </a>
        </div>
      </div>
    </article>
  )
}
