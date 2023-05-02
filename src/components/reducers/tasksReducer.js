import { TaskModel } from "../../models/taskModel";

export const tasksInitialState = [];

export const tasksReducer = (state, action) => {
    switch (action.type) {

        case "add":
            return [
                ...state,
                action.task
            ]
        case "delete":
            return state.filter((task) => task.id !== action.taskId);
        case "modify":
            return state.map((task) => {
                if (task.id === action.taskId) {
                    return {
                        ...task,
                        title: action.task.title,
                        content: action.task.content
                    }
                }
                else {
                    return task
                }
            })
        default:
            return state

    }

}