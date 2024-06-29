import { QuizModel } from "../../../Database/schemas/QuizSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { QuizResponse } from "../../../Interfaces/Quiz";
import { BadRequestResponse } from "../../../Interfaces/Responses";

export const put_methods: MethodsParams[] = [
    {
        capacity: '/update-question/:id',
        method: "put",
        promise: async (req, res) => {
            try {
                const findQuiz = await QuizModel.findOne({ user_id: req.params.id });

                if (findQuiz) {
                    await QuizModel.findOneAndUpdate({ user_id: req.params.id }, { $set: { quiz_questions: req.body } })
                    const quizResponse: QuizResponse = { msg: "Actualizacion exitosa", status: 200, quiz: findQuiz }
                    res.status(quizResponse.status).json(quizResponse);
                } else if (!findQuiz) {
                    const quizResponse: QuizResponse = { msg: "Sin Resultados", status: 404, quiz: null }
                    res.status(quizResponse.status).json(quizResponse);
                }
            } catch (err) {
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: err }
                res.status(error_response.status).json(error_response);
            }
        }
    }
]