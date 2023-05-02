import { useContext } from "react";
import { TaskModel } from "../models/taskModel";
import "./NewTaskForm.css";
import { TasksContext } from "./context/tasksContext";




export function NewTaskForm() {
    const { tasks, dispatch } = useContext(TasksContext);
    function handleSubmit(event) {
        event.preventDefault();
        let form = document.querySelector("#new-task-form");
        let taskTitle = event.target["task-title"].value;
        let taskContent = event.target["task-content"].value;
        let taskId = tasks.length;
        const newTask = new TaskModel(taskId, taskTitle, taskContent,
            undefined);
        if (taskTitle.length > 0 && taskContent.length > 0) {
            dispatch({ type: "add", task: newTask })
            let currentTasks = [...tasks];
            console.log(currentTasks)
        } else {
            alert("Agrega contenido en los campos");
        }
        form.reset();
    }
    return (
        <form className="new-task-form" id="new-task-form" onSubmit={handleSubmit}>
            <input type="text" name="task-title" className="type-task" placeholder="Add new title" />
            <input type="text" name="task-content" className="type-task" placeholder="Add new content" />

            <button type="submit" className="add-task">+</button>
        </form>
    )
}