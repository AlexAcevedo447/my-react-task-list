

import "./TaskList.css"
import TaskCard from "./cards/TaskCard";
import { useTasks } from "./hooks";

export function TaskList() {
    let [customTasks] = useTasks();
    let conditionTasksRender = customTasks.tasks <= 0;
    function sortCriteria(a, b) {
        const compA = a.completed
        const compB = b.completed
        if (compA > compB) {
            return 1;
        }
        if (compA < compB) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }
    return (
        <div className="task-list">

            {
                conditionTasksRender ? <p>There are not tasks to show</p> : customTasks.tasks.sort(sortCriteria).map((task, index) => <TaskCard task={task} key={index} />)
            }
        </div >
    )
}