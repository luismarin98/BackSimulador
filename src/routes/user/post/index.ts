import { UserModel } from "../../../Database/schemas/UserSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { BadRequestResponse } from "../../../Interfaces/Responses";
import { UserResponse } from "../../../Interfaces/User";

export const post_methods: MethodsParams[] = [
    {
        capacity: '/register',
        method: "post",
        promise: async (req, res) => {
            try {
                const findUser = await UserModel.findOne({ id: req.body.id });

                if (findUser) {
                    const userResponse: UserResponse = { msg: "Sin exito", status: 400, user: null }
                    res.status(userResponse.status).json(userResponse);
                } else if (!findUser) {
                    await new UserModel(req.body).save();
                    const userResponse: UserResponse = { msg: "Informacion guardada", status: 201, user: null }
                    res.status(userResponse.status).json(userResponse);
                }
            } catch (error) {
                console.error(error);
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: error }
                res.status(error_response.status).json(error_response);
            }
        }
    }
]