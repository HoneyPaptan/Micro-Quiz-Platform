import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface CategoryPageProps {
  params: { category: string };
}

async function fetchCategory(categoryId: string) {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const host = typeof window === 'undefined' ? require('next/headers').headers().get('host') : window.location.host;
  const res = await fetch(`${protocol}://${host}/api/categories`, { cache: 'no-store' });
  if (!res.ok) return null;
  const categories = await res.json();
  return categories.find((cat: any) => cat.id === categoryId) || null;
}

async function fetchQuizzes(categoryId: string) {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const host = typeof window === 'undefined' ? require('next/headers').headers().get('host') : window.location.host;
  const res = await fetch(`${protocol}://${host}/api/quizzes/${categoryId}`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await fetchCategory(params.category);
  if (!category) return {};
  return {
    title: `${category.name} Quizzes | Micro-Quiz Platform`,
    description: `Explore quizzes in the ${category.name} category. ${category.description}`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await fetchCategory(params.category);
  if (!category) return notFound();
  const quizzes = await fetchQuizzes(params.category);

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Pill label */}
        <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 mb-4 border border-gray-200">
          {category.name} quizzes
        </span>
        {/* Heading and subtitle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {category.name} Quizzes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {category.description}
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 mt-4 md:mt-0 font-semibold"
            asChild
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
        {/* Quiz Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizzes.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              No quizzes found in this category.
            </div>
          ) : (
            quizzes.map((quiz: any) => (
              <Link
                key={quiz.id}
                href={`/quiz/${quiz.id}`}
                className="rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100 hover:shadow-md transition block"
              >
                <Image
                  src={quiz.imageUrl || "/placeholder.jpg"}
                  alt={quiz.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {quiz.description.length > 50
                      ? quiz.description.slice(0, 50) + "..."
                      : quiz.description}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
} 