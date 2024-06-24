import { UserModel } from "../../../Database/schemas/UserSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { UserData, UserResponse } from "../../../Interfaces/User";

export const post_methods: MethodsParams[] = [
    {
        capacity: '/user',
        method: "post",
        promise: async (req, res) => {
            try {
                const userBody: UserData = req.body;
                const findUser = await UserModel.findOne({ id: userBody.id });

                if (findUser) {
                    const userResponse: UserResponse = { msg: "Sin Resultados", status: 404, user: null }
                    res.status(userResponse.status).json(userResponse);
                } else if (!findUser) {
                    new UserModel(userBody).save();
                    const userResponse: UserResponse = { msg: "Consulta exitosa", status: 201, user: null }
                    res.status(userResponse.status).json(userResponse);
                }
            } catch {
                const error_response: UserResponse = { msg: "Error de servidor", status: 500, user: undefined }
                res.status(error_response.status).json(error_response);
            }
        }
    }
]