import { motion } from 'motion/react';
import { ArrowLeft, Play, Users, Puzzle, CheckCircle, Lightbulb } from 'lucide-react';
import { View } from '../App';

export function Hero({ setActiveView }: { setActiveView: (v: View) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col xl:flex-row items-center gap-12 py-6 md:py-10"
    >
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold font-tajawal border border-blue-100 dark:border-blue-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          نظام تعليمي متطور
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-tajawal font-extrabold leading-tight text-slate-900 dark:text-white">
           استراتيجيات التدريس <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-indigo-500">الحديثة</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          مرحباً بك في منصتنا التعليمية. نقدم لك شرحاً مفصلاً ومتعدد الأساليب لمفاهيم تعليمية أساسية: التعليم المتمايز، إستراتيجية المهام المجزأة (Jigsaw II)، والتدريس المصغر.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button 
            onClick={() => setActiveView('differentiated')}
            className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1"
          >
            ابدأ التعلم
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setActiveView('recommender')}
            className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold transition-all hover:-translate-y-1 shadow-sm"
          >
            <Lightbulb className="w-5 h-5" />
            جرب المرشد الذكي
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col gap-1">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-indigo-500" />
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200">تفاعل</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">بيئة تعلم تعاونية</span>
          </div>
          <div className="flex flex-col gap-1">
             <div className="w-10 h-10 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center mb-2">
              <Puzzle className="w-5 h-5 text-fuchsia-500" />
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200">ابتكار</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">استراتيجيات حديثة</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mb-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200">الجودة</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">محتوى علمي موثوق</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative hidden xl:block w-full">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-500/20 rounded-[3rem] transform rotate-3 scale-105"></div>
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
          alt="صورة تعليمية معبرة" 
          className="relative rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700 w-full object-cover aspect-[4/3]" 
        />
        
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -right-6 top-1/4 bg-white/95 dark:bg-slate-800/95 backdrop-blur tracking-wider p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-200 dark:border-slate-700"
        >
          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
            <span className="font-tajawal font-bold text-xl">100%</span>
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-bold text-slate-800 dark:text-slate-200">تركيز عالي</span>
            <span className="text-slate-500 dark:text-slate-400">استيعاب أكبر للمفاهيم</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
