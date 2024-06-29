import { UserModel } from "../../../Database/schemas/UserSchema";
import { MethodsParams } from "../../../Interfaces/Files";
import { BadRequestResponse } from "../../../Interfaces/Responses";
import { UserData, UserResponse } from "../../../Interfaces/User";

export const post_methods: MethodsParams[] = [
    {
        capacity: '/register',
        method: "post",
        promise: async (req, res) => {
            try {
                const userBody: UserData = req.body;
                const findUser = await UserModel.findOne({ id: userBody.id });

                if (findUser) {
                    const userResponse: UserResponse = { msg: "Sin exito", status: 400, user: null }
                    res.status(userResponse.status).json(userResponse);
                } else if (!findUser) {
                    new UserModel(userBody).save();
                    const userResponse: UserResponse = { msg: "Informacion guardada", status: 201, user: null }
                    res.status(userResponse.status).json(userResponse);
                }
            } catch (error) {
                const error_response: BadRequestResponse = { msg: "Error de servidor", status: 500, Error: error }
                res.status(error_response.status).json(error_response);
            }
        }
    }
]