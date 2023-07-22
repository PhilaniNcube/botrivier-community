import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'


export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {data: {session}} = await supabase.auth.getSession()

    if (req.nextUrl.pathname.startsWith('/dashboard')) {

    // If the user is not logged in, redirect to login
    if (!session) {
      return NextResponse.rewrite(new URL('/login', req.url))
    }

    return NextResponse.next()
  }

  return res
}
