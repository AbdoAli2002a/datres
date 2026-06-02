import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Hero } from './components/Hero';
import { Differentiated } from './components/Differentiated';
import { Jigsaw } from './components/Jigsaw';
import { Microteaching } from './components/Microteaching';
import { Quiz } from './components/Quiz';
import { Recommender } from './components/Recommender';
import { Comparator } from './components/Comparator';
import { Team } from './components/Team';

export type View = 'home' | 'team' | 'recommender' | 'differentiated' | 'jigsaw' | 'microteaching' | 'quiz' | 'compare';

export default function App() {
  const [activeView, setActiveView] = useState<View>('home');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderView = () => {
    switch (activeView) {
      case 'home': return <Hero setActiveView={setActiveView} />;
      case 'team': return <Team />;
      case 'recommender': return <Recommender setActiveView={setActiveView} />;
      case 'compare': return <Comparator />;
      case 'differentiated': return <Differentiated />;
      case 'jigsaw': return <Jigsaw />;
      case 'microteaching': return <Microteaching />;
      case 'quiz': return <Quiz />;
      default: return <Hero setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-cairo text-slate-800 dark:text-slate-200" dir="rtl">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-30 md:hidden backdrop-blur-sm transition-opacity" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}
      
      <div className="print:hidden z-40">
        <Sidebar activeView={activeView} setActiveView={setActiveView} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      </div>
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden print:overflow-visible">
        <div className="print:hidden">
          <Topbar darkMode={darkMode} setDarkMode={setDarkMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setActiveView={setActiveView} />
        </div>
        
        <main className="flex-1 overflow-y-auto print:overflow-visible p-4 md:p-8 custom-scrollbar scroll-smooth print:p-0">
          <div className="max-w-7xl mx-auto h-full print:max-w-none">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
}
