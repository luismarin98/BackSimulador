import { UserModel } from "../../../Database/schemas/UserSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { BadRequestResponse } from "../../../Interfaces/Responses";
import { UserArrayResponse, UserResponse } from "../../../Interfaces/User";

export const get_methods: MethodsParams[] = [
    {
        capacity: '/auth',
        method: "get",
        promise: async (req, res) => {
            try {
                const { username, password } = req.query;

                const findUser = await UserModel.findOne({ username, password });

                if (findUser) {
                    const userResponse: UserResponse = { msg: "Consulta exitosa", status: 200, user: findUser }
                    res.sendStatus(userResponse.status).json(userResponse);
                } else if (!findUser) {
                    const userResponse: UserResponse = { msg: "Sin Resultados", status: 404, user: undefined }
                    res.sendStatus(userResponse.status).json(userResponse);
                }
            } catch (error) {
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: error }
                res.status(error_response.status).json(error_response);
            }
        }
    },
    {
        capacity: "/list_users",
        method: "get",
        promise: async (req, res) => {
            try {
                const lenghUseres = await UserModel.find();

                if (lenghUseres.length > 0) {
                    const userResponse: UserArrayResponse = { msg: "Consulta exitosa", status: 200, userArray: lenghUseres }
                    res.status(userResponse.status).json(userResponse);
                } else if (lenghUseres.length < 0) {
                    const userResponse: UserArrayResponse = { msg: "Sin Resultados", status: 404, userArray: undefined }
                    res.status(userResponse.status).json(userResponse);
                }
            } catch (error) {
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: error }
                res.status(error_response.status).json(error_response);
            }
        },
    }
]