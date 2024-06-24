import { Keys } from "./Keys";
import { Responses, StatusResponse } from "./Responses";

export interface UserData {
    id: string;
    username: string;
    password: string;
    mail: string;
    nombres: string;
    is_admin: boolean;
    is_mod: boolean;
    keys: Keys | null;
}

export interface UserResponse {
    msg: Responses;
    status: StatusResponse;
    user: UserData | null | undefined;
}

export interface UserArrayResponse {
    msg: Responses;
    status: StatusResponse;
    userArray: UserData[] | null | undefined;
}