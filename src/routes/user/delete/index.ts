import { UserModel } from "../../../Database/schemas/UserSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { UserResponse } from "../../../Interfaces/User";

export const delete_methods: MethodsParams[] = [
    {
        capacity: '/delete/:id',
        method: "delete",
        promise: async (req, res) => {
            try {
                const findUser = await UserModel.findOne({ id: req.params.id });

                if (findUser) {
                    const userResponse: UserResponse = { msg: "Sin Resultados", status: 404, user: null }
                    res.status(userResponse.status).json(userResponse);
                } else if (!findUser) {
                    await UserModel.deleteOne({ id: req.params.id });
                    const userResponse: UserResponse = { msg: "Sin Resultados", status: 201, user: null }
                    res.status(userResponse.status).json(userResponse);
                }
            } catch {
                const error_response: UserResponse = { msg: "Error de servidor", status: 500, user: undefined }
                res.status(error_response.status).json(error_response);
            }
        }
    }
]