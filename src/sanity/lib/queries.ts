import { groq } from 'next-sanity'

// Query to get all posts with their author and categories
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    categories[]->{
      title,
      slug
    },
    body
  }
`

// Query to get a single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    categories[]->{
      title,
      slug
    },
    body
  }
`

// Query to get all authors
export const authorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    image {
      asset->{
        _id,
        url
      }
    },
    bio
  }
`

// Query to get all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`
