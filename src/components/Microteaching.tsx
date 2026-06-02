import { motion } from 'motion/react';
import { MessageSquare, Video, ShieldAlert, Users, Clock, Target, Rocket, Lightbulb } from 'lucide-react';
import { GlossaryTerm } from './GlossaryTerm';

export function Microteaching() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 py-6">
      <div className="text-center space-y-4">
        <div className="inline-block px-3 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full text-sm font-bold mb-2">الفصل الثالث</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-tajawal font-bold text-slate-800 dark:text-slate-100">
          التدريس المصغر
          <span className="block text-xl text-rose-600 dark:text-rose-400 mt-3 font-cairo font-normal">Microteaching</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto pt-2">
          تدريب عملي قصير ومكثف لاكتساب الكفايات التدريسية في بيئة آمنة ومركزة.
        </p>
      </div>
      
      <div className="bg-rose-600 dark:bg-rose-700 rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-rose-600/20 text-center relative overflow-hidden">
         <Lightbulb className="absolute -left-10 -top-10 w-40 h-40 text-white/10" />
         <p className="text-xl md:text-2xl leading-relaxed font-tajawal relative z-10 max-w-4xl mx-auto">
            <GlossaryTerm term="التدريس المصغر">موقف تعليمي مصغر</GlossaryTerm> يشارك فيه عدد محدود من الطلاب (3 - 10) لفترة زمنية قصيرة (5 - 10 دقائق)، يركز فيه المعلم على مهارة تدريسية واحدة في بيئة آمنة.
         </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl text-center border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 hover:shadow-md transition-all group">
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
             <MessageSquare className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="font-bold text-xl mb-3 text-slate-800 dark:text-white font-tajawal"><GlossaryTerm term="التغذية الراجعة">التغذية الراجعة</GlossaryTerm></h3>
          <p className="text-slate-600 dark:text-slate-400">العنصر الأهم عبر المشرف أو الزملاء للتحسين المستمر.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl text-center border border-slate-200 dark:border-slate-700 shadow-sm hover:border-purple-500 hover:shadow-md transition-all group">
          <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <Video className="w-8 h-8 text-purple-500" />
          </div>
          <h3 className="font-bold text-xl mb-3 text-slate-800 dark:text-white font-tajawal">التسجيل التقني</h3>
          <p className="text-slate-600 dark:text-slate-400">تسجيل الأداء بالفيديو للرؤية والتقييم الذاتي الدقيق.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl text-center border border-slate-200 dark:border-slate-700 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group">
          <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <ShieldAlert className="w-8 h-8 text-emerald-500" />
          </div>
          <h3 className="font-bold text-xl mb-3 text-slate-800 dark:text-white font-tajawal">البيئة الآمنة</h3>
          <p className="text-slate-600 dark:text-slate-400">التدريب في جو مريح يقلل من رهبة الموقف الحقيقي.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-8 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
          <h3 className="text-2xl font-bold font-tajawal text-slate-800 dark:text-white">التدريس المصغر <span className="text-slate-400 dark:text-slate-500 mx-2 text-lg">مقابل</span> التدريس التقليدي</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 text-sm md:text-base">
                <th className="p-6 font-semibold w-1/3">وجه المقارنة</th>
                <th className="p-6 font-semibold w-1/3">التدريس التقليدي</th>
                <th className="p-6 font-bold text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-900/5 w-1/3">التدريس المصغر</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50 text-base md:text-lg">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="p-6 font-semibold text-slate-700 dark:text-slate-300"><div className="flex items-center gap-3"><Users className="w-5 h-5 text-slate-400"/> عدد الطلاب</div></td>
                <td className="p-6 text-slate-600 dark:text-slate-400">كبير (فصل كامل)</td>
                <td className="p-6 text-rose-700 dark:text-rose-300 bg-rose-50/50 dark:bg-rose-900/5 font-semibold">محدود (3 - 10 طلاب)</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="p-6 font-semibold text-slate-700 dark:text-slate-300"><div className="flex items-center gap-3"><Clock className="w-5 h-5 text-slate-400"/> الوقت المستغرق</div></td>
                <td className="p-6 text-slate-600 dark:text-slate-400">طويل (45 دقيقة)</td>
                <td className="p-6 text-rose-700 dark:text-rose-300 bg-rose-50/50 dark:bg-rose-900/5 font-semibold">قصير (5 - 20 دقيقة)</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="p-6 font-semibold text-slate-700 dark:text-slate-300"><div className="flex items-center gap-3"><Target className="w-5 h-5 text-slate-400"/> التركيز والمهارات</div></td>
                <td className="p-6 text-slate-600 dark:text-slate-400">متعددة ومتداخلة</td>
                <td className="p-6 text-rose-700 dark:text-rose-300 bg-rose-50/50 dark:bg-rose-900/5 font-semibold">مهارة واحدة محددة</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="p-6 font-semibold text-slate-700 dark:text-slate-300"><div className="flex items-center gap-3"><Rocket className="w-5 h-5 text-slate-400"/> التغذية الراجعة</div></td>
                <td className="p-6 text-slate-600 dark:text-slate-400">غير فورية أو منعدمة</td>
                <td className="p-6 text-rose-700 dark:text-rose-300 bg-rose-50/50 dark:bg-rose-900/5 font-semibold">فورية ومبنية على التقييم</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
