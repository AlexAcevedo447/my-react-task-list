import { TaskModel } from "../models/taskModel";
import "./NewTaskForm.css";




export function NewTaskForm({ onAddTask }) {
    function handleSubmit(event) {
        event.preventDefault();
        let form = document.querySelector("#new-task-form");
        let taskTitle = event.target["task-title"].value;
        let taskContent = event.target["task-content"].value;


        onAddTask(taskTitle, taskContent);
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