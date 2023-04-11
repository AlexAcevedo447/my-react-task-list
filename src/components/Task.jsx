import { TaskModel } from "../models/taskModel";
import "./Task.css";
import { BsTrash, BsCheckCircle, BsCheckCircleFill } from "react-icons/bs"

export const Task = function ({ task, selfDelete, onEdit, onCompletedTask }) {
    const onDelete = () => {
        selfDelete(task.id)
    }
    const onEditTitle = () => {
        const title = prompt(`Modify title of task number ${task.id + 1}`);
        onEdit(task.id, title, "title");
    }
    const onEditContent = () => {
        const content = prompt(`Modify content of task number ${task.id + 1}`);
        onEdit(task.id, content, "content");
    }
    const onCompleted = () => {
        onCompletedTask(task)
    }
    return (
        <div className="task">
            <div className="task-content">
                <strong className="title" onClick={onEditTitle}><p>{task.title}</p></strong>
                <strong className="content" onClick={onEditContent}><p>{task.content}</p></strong>
            </div>
            <div className="task-actions">
                <button className="task-action" onClick={onDelete}><BsTrash></BsTrash></button>
                <button className="task-action" onClick={onCompleted}>{task.completed ? <BsCheckCircleFill></BsCheckCircleFill> : <BsCheckCircle></BsCheckCircle>}</button>
            </div>
        </div>
    )
}