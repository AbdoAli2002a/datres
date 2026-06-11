import { BookOpen, GraduationCap, LayoutDashboard, Microscope, Puzzle, BrainCircuit, Lightbulb, Scale, Users } from 'lucide-react';
import { View } from '../App';

interface SidebarProps {
  activeView: View;
  setActiveView: (v: View) => void;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export function Sidebar({ activeView, setActiveView, isOpen }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'الرئيسية', icon: LayoutDashboard },
    { id: 'team', label: 'الإشراف والإعداد', icon: Users },
    { id: 'recommender', label: 'المرشد الذكي', icon: Lightbulb },
    { id: 'compare', label: 'مقارنة الاستراتيجيات', icon: Scale },
    { id: 'differentiated', label: 'التعليم المتمايز', icon: BookOpen },
    { id: 'jigsaw', label: 'إستراتيجية Jigsaw', icon: Puzzle },
    { id: 'microteaching', label: 'التدريس المصغر', icon: Microscope },
    { id: 'quiz', label: 'اختبر معلوماتك', icon: BrainCircuit },
  ];

  return (
    <aside className={`fixed inset-y-0 right-0 z-40 transform flex flex-col w-64 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4 md:p-6 flex items-center justify-center gap-3 border-b border-slate-200 dark:border-slate-700 h-16 shrink-0">
        <GraduationCap className="text-blue-600 dark:text-blue-400 w-8 h-8 shrink-0" />
        <span className="font-tajawal font-bold text-xl text-slate-800 dark:text-slate-100 whitespace-nowrap overflow-hidden">
          استراتيجيات التدريس
        </span>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id as View)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeView === item.id 
                ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-bold' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50'
            }`}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <span className="font-cairo truncate">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-slate-700 font-cairo text-center text-xs text-slate-500">
        إعداد: عبدالرحمن علي خالد 
      </div>
    </aside>
  );
}
