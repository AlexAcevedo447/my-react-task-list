export const dbInitialState = [];

export const dataBaseReducer = (state, { type, task, taskId, tasks }) => {
    let parsedState = state;
    switch (type) {

        case "add":
            parsedState = [
                ...parsedState,
                task
            ]
            localStorage.setItem("tasks", JSON.stringify(parsedState));
            return parsedState;
        case "delete":
            let newState = parsedState.filter((task) => task.id !== taskId);
            console.log(newState)
            localStorage.setItem("tasks", JSON.stringify(parsedState));
            return parsedState
        case "modify":
            parsedState = [...state].map((taskItem) => {
                if (taskItem.id === taskId) {
                    return {
                        ...taskItem,
                        title: task.title,
                        content: task.content
                    }
                }
                else {
                    return taskItem
                }
            })
            localStorage.setItem("tasks", JSON.stringify(parsedState));
            console.log(state);
            return parsedState;
        case "completed":
            parsedState = parsedState.map((taskItem) => {
                if (taskItem.id === taskId) {
                    return {
                        ...taskItem,
                        completed: !taskItem.completed
                    }
                } else {
                    return taskItem;
                }
            })
            localStorage.setItem("tasks", JSON.stringify(parsedState));
            return parsedState;
        default:
            return state;

    }

}