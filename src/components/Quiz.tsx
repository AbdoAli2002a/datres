import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, ArrowLeft, RefreshCcw, CheckCircle2, XCircle } from 'lucide-react';
import { quizData } from '../data/quizData';

export function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(idx);
    if (idx === quizData[currentIdx].correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < quizData.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOpt(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm text-center my-10">
        <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-8 drop-shadow-md" />
        <h2 className="text-4xl font-tajawal font-bold text-slate-800 dark:text-white mb-4">اكتمل الاختبار!</h2>
        <div className="text-7xl font-black text-blue-600 dark:text-blue-400 my-8 flex items-center justify-center gap-2">
          {score} <span className="text-4xl text-slate-300 dark:text-slate-600 font-normal mt-4">/ {quizData.length}</span>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-md mx-auto">
          {score > 7 ? 'ممتاز! أنت خبير في استراتيجيات التدريس الحديثة.' : score > 4 ? 'جيد جداً! لديك فهم جيد للمفاهيم الأساسية.' : 'نوصي بمراجعة الدروس والمحاولة مرة أخرى.'}
        </p>
        <button onClick={handleRestart} className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20 text-lg">
          <RefreshCcw className="w-6 h-6" />
          إعادة الاختبار
        </button>
      </motion.div>
    );
  }

  const q = quizData[currentIdx];

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="mb-10 space-y-4">
        <h2 className="text-3xl font-tajawal font-bold text-slate-800 dark:text-white text-center mb-6">اختبر معلوماتك</h2>
        <div className="flex items-center justify-between text-sm font-bold text-slate-500 dark:text-slate-400 px-2">
          <span>السؤال {currentIdx + 1} من {quizData.length}</span>
          <span>النتيجة: {score}</span>
        </div>
        <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700/50">
          <motion.div 
            className="h-full bg-gradient-to-l from-blue-600 to-indigo-500"
            initial={{ width: `${(currentIdx / quizData.length) * 100}%` }}
            animate={{ width: `${((currentIdx + 1) / quizData.length) * 100}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIdx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm"
        >
          <h3 className="text-2xl md:text-3xl font-tajawal font-bold text-slate-800 dark:text-white mb-8 leading-normal">{q.question}</h3>
          
          <div className="space-y-4">
            {q.options.map((opt, idx) => {
              const isSelected = selectedOpt === idx;
              const isCorrect = idx === q.correct;
              const showStatus = selectedOpt !== null;
              
              let btnClass = "border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50";
              if (showStatus) {
                if (isCorrect) btnClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300";
                else if (isSelected) btnClass = "border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-300";
                else btnClass = "border-slate-100 dark:border-slate-800 opacity-40";
              }

              return (
                <button
                  key={idx}
                  disabled={showStatus}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-right p-5 rounded-2xl border-2 transition-all duration-300 flex justify-between items-center ${btnClass} font-semibold text-lg text-slate-700 dark:text-slate-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500`}
                >
                  <span className="pr-2">{opt}</span>
                  {showStatus && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />}
                  {showStatus && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-rose-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {selectedOpt !== null && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10 flex justify-end">
              <button 
                onClick={handleNext} 
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all text-lg shadow-lg shadow-blue-500/20 hover:-translate-y-1"
              >
                {currentIdx < quizData.length - 1 ? 'السؤال التالي' : 'عرض النتيجة'}
                <ArrowLeft className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
