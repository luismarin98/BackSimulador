import { QuizModel } from "../../../Database/schemas/QuizSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { QuizResponse } from "../../../Interfaces/Quiz";
import { BadRequestResponse } from "../../../Interfaces/Responses";

export const delete_methods: MethodsParams[] = [
    {
        capacity: '/delete-quiz/:id',
        method: "delete",
        promise: async (req, res) => {
            try {
                const findQuiz = await QuizModel.findOne({ user_id: req.params.id });

                if (findQuiz) {
                    const quizResponse: QuizResponse = { msg: "Sin Resultados", status: 404, quiz: null }
                    res.status(quizResponse.status).json(quizResponse);
                } else if (!findQuiz) {
                    await QuizModel.deleteOne({ user_id: req.params.id });
                    const quizResponse: QuizResponse = { msg: "Consulta exitosa", status: 201, quiz: null }
                    res.status(quizResponse.status).json(quizResponse);
                }
            } catch (err) {
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: err }
                res.status(error_response.status).json(error_response);
            }
        }
    },
    {
        capacity: "/delete-question",
        method: "delete",
        promise: async (req, res) => {
            try {
                const findQuiz = await QuizModel.findOne({ user_id: req.query.user_id });

                if (findQuiz) {
                    const quizResponse: QuizResponse = { msg: "Sin Resultados", status: 404, quiz: null }
                    res.status(quizResponse.status).json(quizResponse);
                } else if (!findQuiz) {
                    await QuizModel.findOneAndDelete({ user_id: req.query.user_id }, { $pull: { quiz_questions: req.query.id_quiz } });//.then(obj => obj!.quiz_questions!.filter(question => question.id_quiz === req.query.id_quiz));
                    const quizResponse: QuizResponse = { msg: "Eliminacion exitosa", status: 201, quiz: null }
                    res.status(quizResponse.status).json(quizResponse);
                }
            } catch (err) {
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: err }
                res.status(error_response.status).json(error_response);
            }
        }
    }
]