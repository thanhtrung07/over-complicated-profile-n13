// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block direct access to uploads folder
  if (pathname.startsWith('/uploads/')) {
    return NextResponse.json(
      { error: 'Direct access not allowed' },
      { status: 403 }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/uploads/:path*'],
}
