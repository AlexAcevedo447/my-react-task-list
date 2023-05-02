import { useContext } from "react";
import { Task } from "./Task";

import "./TaskList.css"
import { useEffect } from "react";
import { PortalContext } from "./context/portalContext";
import { AddTaskModalFormProps } from "../models/modalProps";
import { NsButton } from "./buttons/NsButton";

export function TaskList() {
    let { portalContextReducer, tasksContextReducer } = useContext(PortalContext);
    let conditionTasksRender = tasksContextReducer.tasks <= 0;


    useEffect(() => {
        const storageTasks = localStorage.getItem("tasks");
        const tasksFetch = JSON.parse(storageTasks ? storageTasks : "[]");


    }, [tasksContextReducer.tasks, tasksContextReducer.setTask])

    const openNewAddTaskForm = () => {
        portalContextReducer.togglePortal({ type: "toggle", modal_props: AddTaskModalFormProps("Add a todo") });
    }
    // const handleEdit = (id, content, kindof) => {
    //     const found = tasks.filter(task => task.id === id)[0];

    //     if (content && content.length > 0) {
    //         if (kindof === "title") {
    //             found.title = content;
    //             let currentTasks = [...tasks];
    //             setTask(currentTasks);
    //         } else if (kindof === "content") {
    //             found.content = content;
    //             let currentTasks = [...tasks];
    //             setTask(currentTasks);
    //             localStorage.setItem("tasks", JSON.stringify(currentTasks));
    //         } else {
    //             alert("Solo existe dos opciones:  contenido y titulo")
    //         }
    //     }
    // }

    // const handleCompleted = (specificTask) => {
    //     const found = tasks.filter(task => task.id === specificTask.id)[0];
    //     if (found.completed == false) {
    //         found.completed = true;
    //     } else {
    //         found.completed = false;
    //     }
    //     let compareFn = (a, b) => {
    //         let completedA = a.completed.toString();
    //         let completedB = b.completed.toString();
    //         if (completedA < completedB) {
    //             return -1;
    //         } else if (completedA > completedB) {
    //             return 1;
    //         } else {
    //             return 0;
    //         }
    //     }
    //     let sortedTasks = tasks.sort(compareFn);
    //     let currentTasks = [...sortedTasks];
    //     setTask(currentTasks);
    // }
    // const handleDeleteTask = (id) => {
    //     console.log(id)
    //     let currentTasks = [...tasks];
    //     currentTasks.splice(id, 1);

    //     setTask([...currentTasks]);
    //     localStorage.setItem("tasks", JSON.stringify(currentTasks));
    // }

    return (
        <div className="task-list">
            <NsButton title={"Agregar nueva tarea"} mode={"cake"} openModal={openNewAddTaskForm} />
            {
                conditionTasksRender ? <p>There are not tasks to show</p> : tasksContextReducer.tasks.map((task, index) => <Task task={task} key={index} />)
            }
        </div >
    )
}