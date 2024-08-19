export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-cache',
  });
  const resData = await res.json();
  return Response.json({ ...resData });
}
