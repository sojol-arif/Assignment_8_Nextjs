import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {

  // This console 'request from proxy' will show in terminal when private link will go like animal/:id
  console.log(request, 'request from proxy');

  const session = await auth.api.getSession({
    headers: await headers()
  });

  console.log('request.nextUrl.pathname', request.nextUrl.pathname);

  // return NextResponse.redirect(new URL('/home', request.url))
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (session) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/animal/:id', '/myprofile'],
}