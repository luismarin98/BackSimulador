import { QuizModel } from "../../../Database/schemas/QuizSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { BadRequestResponse, RequestResponse } from "../../../Interfaces/Responses";

export const post_methods: MethodsParams[] = [
    {
        capacity: '/add-question',
        method: "post",
        promise: async (req, res) => {
            try {
                const findQuiz = await QuizModel.findOne({ user_id: req.params.id });

                if (findQuiz) {
                    await QuizModel.findOneAndUpdate({ user_id: req.params.id }, { $push: { quiz_questions: req.body } })
                    const quizResponse: RequestResponse = { msg: "Informacion guardada", status: 201 }
                    res.status(quizResponse.status).json(quizResponse);
                } else if (!findQuiz) {
                    const quizResponse: RequestResponse = { msg: "Sin exito", status: 400 }
                    res.status(quizResponse.status).json(quizResponse);
                }
            } catch (err) {
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: err }
                res.status(error_response.status).json(error_response);
            }
        }
    },
    {
        capacity: "/add-quiz",
        method: "post",
        promise: async (req, res) => {
            try {
                const findQuiz = await QuizModel.findOne({ user_id: req.body.user_id });

                if (!findQuiz) {
                    await new QuizModel(req.body).save();
                    const quizResponse: RequestResponse = { msg: "Informacion guardada", status: 200 }
                    res.status(quizResponse.status).json(quizResponse);
                } else if (findQuiz) {
                    const quizResponse: RequestResponse = { msg: "Sin Resultados", status: 404 }
                    res.status(quizResponse.status).json(quizResponse);
                }
            } catch (err) {
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: err }
                res.status(error_response.status).json(error_response);
            }
        }
    }
]