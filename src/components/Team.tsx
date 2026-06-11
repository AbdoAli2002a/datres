import { motion } from 'motion/react';
import { Users, Award, Star } from 'lucide-react';

export function Team() {
  const teamMembers = [
    "عبدالرحمن علي خالد",
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-2 border border-blue-200 dark:border-blue-800/50">
          <Award className="w-4 h-4" />
          فريق العمل
        </div>
        <h2 className="text-4xl md:text-5xl font-tajawal font-bold text-slate-800 dark:text-white">
          الإشراف والإعداد
        </h2>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Supervision Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-12"
        >
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-1 rounded-3xl shadow-lg">
            <div className="bg-white dark:bg-slate-900 rounded-[1.4rem] p-8 md:p-12 text-center relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Award className="w-32 h-32" />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white dark:border-slate-800 relative z-10">
                  <Star className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-500 dark:text-slate-400 mb-2 font-cairo">إشراف</h3>
                <h2 className="text-3xl md:text-4xl font-extrabold font-tajawal text-slate-800 dark:text-white">
                  أ.د / زينب امين
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Preparation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-12"
        >
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-4 mb-10 justify-center">
               <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                 <Users className="w-7 h-7" />
               </div>
               <h3 className="text-2xl md:text-3xl font-bold font-tajawal text-slate-800 dark:text-white">
                 إعداد عبدالرحمن علي خالد  
               </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {teamMembers.map((member, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-center text-center p-4 rounded-2xl border border-slate-100 dark:border-slate-700/50 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="font-bold text-slate-700 dark:text-slate-300 font-cairo text-lg">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
