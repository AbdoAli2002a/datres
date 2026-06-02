import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/advisor", async (req, res) => {
    try {
      const inputs = req.body;
      const prompt = `أنت خبير تربوي ومستشار تعليمي متمرس في طرق التدريس الحديثة وتصميم الخبرات التعليمية.
      
المعطيات التالية من المعلم:
- المرحلة العمرية: ${inputs.ageGroup}
- طبيعة المادة الدراسية: ${inputs.subjectType}
- الهدف الأساسي للدرس: ${inputs.lessonGoal}
- بيئة التعلم: ${inputs.environment}
- الوقت المتاح: ${inputs.timeAvailable}
- عدد الطلاب: ${inputs.studentCount}
- مستوى تفاعل الطلاب المعتاد: ${inputs.interactionLevel}
- الموارد التقنية المتاحة: ${inputs.techResources}
- نمط التعلم المستهدف أو السائد: ${inputs.learningStyle}
- التحدي الأساسي في هذا الدرس: ${inputs.mainChallenge}
- طريقة التقييم المفضلة في نهاية الدرس: ${inputs.evaluationMethod}

بناءً على هذا المزيج الفريد، اقترح أفضل استراتيجية تدريس واحدة تناسب هذا الموقف بشكل مثالي. يجب أن تعود بالنتيجة بصيغة JSON طبقاً للهيكل المطلوب.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              "اسم الاستراتيجية": {
                type: Type.STRING,
                description: "اسم الاستراتيجية الأنسب بوضوح (مثال: الفصل المقلوب، جيكسو، التلعيب، الخ)."
              },
              "لماذا هذه الاستراتيجية؟": {
                type: Type.STRING,
                description: "فقرة قصيرة من سطرين تشرح لماذا تناسب هذه الاستراتيجية المعطيات الـ 11 التي اختارها المعلم."
              },
              "خطوات التنفيذ": {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING
                },
                description: "من 3 إلى 5 خطوات مرقمة وعملية جداً لتطبيق الاستراتيجية في الفصل."
              }
            },
            required: ["اسم الاستراتيجية", "لماذا هذه الاستراتيجية؟", "خطوات التنفيذ"]
          }
        },
      });

      if (response.text) {
        res.json(JSON.parse(response.text.trim()));
      } else {
        throw new Error("Empty response from AI");
      }
    } catch (error) {
      console.error("Error generating strategy:", error);
      res.status(500).json({ error: "Failed to generate recommendation" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
