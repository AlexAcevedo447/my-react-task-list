import { useContext } from "react";
import { Task } from "./Task";

import "./TaskList.css"
import { useEffect } from "react";
import { PortalContext } from "./context/portalContext";

export function TaskList() {
    let { tasksContextReducer } = useContext(PortalContext);
    let [tasks, setTasks] = tasksContextReducer();
    let conditionTasksRender = tasks <= 0;

    return (
        <div className="task-list">

            {
                conditionTasksRender ? <p>There are not tasks to show</p> : tasks.map((task, index) => <Task task={task} key={index} />)
            }
        </div >
    )
}