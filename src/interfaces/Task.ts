export interface Task {
    id?: string;
<<<<<<< HEAD
    title: string;
    done: boolean;
=======
    text: string;
    isDone: boolean;
>>>>>>> 77742ed... chore(tasks): prettier format
}

export interface TaskCreatePayload {
    id?: string;
<<<<<<< HEAD
    title: string;
=======
    text: string;
>>>>>>> 77742ed... chore(tasks): prettier format
    done: boolean;
}

export interface TaskUpdatePayload {
    title: string;
    done: boolean;
}