import { UserModel } from "../../../Database/schemas/UserSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { UserResponse } from "../../../Interfaces/User";

export const put_methods: MethodsParams[] = [
    {
        capacity: '/update/:id',
        method: "put",
        promise: async (req, res) => {
            try {
                const findUser = await UserModel.findOne({ id: req.params.id });

                if (findUser) {
                    await findUser.updateOne(req.body)
                    await findUser.save()
                    const userResponse: UserResponse = { msg: "Actualizacion exitosa", status: 200, user: findUser }
                    res.status(userResponse.status).json(userResponse);
                } else if (!findUser) {
                    const userResponse: UserResponse = { msg: "Sin Resultados", status: 404, user: null }
                    res.status(userResponse.status).json(userResponse);
                }
            } catch {
                const error_response: UserResponse = { msg: "Error de servidor", status: 500, user: undefined }
                res.status(error_response.status).json(error_response);
            }
        }
    }
]