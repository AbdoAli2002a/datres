import { motion } from 'motion/react';
import { Puzzle, Users, BookOpen, Repeat, Search, Award, GraduationCap } from 'lucide-react';
import { GlossaryTerm } from './GlossaryTerm';

export function Jigsaw() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 py-6">
      <div className="text-center space-y-4">
        <div className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-bold mb-2">الفصل الثاني</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-tajawal font-bold text-slate-800 dark:text-slate-100">
          إستراتيجية المهام المجزأة
          <span className="block text-xl text-indigo-600 dark:text-indigo-400 mt-3 font-cairo font-normal underline decoration-indigo-200 dark:decoration-indigo-900/50 underline-offset-8">Jigsaw II</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto pt-2">
          التعلم التعاوني الفعال القائم على تبادل الأدوار.
        </p>
      </div>

      <div className="grid xl:grid-cols-5 gap-6">
        <div className="xl:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden shadow-lg shadow-indigo-600/20">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
               <Puzzle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold font-tajawal mb-4 text-white">المفهوم الأساسي</h3>
            <p className="text-indigo-50 text-lg md:text-xl leading-loose font-light">
              إستراتيجية تعلم تعاوني تعتمد على <strong className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">تقسيم المادة العلمية</strong>، بحيث يكون كل عضو مسؤولاً عن تعلم جزء محدد ليعلمه لبقية مجموعته.
            </p>
          </div>
          <Puzzle className="absolute -bottom-12 -left-12 w-80 h-80 text-white opacity-5 transform rotate-12" />
        </div>

        <div className="xl:col-span-3 grid sm:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-bold font-tajawal text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">دور المعلم</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span><span className="text-lg">الموجه والمخطط للمجموعات</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span><span className="text-lg">يختار وينظم المادة</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span><span className="text-lg">يوفر المصادر اللازمة للتنفيذ</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span><span className="text-lg">يقدم التغذية الراجعة المستمرة</span></li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-bold font-tajawal text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">دور المتعلم</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span><span className="text-lg">الباحث والقائد للمهمة</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span><span className="text-lg">يتحمل المسؤولية أمام الفريق</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span><span className="text-lg">يحترم الآخرين ويتعاون معهم</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span><span className="text-lg">يبحث عن المعلومة ويصوغها</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-2xl font-bold font-tajawal text-slate-800 dark:text-white mb-10 flex items-center gap-3">
          <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
          خطوات التنفيذ
        </h3>
        
        <div className="relative border-r-2 border-indigo-100 dark:border-indigo-900/30 pr-8 space-y-10 ml-4">
          {[
            { icon: BookOpen, title: 'مرحلة التخطيط', desc: 'تحديد الأهداف، وتجهيز المادة العلمية، وتقسيم الطلاب إلى مجموعات أساسية غير متجانسة.' },
            { icon: Search, title: 'مجموعات الخبرة', desc: 'يجتمع <GlossaryTerm term="مجموعات الخبراء">طلاب المهام المتشابهة</GlossaryTerm> من كل مجموعة لتعلم الجزء المخصص لهم والتعمق فيه.' },
            { icon: Repeat, title: 'العودة للمجموعات', desc: 'يعود الخبراء لتعليم زملائهم في مجموعاتهم الأساسية ما توصلوا إليه.' },
            { icon: Award, title: 'التقييم والتعزيز', desc: 'إجراء اختبارات وتقديم التغذية الراجعة والمكافآت للمجموعات المتميزة.' },
          ].map((step, idx) => (
            <div key={idx} className="relative group hover:-translate-x-2 transition-transform">
              <div className="absolute -right-[50px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 border-4 border-indigo-500 rounded-full flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400 text-lg shadow-sm group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <step.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="text-xl font-bold font-tajawal text-slate-800 dark:text-white">{step.title}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg mr-14 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
