import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import Axios from 'axios';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!request.cookies.has('accessToken')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    let flag = false;
    await fetch(new URL('http://api.morandi.co.kr:8080/members/check'), {
      method: 'GET',
      headers: new Headers(request.headers),
    })
      .then((res) => {
        if (res.status === 200) {
          flag = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (!flag) {
      return NextResponse.rewrite(new URL('/dashboard/boj', request.url));
    }
  }

  return NextResponse.next();
}
