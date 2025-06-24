import type { APIContext } from 'astro';

export async function GET(ctx: APIContext) {
  return new Response('Hello world!', {
    status: 200,
  });
}
