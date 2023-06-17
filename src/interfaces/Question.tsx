export interface Question {
    question_id: number;
    title: string;
    owner: {
        display_name: string,
        user_id: number
    };
    answer_count: number;
    tags: string[];
}