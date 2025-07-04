import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import QuizClient from './QuizClient';
import { headers } from 'next/headers';

export async function generateMetadata({ params }: { params: Promise<any> }): Promise<Metadata> {
  const { id } = await params;
  const quiz = await fetchQuiz(id);
  if (!quiz) return {};
  return {
    title: `${quiz.title} | Micro-Quiz Platform`,
    description: quiz.description,
  };
}

async function fetchQuiz(quizId: string) {
  const h = await headers();
  const host = h.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${protocol}://${host}/api/quiz/${quizId}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function QuizPage({ params }: { params: Promise<any> }) {
  const { id } = await params;
  const quiz = await fetchQuiz(id);
  if (!quiz) return notFound();

  return <QuizClient quiz={quiz} />;
} 