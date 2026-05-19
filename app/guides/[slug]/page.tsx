/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import guidesDataRaw from '@/data/med.json';
import Navbar from '@/app/components/NavBar';

interface MedicalGuide {
  slug: string;
  title: string;
  content: string;
  category?: string;
}

const guidesData = guidesDataRaw as MedicalGuide[];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guidesData.find((g) => g.slug === slug);

  if (!guide) notFound();

  // Кастомні компоненти для рендерингу Markdown-тегів у красивий UI
  const markdownComponents = {
    // Головний заголовок сторінки
    h1: ({ children }: any) => (
      <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white border-b-4 border-red-500/20 pb-5 mb-8 text-balance uppercase sm:leading-tight">
        {children}
      </h1>
    ),
    // Підзаголовки (напр. "Ознаки", "Допомога")
    h2: ({ children }: any) => (
      <h2 className="text-xl sm:text-2xl font-black tracking-tight text-red-600 dark:text-red-400 mt-10 mb-5 flex items-center gap-2 border-l-4 border-red-500 pl-3">
        {children}
      </h2>
    ),
    // Списки дій 1), 2) або 1., 2.
    ol: ({ children }: any) => (
      <ol className="space-y-3.5 my-6 list-none p-0">
        {children}
      </ol>
    ),
    // Елемент нумерованого списку (робимо великі гарні цифри)
    li: ({ children }: any) => {
      return (
        <li className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm transition-all hover:bg-slate-100/50 dark:hover:bg-slate-800/40 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
          <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-red-600 text-white dark:bg-red-500 font-black text-xs flex items-center justify-center shadow-sm tabular-nums">
            •
          </div>
          <span className="w-full">{children}</span>
        </li>
      );
    },
    // Простий текст
    p: ({ children }: any) => (
      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed my-4 font-medium">
        {children}
      </p>
    ),
    // Сильне виділення тексту
    strong: ({ children }: any) => (
      <strong className="font-extrabold text-slate-950 dark:text-white bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-md text-[15px]">
        {children}
      </strong>
    ),
    // Спеціальні попередження через блоки цитат (> Важливо)
    blockquote: ({ children }: any) => (
      <div className="my-8 p-5 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 dark:border-red-500 rounded-r-2xl text-sm sm:text-base text-red-900 dark:text-red-300 font-medium shadow-sm">
        {children}
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-red-500 selection:text-white transition-colors duration-200">
      
      {/* Навігаційна панель */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-900 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link 
            href="/med" 
            className="inline-flex items-center text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors group"
          >
            <svg className="w-5 h-5 mr-1.5 stroke-[2.5] transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Назад до каталогу
          </Link>
          <span className="text-xs font-black bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 px-3 py-1.5 rounded-full border border-red-200/40 dark:border-red-900/40 uppercase tracking-wider">
            Наказ МОЗ №441
          </span>
        </div>
      </nav>

      {/* Основний контейнер контенту */}
      <main className="max-w-3xl mx-auto py-10 px-4">
        <div className="bg-white dark:bg-slate-900 p-5 sm:p-10 rounded-[2rem] border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-200/40 dark:shadow-none relative overflow-hidden">
          
          {/* Декоративний медичний хрест на бекграунді */}
          <div className="absolute top-6 right-6 text-slate-100 dark:text-slate-800/30 pointer-events-none select-none hidden sm:block">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 /1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
            </svg>
          </div>

          {/* Рендеримо контент з використанням наших кастомних UI-компонентів */}
          <ReactMarkdown components={markdownComponents as any}>
            {guide.content}
          </ReactMarkdown>
          
          {/* Дисклеймер безпеки */}
          <div className="mt-12 p-5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 rounded-2xl text-xs text-amber-800 dark:text-amber-400/90 leading-relaxed font-medium">
            <strong>Важливо для користувача:</strong> Цей цифровий довідник містить офіційний текст регламенту Наказу МОЗ №441. Електронні алгоритми надані виключно для швидкого ознайомлення та не замінюють практичного відпрацювання навичок першої допомоги на тренажерах-манекенах.
          </div>

        </div>
      </main>
      <Navbar />
    </div>
  );
}
