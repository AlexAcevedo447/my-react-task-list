import "./NewTaskForm.css";




export function NewTaskForm({ onAddTask }) {
    function handleSubmit(event) {
        const taskContent = event.target["task-content"].value;
        event.preventDefault();
        onAddTask(taskContent)
    }
    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <input type="text" name="task-content" className="type-task" placeholder="Add new todo" />

            <button type="submit" className="add-task">+</button>
        </form>
    )
}