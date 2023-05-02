
import { useContext } from "react";
import "./Task.css";
import { BsTrash, BsCheckCircle, BsCheckCircleFill } from "react-icons/bs"
import { PortalContext } from "./context/portalContext";
import { Link } from "react-router-dom";
import { EditTaskModalFormProps } from "../models/modalProps";

export const Task = function ({ task }) {
    const { tasksContextReducer, portalContextReducer } = useContext(PortalContext);
    return (
        <div className="task">
            <div className="task-content" onClick={() => portalContextReducer.togglePortal({ type: "toggle", modal_props: EditTaskModalFormProps("Modify task", task) })}>
                <strong className="title" >{task.title.length > 30 ? task.title.substring(0, 30) + "..." : task.title}</strong>
            </div>
            <div className="task-actions">
                <Link className="task-action" onClick={() => tasksContextReducer.setTask({ type: "delete", taskId: task.id })}><BsTrash></BsTrash></Link>
                <Link className="task-action" >{task.completed ? <BsCheckCircleFill></BsCheckCircleFill> : <BsCheckCircle></BsCheckCircle>}</Link>
            </div>
        </div>
    )
}