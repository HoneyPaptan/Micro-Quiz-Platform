import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import QuizClient from './QuizClient';

interface QuizPageProps {
  params: Promise<{ id: string }>;
}

async function fetchQuiz(id: string) {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const host = typeof window === 'undefined' ? require('next/headers').headers().get('host') : window.location.host;
  const res = await fetch(`${protocol}://${host}/api/quiz/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const { id } = await params;
  const quiz = await fetchQuiz(id);
  if (!quiz) return {};
  return {
    title: `${quiz.title} | Micro-Quiz Platform`,
    description: quiz.description,
  };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params;
  const quiz = await fetchQuiz(id);
  if (!quiz) return notFound();
  return <QuizClient quiz={quiz} />;
} 