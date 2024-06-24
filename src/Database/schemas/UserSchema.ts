import { Schema, model } from "mongoose";
import { UserData } from "../../Interfaces/User";

const UserSchema = new Schema<UserData>({
    id: { type: String, required: true },
    is_admin: { type: Boolean, required: false },
    is_mod: { type: Boolean, required: false },
    keys: { type: String, required: false },
    mail: { type: String, required: false },
    nombres: { type: String, required: false },
    password: { type: String, required: false },
    username: { type: String, required: false }
});

export const UserModel = model<UserData>('User', UserSchema);