import { Menu, Moon, Sun, User, Search, BookOpen, Puzzle, Microscope } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { View } from '../App';

interface TopbarProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  setActiveView: (v: View) => void;
}

const searchData = [
  {
    id: 'differentiated',
    title: 'التعليم المتمايز',
    desc: 'تلبية الاحتياجات المتنوعة والفروق الفردية',
    icon: BookOpen,
    keywords: ['فروق', 'فردية', 'أنماط', 'متمايز', 'احتياجات']
  },
  {
    id: 'jigsaw',
    title: 'إستراتيجية المهام المجزأة (Jigsaw)',
    desc: 'تعلم تعاوني وتبادل أدوار ومجموعات خبرة',
    icon: Puzzle,
    keywords: ['تعاون', 'مجموعات', 'خبراء', 'تبادل', 'لغز', 'مجزأة']
  },
  {
    id: 'microteaching',
    title: 'التدريس المصغر',
    desc: 'التدريب على مهارة مقننة وتغذية راجعة',
    icon: Microscope,
    keywords: ['تدريب', 'مهارة', 'تغذية', 'راجعة', 'تقييم', 'فيديو', 'مصغر']
  }
];

export function Topbar({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen, setActiveView }: TopbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = searchData.filter(item => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) || 
      item.keywords.some(k => k.includes(q))
    );
  });

  const handleResultClick = (id: View) => {
    setActiveView(id);
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 md:px-6 shrink-0 z-10 transition-colors relative">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="font-tajawal font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 hidden md:block">
          أ.د/زينب امين
        </h1>
      </div>

      <div className="flex-1 max-w-md mx-4 relative" ref={searchRef}>
        <div className="relative">
          <input 
            type="text" 
            placeholder="ابحث عن استراتيجية أو هدف..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => { if (searchQuery) setShowResults(true); }}
            className="w-full bg-slate-100 dark:bg-slate-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-0 rounded-full py-2 px-10 text-sm text-slate-800 dark:text-slate-200 transition-all font-cairo placeholder-slate-400"
          />
          <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {showResults && searchQuery && (
          <div className="absolute top-12 left-0 right-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden z-50">
            {filteredResults.length > 0 ? (
              <ul className="py-2">
                {filteredResults.map(res => (
                  <li key={res.id}>
                    <button 
                      onClick={() => handleResultClick(res.id as View)}
                      className="w-full text-right px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center gap-3 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center shrink-0">
                        <res.icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-100 font-tajawal text-sm">{res.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{res.desc}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-6 text-center text-slate-500 dark:text-slate-400 text-sm font-semibold">
                لا توجد نتائج مطابقة لبحثك
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
        >
          {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 py-1.5 px-3 rounded-full border border-slate-200 dark:border-slate-600">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold hidden sm:block whitespace-nowrap">الطالب</span>
        </div>
      </div>
    </header>
  );
}
