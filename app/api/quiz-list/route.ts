import { NextResponse } from 'next/server';
import { quizzes } from '@/lib/data';

export async function GET() {
  return NextResponse.json(quizzes);
} 