import { NextRequest, NextResponse } from 'next/server';
import { quizzes } from '../../../../lib/data';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params;
    const categoryQuizzes = quizzes.filter(quiz => quiz.category === category);
    
    if (categoryQuizzes.length === 0) {
      return NextResponse.json(
        { error: 'No quizzes found for this category' },
        { status: 404 }
      );
    }

    return NextResponse.json(categoryQuizzes);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch quizzes' },
      { status: 500 }
    );
  }
} 