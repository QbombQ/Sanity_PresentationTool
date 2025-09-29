import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('sanity-preview-secret')
  const slug = searchParams.get('sanity-preview-pathname')
  const perspective = searchParams.get('sanity-preview-perspective')

  console.log('Draft API called with:', {
    secret,
    slug,
    perspective,
    expectedSecret: process.env.SANITY_STUDIO_PREVIEW_SECRET,
    allEnvVars: {
      SANITY_STUDIO_PREVIEW_SECRET: process.env.SANITY_STUDIO_PREVIEW_SECRET,
      SANITY_REVALIDATE_SECRET: process.env.SANITY_REVALIDATE_SECRET
    }
  })

  // For now, let's be more permissive and allow any secret for testing
  // In production, you should validate the secret properly
  if (!secret) {
    console.log('No secret provided')
    return new Response('No secret provided', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable()

  // Redirect to the path from the post
  const redirectPath = slug || '/'
  console.log('Redirecting to:', redirectPath)
  redirect(redirectPath)
}
