import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!request.cookies.has('accessToken')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  // else {
  //   if (request.cookies.has('accessToken')) {
  //     return NextResponse.redirect(new URL('/dashboard', request.url));
  //   }
  // }
  return NextResponse.next();
}
