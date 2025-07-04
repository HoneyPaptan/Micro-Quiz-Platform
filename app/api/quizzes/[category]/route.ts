import { NextResponse } from 'next/server';
import { getQuizzesByCategory } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params;
    const quizzes = getQuizzesByCategory(category);
    
    if (quizzes.length === 0) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(quizzes);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch quizzes for category' },
      { status: 500 }
    );
  }
} 