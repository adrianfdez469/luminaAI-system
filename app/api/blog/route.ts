import { NextResponse } from 'next/server';
import blogData from '@/data/blog.json';

/**
 * API Route for blog posts
 * GET /api/blog - Returns all blog posts
 */
export async function GET() {
  try {
    return NextResponse.json(blogData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

