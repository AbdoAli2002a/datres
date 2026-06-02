import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Grid, BookOpen, Layers, Settings, Package, MoveUp, Heart, Brain } from 'lucide-react';
import { GlossaryTerm } from './GlossaryTerm';

export function Differentiated() {
  const [tab, setTab] = useState<'text' | 'visual'>('text');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 py-6">
      <div className="text-center space-y-4">
        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-2">الفصل الأول</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-tajawal font-bold text-slate-800 dark:text-slate-100">
          التعليم المتمايز
          <span className="block text-xl text-blue-600 dark:text-blue-400 mt-3 font-cairo font-normal">Differentiated Instruction</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto pt-2">
          كيف نلبي احتياجات جميع المتعلمين في فصل واحد؟ استكشف الفلسفة والآليات.
        </p>
      </div>

      <div className="flex justify-center p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl w-fit mx-auto border border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setTab('text')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${tab === 'text' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/50 dark:border-slate-600' : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
        >
          <FileText className="w-5 h-5" />
          القراءة المفصلة
        </button>
        <button
          onClick={() => setTab('visual')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${tab === 'visual' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/50 dark:border-slate-600' : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
        >
          <Grid className="w-5 h-5" />
          الملخص البصري
        </button>
      </div>

      <AnimatePresence mode="wait">
        {tab === 'text' && (
          <motion.div 
            key="text"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 dark:border-slate-700 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold font-tajawal text-slate-800 dark:text-white flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 flex items-center justify-center font-black">؟</span>
                ما هو التعليم المتمايز؟
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-loose text-lg border-r-4 border-blue-500 pr-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-l-xl">
                يُعرف <GlossaryTerm term="التعليم المتمايز">التعليم المتمايز</GlossaryTerm> بأنه فلسفة تعليمية تهدف إلى <strong className="text-blue-600 dark:text-blue-400">تلبية احتياجات المتعلمين المتنوعة</strong> من خلال تقديم بدائل تعليمية تراعي أنماط تعلمهم واستعداداتهم، ويهدف بشكل رئيسي إلى الوصول بجميع الطلاب إلى الإتقان.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h4 className="text-xl font-bold font-tajawal text-slate-800 dark:text-white border-b-2 border-indigo-100 dark:border-indigo-900/50 pb-3 inline-block">مكونات التعليم المتمايز</h4>
                <ul className="space-y-5">
                  <li className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <strong className="block text-lg text-slate-800 dark:text-slate-200 mb-1">المحتوى (Content)</strong>
                      <span className="text-slate-600 dark:text-slate-400 leading-relaxed">ما يُتوقع من الطلاب تعلمه أو المادة العلمية.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                      <Settings className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <strong className="block text-lg text-slate-800 dark:text-slate-200 mb-1">العملية (Process)</strong>
                      <span className="text-slate-600 dark:text-slate-400 leading-relaxed">الأنشطة والعمليات التي يمارسها الطلاب.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                       <Package className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <strong className="block text-lg text-slate-800 dark:text-slate-200 mb-1">المنتج (Product)</strong>
                      <span className="text-slate-600 dark:text-slate-400 leading-relaxed">المخرجات التي تعبر عن الإتقان.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold font-tajawal text-slate-800 dark:text-white border-b-2 border-fuchsia-100 dark:border-fuchsia-900/50 pb-3 inline-block">العوامل المؤثرة</h4>
                <ul className="space-y-5">
                  <li className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center shrink-0">
                      <MoveUp className="w-6 h-6 text-fuchsia-500" />
                    </div>
                    <div>
                      <strong className="block text-lg text-slate-800 dark:text-slate-200 mb-1"><GlossaryTerm term="الاستعداد">الاستعداد</GlossaryTerm> (Readiness)</strong>
                      <span className="text-slate-600 dark:text-slate-400 leading-relaxed">مستوى الطالب المعرفي والمهاري قبل الدرس.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6 text-fuchsia-500" />
                    </div>
                    <div>
                      <strong className="block text-lg text-slate-800 dark:text-slate-200 mb-1">الاهتمام (Interest)</strong>
                      <span className="text-slate-600 dark:text-slate-400 leading-relaxed">ما يثير فضول الطالب ويدفعه لاكتشاف المعرفة.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center shrink-0">
                      <Brain className="w-6 h-6 text-fuchsia-500" />
                    </div>
                    <div>
                      <strong className="block text-lg text-slate-800 dark:text-slate-200 mb-1"><GlossaryTerm term="أنماط التعلم">نمط التعلم</GlossaryTerm> (Learning Profile)</strong>
                      <span className="text-slate-600 dark:text-slate-400 leading-relaxed">الطريقة المفضلة (بصري، سمعي، حركي).</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {tab === 'visual' && (
          <motion.div 
            key="visual"
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: BookOpen, title: 'المحتوى', desc: 'المادة العلمية المراد تعلمها، ويمكن تعديلها لتناسب فهم كل طالب.', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20', borderColor: 'group-hover:border-indigo-500' },
              { icon: Settings, title: 'العملية', desc: 'الأنشطة المتباينة التي تساعد الطلاب على استيعاب المحتوى.', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', borderColor: 'group-hover:border-blue-500' },
              { icon: Package, title: 'المنتج', desc: 'المخرجات المتنوعة التي يقدمها الطلاب لإظهار إتقانهم.', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20', borderColor: 'group-hover:border-emerald-500' },
              { icon: MoveUp, title: 'الاستعداد', desc: 'مستوى المعرفة السابقة والمهارات قبل بدء الدرس.', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', borderColor: 'group-hover:border-amber-500' },
              { icon: Heart, title: 'الاهتمام', desc: 'شغف وفضول الطالب الذي يدفعه لاكتشاف المعرفة.', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', borderColor: 'group-hover:border-rose-500' },
              { icon: Brain, title: 'نمط التعلم', desc: 'التفضيل (سمعي، بصري، حركي) في اكتساب المعلومات.', color: 'text-fuchsia-500', bg: 'bg-fuchsia-50 dark:bg-fuchsia-900/20', borderColor: 'group-hover:border-fuchsia-500' },
            ].map((item, idx) => (
              <div key={idx} className={`bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group ${item.borderColor}`}>
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-tajawal text-slate-800 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
