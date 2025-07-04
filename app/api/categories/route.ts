import { NextResponse } from 'next/server';
import { categories } from '../../../lib/data';

export async function GET() {
  try {
    return NextResponse.json(categories);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}