import { Schema, model } from "mongoose";
import { QuizData } from "../../Interfaces/Quiz";

const QuizSchema = new Schema<QuizData>({
    user_id: { type: String, required: true },
    quiz_owner: { type: String, required: false },
    quiz_questions: [
        {
            title: {
                head: { type: String, default: null },
                description: { type: String, default: null }
            },
            options: [{
                answer: { type: String, required: true },
                isCorrect: { type: Boolean, required: true }
            }]
        }
    ]
});

export const QuizModel = model<QuizData>("Quiz", QuizSchema)