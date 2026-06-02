import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Info } from 'lucide-react';

const dictionary: Record<string, string> = {
  "الفروق الفردية": "الاختلافات بين الطلاب في الاستعدادات والقدرات والأنماط المعرفية والاهتمامات وسرعة التعلم.",
  "التعليم المتمايز": "نهج تعليمي يهدف لتعديل المنهج وطرق التدريس وبيئة التعلم لتلبي الاحتياجات المتنوعة لكل طالب.",
  "الاعتماد المتبادل": "حالة يرتبط فيها نجاح الفرد بنجاح مجموعته، بحيث لا يمكن لأحد أن ينجح إلا إذا نجح الجميع، مما يحفز التعاون الإيجابي.",
  "التغذية الراجعة": "معلومات توجيهية تقدم للمتعلم حول أدائه لمساعدته على التحسين المستمر وتصحيح الأخطاء في وقت قصير.",
  "أنماط التعلم": "الطرق المفضلة لدى المتعلم في استقبال المعلومات ومعالجتها (مثل النمط البصري، السمعي، أو الحركي).",
  "الاستعداد": "مستوى المعرفة والمهارات السابقة التي يمتلكها الطالب قبل البدء في تعلم موضوع جديد.",
  "مجموعات الخبراء": "تشكيل فرعي في استراتيجية جيغسو يجمع الطلاب الذين لديهم نفس المهمة أو الجزء ليتدارسوه بعمق قبل العودة لمجموعاتهم.",
  "التدريس المصغر": "موقف تدريسي مبسط يصغر فيه حجم الفصل ووقت التدريس للتركيز على التدريب على مهارة تدريسية واحدة محددة."
};

export function GlossaryTerm({ term, children }: { term: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const definition = dictionary[term];

  if (!definition) return <>{children}</>;

  return (
    <span className="relative inline-block" ref={ref}>
      <button 
        onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
        className="inline-flex items-baseline border-b-2 border-dashed border-blue-400 dark:border-blue-500 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all cursor-help relative z-10 px-0.5 rounded-sm focus:outline-none"
        title="انقر لمعرفة المعنى"
      >
        {children}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-sm p-4 rounded-2xl shadow-xl font-cairo text-right border border-slate-700 dark:border-slate-100"
          >
            <div className="font-bold border-b border-slate-600/50 dark:border-slate-200 pb-2 mb-2 flex items-center gap-2">
               <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                  <Info className="w-3.5 h-3.5" />
               </span>
               <span className="text-base">{term}</span>
            </div>
            <p className="leading-relaxed text-slate-300 dark:text-slate-600 font-medium">
              {definition}
            </p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 -mt-2 rotate-45 bg-slate-800 dark:bg-white border-b border-r border-slate-700 dark:border-slate-100"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
