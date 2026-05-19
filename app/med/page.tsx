'use client';

import { useState } from 'react';
import Link from 'next/link';
import guidesData from '@/data/med.json';

// Функція динамічного призначення категорій та стилів на основі вмісту
interface GuideGroup {
  category: string;
  styles: string;
  textColor: string;
  bgColor: string;
}

const getGuideGroup = (slug: string): GuideGroup => {
  if (slug.includes('cardiac') || slug.includes('bleeding') || slug.includes('stroke') || slug.includes('infarction') || slug.includes('combat')) {
    return { 
      category: 'Екстрена реанімація', 
      styles: 'hover:border-red-500/40 dark:hover:border-red-500/50', 
      textColor: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/30'
    };
  }
  if (slug.includes('burn') || slug.includes('heat') || slug.includes('poisoning') || slug.includes('overdose')) {
    return { 
      category: 'Опіки та отруєння', 
      styles: 'hover:border-orange-500/40 dark:hover:border-orange-500/50', 
      textColor: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30'
    };
  }
  if (slug.includes('drowning') || slug.includes('hypothermia')) {
    return { 
      category: 'Термічні стани / Вода', 
      styles: 'hover:border-blue-500/40 dark:hover:border-blue-500/50', 
      textColor: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30'
    };
  }
  return { 
    category: 'Травми та пошкодження', 
    styles: 'hover:border-emerald-500/40 dark:hover:border-emerald-500/50', 
    textColor: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30'
  };
};

const fixedCategories = ['Усі', 'Екстрена реанімація', 'Травми та пошкодження', 'Опіки та отруєння', 'Термічні стани / Вода'];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Усі');

  // Видаляємо дублікати з масиву med.json безпосередньо в рантаймі
  const uniqueGuides = Array.from(new Map(guidesData.map(item => [item.slug, item])).values());

  // Живий пошук + робочі фільтри категорій
  const filteredGuides = uniqueGuides.filter((guide) => {
    const groupInfo = getGuideGroup(guide.slug);
    
    const matchesSearch = 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Усі' || groupInfo.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans tracking-tight transition-colors duration-200">
      
      {/* Кнопка швидкого виклику 103 */}
      <div className="bg-slate-900 text-white dark:bg-black py-3 px-4 sticky top-0 z-50 shadow-md backdrop-blur-md bg-opacity-95 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-medium text-slate-300">Цифровий медичний довідник</span>
          </div>
          <div className="flex items-center gap-4 font-bold text-red-400">
            <a href="tel:103" className="hover:text-red-300 transition-colors flex items-center gap-1.5 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              📞 Швидка: 103
            </a>
            <a href="tel:112" className="hover:text-red-300 transition-colors flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              🚨 Служба порятунку: 112
            </a>
          </div>
        </div>
      </div>

      {/* Головний Хедер із сіткою на фоні */}
      <header className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-20 px-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-black tracking-widest text-red-600 dark:text-red-500 uppercase bg-red-50 dark:bg-red-950/40 px-3 py-1.5 rounded-full border border-red-200/40 dark:border-red-900/40">
            Стандарти першої допомоги України
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-6 text-slate-900 dark:text-white leading-none">
            Наказ МОЗ №441 <br />
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent dark:from-red-500 dark:to-orange-400">Домедична Допомога</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Інтерактивний довідник алгоритмів дій у критичних ситуаціях для осіб без медичної освіти.
          </p>

          {/* Сучасний великий інпут пошуку */}
          <div className="mt-10 max-w-xl mx-auto relative group">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-red-600 to-orange-600 opacity-15 group-focus-within:opacity-35 blur transition duration-300" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-500 transition-colors">
                <svg className="h-5 w-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Введіть симптоми або стан (напр. кровотеча, інфаркт, СЛР)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-red-500/50 dark:focus:border-red-500/50 shadow-sm text-base transition-all"
              />
            </div>
          </div>

          {/* Таби-фільтри категорій */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {fixedCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  selectedCategory === category
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-md scale-102'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Сітка преміум-карток */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-lg sm:text-xl font-black tracking-tight text-slate-800 dark:text-slate-200 mb-6">
          {searchQuery || selectedCategory !== 'Усі' 
            ? `Знайдено результатів: ${filteredGuides.length}` 
            : 'Каталог невідкладних станів'}
        </h2>

        {filteredGuides.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide, idx) => {
              const groupInfo = getGuideGroup(guide.slug);
              return (
                <Link 
                  key={`${guide.slug}-${idx}`} 
                  href={`/guides/${guide.slug}`}
                  className={`group p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${groupInfo.styles}`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tabular-nums">
                        Протокол №{(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${groupInfo.textColor} ${groupInfo.bgColor}`}>
                        {groupInfo.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold leading-snug group-hover:text-red-600 dark:text-red-400 transition-colors duration-200 text-balance text-slate-900 dark:text-white">
                      {guide.title.replace('Порядок надання домедичної допомоги ', '')}
                    </h3>
                  </div>

                  <div className={`mt-6 flex items-center text-xs font-black tracking-wider uppercase pt-4 border-t border-slate-100 dark:border-slate-800/60 transition-colors duration-200 ${groupInfo.textColor}`}>
                    Відкрити протокол дій
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
            <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-4 text-base font-medium text-slate-500 dark:text-slate-400">Нічого не знайдено. Спробуйте змінити ключові слова.</p>
          </div>
        )}
      </main>
    </div>
  );
}
