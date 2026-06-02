import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, ArrowRightLeft, BookOpen, Puzzle, Microscope, Target, Users, CheckCircle2, UserCog, UserCheck } from 'lucide-react';
import { View } from '../App';
import { GlossaryTerm } from './GlossaryTerm';

type StrategyKey = 'differentiated' | 'jigsaw' | 'microteaching';

const strategiesData = {
  differentiated: {
    id: 'differentiated',
    title: "التعليم المتمايز",
    icon: BookOpen,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    definition: <>تلبية احتياجات المتعلمين المتنوعة من خلال تقديم بدائل للتعلم تراعي <GlossaryTerm term="الفروق الفردية">الفروق الفردية</GlossaryTerm>.</>,
    goal: <>الوصول بجميع الطلاب إلى الإتقان ومراعاة اهتماماتهم و<GlossaryTerm term="أنماط التعلم">أنماط تعلمهم</GlossaryTerm>.</>,
    teacherRole: "ميسر، ومصمم لخبرات تعلم متنوعة تناسب مستويات الطلاب المختلفة.",
    studentRole: "متعلم نشط يختار مسار التعلم أو المنتج الأنسب لنمطه واستعداده.",
    teamSize: "فصل دراسي كامل (يتدربون بشكل فردي أو في مجموعات متجانسة/غير متجانسة).",
    steps: [
      "تحديد مستوى واهتمامات وأنماط تعلم الطلاب.",
      "تحديد الأهداف الأساسية المشتركة.",
      "تصميم أنشطة متنوعة (بصري، سمعي، حركي) لنفس المفهوم.",
      "توفير خيارات متعددة للتقييم (المنتج)."
    ]
  },
  jigsaw: {
    id: 'jigsaw',
    title: "المهام المجزأة (Jigsaw II)",
    icon: Puzzle,
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-800",
    definition: "إستراتيجية تعلم تعاوني تعتمد على تقسيم المادة وتقسيم الأدوار بين أفراد المجموعة.",
    goal: <>تشجيع <GlossaryTerm term="الاعتماد المتبادل">الاعتماد المتبادل</GlossaryTerm> الإيجابي، وتنمية روح العمل الجماعي والتواصل.</>,
    teacherRole: "مُوجه، ومنظم للمجموعات، وموفر للمصادر، ومقدم للتغذية الراجعة العامة.",
    studentRole: "باحث، ومعلم لأقرانه (عضو فعال في مجموعة خبراء ومجموعة أساسية).",
    teamSize: "فصل دراسي مقسم إلى مجموعات صغيرة (4-6 طلاب لكل مجموعة).",
    steps: [
      "تقسيم المادة العلمية لعدة أجزاء ومحاور.",
      "تكوين المجموعات الأساسية وتوزيع المهام على أفرادها.",
      "اجتماع مجموعات الخبراء (من لديهم نفس المهمة) للتعمق والدراسة.",
      "العودة للمجموعة الأساسية ليقوم كل خبير بشرح جزئه لبقية الزملاء."
    ]
  },
  microteaching: {
    id: 'microteaching',
    title: "التدريس المصغر",
    icon: Microscope,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    border: "border-rose-200 dark:border-rose-800",
    definition: "موقف تعليمي مصغر (من حيث الوقت وعدد الطلاب) للتدرب على مهارة تدريسية محددة.",
    goal: "تطوير وتقييم مهارات التدريس في بيئة آمنة ومركزة، وتلقي تغذية راجعة فورية.",
    teacherRole: "(المدرب/المشرف) مقيم وموجه يلاحظ الأداء ويقدم التغذية الراجعة البناءة.",
    studentRole: "(المعلمين المتدربين) أحدهم ينفذ مهارة محددة، والبقية يتلقون ويقيمون الأداء.",
    teamSize: "مجموعة صغيرة جداً (3-10 أشخاص).",
    steps: [
      "تحديد مهارة تدريسية واحدة للتدرب عليها.",
      "تخطيط درس قصير جداً (5-10 دقائق) يركز على هذه المهارة.",
      "التنفيذ أمام المتدربين والتسجيل التقني (فيديو).",
      "تلقي التغذية الراجعة، وتحليل الأداء، وإعادة التخطيط والتدريس إن لزم."
    ]
  }
};

export function Comparator() {
  const [strategy1, setStrategy1] = useState<StrategyKey>('differentiated');
  const [strategy2, setStrategy2] = useState<StrategyKey>('jigsaw');

  const s1 = strategiesData[strategy1];
  const s2 = strategiesData[strategy2];

  const compareFields = [
    { label: "المفهوم الأساسي", key: "definition" as const, icon: BookOpen },
    { label: "الهدف الرئيسي", key: "goal" as const, icon: Target },
    { label: "بيئة التعلم والعدد", key: "teamSize" as const, icon: Users },
    { label: "دور المعلم", key: "teacherRole" as const, icon: UserCog },
    { label: "دور المتعلم", key: "studentRole" as const, icon: UserCheck },
  ];

  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-bold mb-2 border border-emerald-200 dark:border-emerald-800/50">
          <Scale className="w-4 h-4" />
          أداة المقارنة
        </div>
        <h2 className="text-3xl md:text-4xl font-tajawal font-bold text-slate-800 dark:text-white">
          قارن بين استراتيجيات التدريس
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          اختر استراتيجيتين من القائمة أدناه لعرض مقارنة تفصيلية بين الأهداف، الأدوار، وخطوات التنفيذ، لمساعدتك في اتخاذ القرار الأنسب.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8 relative">
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-full items-center justify-center z-10 text-slate-400 shadow-sm">
          <ArrowRightLeft className="w-6 h-6" />
        </div>
        
        {/* Selector 1 */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
          <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-3">الاستراتيجية الأولى</label>
          <select 
            value={strategy1}
            onChange={(e) => setStrategy1(e.target.value as StrategyKey)}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl px-4 py-3 font-bold font-tajawal text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer appearance-none"
          >
            {Object.values(strategiesData).map(s => (
              <option key={s.id} value={s.id} disabled={s.id === strategy2}>{s.title}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 left-8 top-10 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Selector 2 */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
          <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-3">الاستراتيجية الثانية</label>
          <select 
            value={strategy2}
            onChange={(e) => setStrategy2(e.target.value as StrategyKey)}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl px-4 py-3 font-bold font-tajawal text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer appearance-none"
          >
            {Object.values(strategiesData).map(s => (
              <option key={s.id} value={s.id} disabled={s.id === strategy1}>{s.title}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 left-8 top-10 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${strategy1}-${strategy2}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-6 w-1/4 text-slate-500 dark:text-slate-400 font-bold font-tajawal align-top">وجه المقارنة</th>
                  <th className={`p-6 w-3/8 align-top ${s1.bg}`}>
                    <div className="flex items-center gap-3 mb-2">
                       <span className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm ${s1.color}`}>
                         <s1.icon className="w-5 h-5" />
                       </span>
                       <h3 className={`text-2xl font-bold font-tajawal ${s1.color}`}>{s1.title}</h3>
                    </div>
                  </th>
                  <th className={`p-6 w-3/8 align-top ${s2.bg}`}>
                     <div className="flex items-center gap-3 mb-2">
                       <span className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm ${s2.color}`}>
                         <s2.icon className="w-5 h-5" />
                       </span>
                       <h3 className={`text-2xl font-bold font-tajawal ${s2.color}`}>{s2.title}</h3>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                {compareFields.map((field, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-6 align-top">
                      <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold font-tajawal text-lg">
                         <field.icon className="w-5 h-5 text-slate-400" />
                         {field.label}
                      </div>
                    </td>
                    <td className="p-6 align-top text-slate-600 dark:text-slate-300 leading-relaxed text-lg border-r border-slate-100 dark:border-slate-700/50">
                      {s1[field.key]}
                    </td>
                    <td className="p-6 align-top text-slate-600 dark:text-slate-300 leading-relaxed text-lg border-r border-slate-100 dark:border-slate-700/50">
                      {s2[field.key]}
                    </td>
                  </tr>
                ))}
                
                {/* Steps Row (Custom formatting) */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-6 align-top">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold font-tajawal text-lg">
                        <CheckCircle2 className="w-5 h-5 text-slate-400" />
                        خطوات التنفيذ
                    </div>
                  </td>
                  <td className="p-6 align-top border-r border-slate-100 dark:border-slate-700/50">
                    <ul className="space-y-4">
                      {s1.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 font-medium">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${s1.bg} ${s1.color}`}>{i + 1}</span>
                          <span className="pt-0.5 leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-6 align-top border-r border-slate-100 dark:border-slate-700/50">
                     <ul className="space-y-4">
                      {s2.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 font-medium">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${s2.bg} ${s2.color}`}>{i + 1}</span>
                          <span className="pt-0.5 leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
