import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
  //   cache: 'no-cache',
  // });
  const res = await fetch('http://localhost:3000/api', {
    cache: 'no-cache',
  });
  const resData = await res.json();

  console.log(resData);

  return NextResponse.next();
}
