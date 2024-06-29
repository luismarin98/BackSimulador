import { QuizModel } from "../../../Database/schemas/QuizSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { QuizResponse } from "../../../Interfaces/Quiz";
import { BadRequestResponse } from "../../../Interfaces/Responses";

export const get_methods: MethodsParams[] = [
    {
        capacity: '/get-guiz',
        method: "get",
        promise: async (req, res) => {
            try {
                const { user_id, quiz_owner } = req.query;

                const findQuiz = await QuizModel.findOne({ user_id, quiz_owner });

                if (findQuiz) {
                    const quizResponse: QuizResponse = { msg: "Consulta exitosa", status: 200, quiz: findQuiz }
                    res.status(quizResponse.status).json(quizResponse);
                } else if (!findQuiz) {
                    const quizResponse: QuizResponse = { msg: "Sin Resultados", status: 404, quiz: undefined }
                    res.status(quizResponse.status).json(quizResponse);
                }
            } catch (error) {
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: error }
                res.status(error_response.status).json(error_response);
            }
        }
    },
]