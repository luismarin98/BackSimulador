import { Responses, StatusResponse } from "./Responses";

export interface Options {
    answer: string;
    isCorrect: boolean;
}

export interface Title {
    head: string | null;
    description: string | null;
}

export interface Quiz {
    id_quiz: string;
    title: Title | null;
    options: Options[] | null;
}

export interface QuizData {
    user_id: string;
    quiz_owner: string;
    quiz_questions: Quiz[] | null;
}

export interface QuizResponse {
    msg: Responses;
    status: StatusResponse;
    quiz: QuizData | null | undefined;
}