export interface Options {
    answer: string;
    isCorrect: boolean;
}

export interface Title {
    head: string | null;
    description: string | null;
}

export interface QuizData {
    title: Title | null;
    options: Options[] | null;
}