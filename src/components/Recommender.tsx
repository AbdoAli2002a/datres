import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, ArrowRight, ArrowLeft, RefreshCcw, CheckCircle, Loader2, Save, FileText, Printer } from 'lucide-react';
import { View } from '../App';

interface Question {
  id: string;
  text: string;
  options: string[];
}

const questions: Question[] = [
  { id: 'ageGroup', text: 'المرحلة العمرية للطلاب:', options: ['الطفولة المبكرة (روضة وأوليات)', 'المرحلة الابتدائية', 'المرحلة المتوسطة', 'المرحلة الثانوية', 'التعليم الجامعي/كبار'] },
  { id: 'subjectType', text: 'طبيعة المادة الدراسية:', options: ['علمية صرفة (رياضيات، فيزياء)', 'أدبية/نظرية (تاريخ، جغرافيا)', 'لغات (مهارات قراءة، كتابة، تحدث)', 'مهارات تطبيقية/عملية'] },
  { id: 'lessonGoal', text: 'الهدف الأساسي للدرس:', options: ['تأسيس مفاهيم جديدة', 'مراجعة وتثبيت معلومات', 'تطبيق عملي لمهارة', 'حل مشكلات وتفكير ناقد'] },
  { id: 'environment', text: 'بيئة التعلم:', options: ['حضوري في الفصل', 'التعلم عن بعد (أونلاين)', 'مدمج (حضوري وعن بعد)'] },
  { id: 'timeAvailable', text: 'الوقت المتاح للشرح:', options: ['قصير (أقل من 30 دقيقة)', 'متوسط (30 - 45 دقيقة)', 'طويل (أكثر من 45 دقيقة / ورشة عمل)'] },
  { id: 'studentCount', text: 'عدد الطلاب في الفصل:', options: ['قليل (أقل من 15 طالب)', 'متوسط (15 - 30 طالب)', 'كثافة عالية (أكثر من 30 طالب)'] },
  { id: 'interactionLevel', text: 'مستوى تفاعل الطلاب المعتاد:', options: ['مرتفع ومبادر', 'متوسط يحتاج لمحفزات', 'ضعيف/خجول'] },
  { id: 'techResources', text: 'الموارد التقنية المتاحة:', options: ['أدوات تقليدية (سبورة، أقلام)', 'شاشة عرض ذكية للمُعلم فقط', 'أجهزة لوحية/حواسيب مع كل طالب'] },
  { id: 'learningStyle', text: 'نمط التعلم المستهدف أو السائد:', options: ['بصري (صور وفيديوهات)', 'سمعي إلقائي', 'حركي (أنشطة وتجارب)', 'تواصل اجتماعي جماعي'] },
  { id: 'mainChallenge', text: 'التحدي الأساسي في هذا الدرس:', options: ['صعوبة وتجريد المفاهيم', 'الملل وفقدان التركيز', 'كثرة المحتوى وضيق الوقت', 'تشتت الانتباه والحركة'] },
  { id: 'evaluationMethod', text: 'طريقة التقييم المفضلة في نهاية الدرس:', options: ['شفوي سريع', 'كتابي قصير (اختبار)', 'مشروع فردي أو جماعي', 'تقييم أقران وملاحظة الأداء'] }
];

export function Recommender({ setActiveView }: { setActiveView: (v: View) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');
  
  const [note, setNote] = useState('');
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    if (result && result["اسم الاستراتيجية"]) {
      const savedNote = localStorage.getItem(`strategy-note-${result["اسم الاستراتيجية"]}`);
      setNote(savedNote || '');
      setSaveStatus('');
    }
  }, [result]);

  const handleSaveNote = () => {
    if (result && result["اسم الاستراتيجية"]) {
      localStorage.setItem(`strategy-note-${result["اسم الاستراتيجية"]}`, note);
      setSaveStatus('تم حفظ ملاحظاتك بنجاح!');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSelect = (val: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: val });
  };

  const submitToAI = async () => {
    setIsLoading(true);
    setError('');
    
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      let strategy = "";
      let reason = "";
      let steps: string[] = [];

      const challenge = answers['mainChallenge'] || '';
      const style = answers['learningStyle'] || '';
      const interaction = answers['interactionLevel'] || '';
      const time = answers['timeAvailable'] || '';

      if (time.includes('قصير') && interaction.includes('مرتفع')) {
         strategy = "العصف الذهني (Brainstorming)";
         reason = "بما أن الوقت المتاح قصير جداً والطلاب يتميزون بتفاعل عالٍ ومبادر، فإن تقنية العصف الذهني هي الأنسب لتوليد أكبر قدر من الأفكار في وقت ضيق دون قيود.";
         steps = [
           "طرح المشكلة أو السؤال على الطلاب بشكل واضح.",
           "تشجيع جميع الطلاب على تقديم أفكارهم دون نقد أو تقييم أولي.",
           "تسجيل كل الأفكار المطروحة على السبورة أو الشاشة الحائطية.",
           "مناقشة الأفكار وبلورتها للوصول للنتيجة المطلوبة."
         ];
      }
      else if (interaction.includes('ضعيف/خجول') || style.includes('تواصل اجتماعي')) {
        strategy = "استراتيجية المهام المجزأة (Jigsaw)";
        reason = "نظراً لأن مستوى تفاعل الطلاب ضعيف ولتشجيع التعلم الجماعي، فإن الجيغسو تدفع كل طالب ليكون عنصراً فعالاً وحيوياً (كخبير) مما يعزز الثقة والاعتماد المتبادل.";
        steps = [
          "تقسيم الطلاب إلى مجموعات أساسية من 4-6 أفراد.",
          "توزيع أجزاء مختلفة من الدرس على أفراد كل مجموعة.",
          "تكوين مجموعات الخبراء من الطلاب لدارسة نفس الجزء.",
          "عودة الخبراء إلى مجموعاتهم لشرح الجزء لزملائهم."
        ];
      } else if (challenge.includes('صعوبة وتجريد') || style.includes('حركي')) {
        strategy = "التعليم المتمايز (Differentiated Instruction)";
        reason = "لمواجهة تحدي تجريد المفاهيم واختلاف أنماط التعلم، يوفر التعليم المتمايز قنوات ومسارات مختلفة يختار منها الطالب ما يناسب مستوى استعداده ونمطه.";
        steps = [
          "إجراء تقييم قبلي أو تحديد أنماط تعلم الطلاب واهتماماتهم.",
          "تجهيز بدائل متعددة للمحتوى (بصري، سمعي، حركي).",
          "تصميم أنشطة متدرجة الصعوبة تناسب الفروق الفردية.",
          "توفير خيارات متنوعة لمخرج التعلم (طريقة التقييم)."
        ];
      } else {
        strategy = "التعلم القائم على حل المشكلات";
        reason = "تلبي هذه الاستراتيجية أهداف الشرح وتحديات الدرس من خلال إعطاء دور حيوي للطالب في البحث والتقصي وربط المفاهيم بواقع عملي.";
        steps = [
          "عرض مشكلة واقعية مرتبطة بموضوع الدرس.",
          "تقسيم الطلاب لمجموعات للبحث والتقصي وطرح الأفكار.",
          "استكشاف الموارد والبيانات للوصول لأسباب المشكلة.",
          "اقتراح ومناقشة الحلول مع باقي المجموعات والمعلم."
        ];
      }

      setResult({
        "اسم الاستراتيجية": strategy,
        "لماذا هذه الاستراتيجية؟": reason,
        "خطوات التنفيذ": steps
      });
      
    } catch (err: any) {
      setError('حدث خطأ أثناء المعالجة، يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      submitToAI();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setError('');
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-bold mb-2 border border-amber-200 dark:border-amber-800/50">
          <Lightbulb className="w-4 h-4" />
          اختيار الاستراتيجية المناسبة
        </div>
        <h2 className="text-3xl md:text-4xl font-tajawal font-bold text-slate-800 dark:text-white">
          خبير واستشاري طرق التدريس
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          أجب عن الأسئلة 11 التالية الخاصة بظروف الدرس ليقوم الذكاء الاصطناعي باقتراح أنسب استراتيجية تناسب صفك الدراسي.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!result && !isLoading ? (
          <motion.div
            key="questions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <div className="flex items-center justify-between mb-8 text-sm font-bold text-slate-500 dark:text-slate-400">
              <span>المعطى {currentStep + 1} من {questions.length}</span>
            </div>

            <div className="h-2 bg-slate-100 dark:bg-slate-700/50 rounded-full mb-8 overflow-hidden">
              <motion.div 
                className="h-full bg-amber-500 rounded-full"
                initial={{ width: `${(currentStep / questions.length) * 100}%` }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-tajawal font-bold text-slate-800 dark:text-white mb-8 leading-normal">
              {questions[currentStep].text}
            </h3>

            <div className="space-y-4">
              {questions[currentStep].options.map((opt, idx) => {
                const isSelected = answers[questions[currentStep].id] === opt;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(opt)}
                    className={`w-full text-right p-5 rounded-2xl border-2 transition-all duration-200 flex justify-between items-center ${
                      isSelected 
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200' 
                        : 'border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300'
                    } font-semibold text-lg hover:-translate-y-0.5`}
                  >
                    <span>{opt}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-amber-500' : 'border-slate-300 dark:border-slate-600'
                    }`}>
                      {isSelected && <div className="w-3 h-3 bg-amber-500 rounded-full" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {error && (
               <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl font-semibold">
                  {error}
               </div>
            )}

            <div className="flex justify-between items-center mt-10">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                  currentStep === 0 
                  ? 'opacity-50 cursor-not-allowed text-slate-400 bg-slate-100 dark:bg-slate-800 dark:text-slate-600' 
                  : 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                <ArrowRight className="w-5 h-5" />
                السابق
              </button>

              <button
                onClick={handleNext}
                disabled={!answers[questions[currentStep].id]}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all shadow-md ${
                  !answers[questions[currentStep].id]
                  ? 'opacity-50 cursor-not-allowed bg-slate-300 dark:bg-slate-700 text-slate-500'
                  : 'bg-amber-500 hover:bg-amber-600 hover:-translate-y-0.5 shadow-amber-500/20 text-white border border-amber-600'
                }`}
              >
                {currentStep === questions.length - 1 ? 'تحليل المعطيات' : 'التالي'}
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ) : isLoading ? (
           <motion.div 
             key="loading"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="flex flex-col items-center justify-center py-20"
           >
             <Loader2 className="w-16 h-16 text-amber-500 animate-spin mb-6" />
             <h3 className="text-2xl font-bold font-tajawal text-slate-800 dark:text-white">جاري تحليل بيئة التعلم...</h3>
             <p className="text-slate-500 dark:text-slate-400 mt-2">يرجى الانتظار بينما يقوم الخبير التربوي بوضع الاستراتيجية الأنسب...</p>
           </motion.div>
        ) : result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[2rem] shadow-xl"
          >
            <div className="bg-white dark:bg-slate-900 rounded-[1.9rem] p-8 md:p-12 h-full">
              <div className="text-center mb-10">
                <p className="text-slate-500 dark:text-slate-400 font-bold mb-4">بناءً على طلبك، الاستراتيجية المقترحة هي:</p>
                <h3 className="text-3xl md:text-5xl font-tajawal font-extrabold text-amber-600 dark:text-amber-500 mb-6">
                  {result["اسم الاستراتيجية"]}
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed outline outline-1 outline-amber-100 dark:outline-amber-900/30 p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-900/10 shadow-sm border border-amber-100 dark:border-amber-800">
                  <strong className="block text-amber-700 dark:text-amber-400 font-tajawal text-xl mb-2">لماذا هذه الاستراتيجية؟</strong>
                  {result["لماذا هذه الاستراتيجية؟"]}
                </p>
              </div>

              <div className="max-w-3xl mx-auto mb-10">
                <h4 className="text-2xl font-bold font-tajawal text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  دليل وخطوات التنفيذ:
                </h4>
                <div className="space-y-4">
                  {result["خطوات التنفيذ"].map((step: string, idx: number) => (
                    <div key={idx} className="p-5 rounded-2xl border bg-white dark:bg-slate-800 flex items-start gap-4 border-slate-200 dark:border-slate-700 shadow-sm border-r-4 border-r-amber-500">
                      <div className="w-8 h-8 rounded-full border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center font-bold shrink-0 text-amber-600 dark:text-amber-400">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 dark:text-slate-200 font-medium pt-1 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-3xl mx-auto mb-10">
                <h4 className="text-2xl font-bold font-tajawal text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                    <FileText className="w-5 h-5" />
                  </span>
                  ملاحظاتي حول الاستراتيجية:
                </h4>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm border-r-4 border-r-amber-500">
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="اكتب ملاحظاتك، أفكارك حول التطبيق، أو تحديات تتوقعها..."
                    className="w-full h-32 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-700 dark:text-slate-300 resize-none mb-4 print:hidden"
                  />
                  <div className="hidden print:block w-full p-4 rounded-xl border border-slate-200 text-slate-800 bg-white min-h-[8rem] whitespace-pre-wrap break-words mb-4">
                    {note || "لا توجد ملاحظات محفوظة."}
                  </div>
                  <div className="flex items-center justify-between print:hidden">
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 h-5">
                      {saveStatus}
                    </span>
                    <button
                      onClick={handleSaveNote}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold bg-amber-500 hover:bg-amber-600 transition-all text-white shadow-md shadow-amber-500/20 active:scale-95"
                    >
                      <Save className="w-4 h-4" />
                      حفظ الملاحظة
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 print:hidden">
                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 shadow-sm border border-slate-200 dark:border-slate-700"
                >
                  <Printer className="w-5 h-5" />
                  حفظ PDF / طباعة النتيجة
                </button>
                <button
                  onClick={handleRestart}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 shadow-sm"
                >
                  <RefreshCcw className="w-5 h-5" />
                  إعادة إدخال المعطيات
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

