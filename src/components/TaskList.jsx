import { useState } from "react";
import { Task } from "./Task";
import { NewTaskForm } from "./NewTaskForm";

import "./TaskList.css"
import { TaskModel } from "../models/taskModel";
import { useEffect } from "react";

export function TaskList() {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        const storageTasks = localStorage.getItem("tasks");
        const tasksFetch = JSON.parse(storageTasks ? storageTasks : "[]");
        setTask([...tasksFetch])
    }, [])
    const handleEdit = (id, content, kindof) => {
        const found = tasks.filter(task => task.id === id)[0];

        if (content && content.length > 0) {
            if (kindof === "title") {
                found.title = content;
                let currentTasks = [...tasks];
                setTask(currentTasks);
                localStorage.setItem("tasks", JSON.stringify(currentTasks));
            } else if (kindof === "content") {
                found.content = content;
                let currentTasks = [...tasks];
                setTask(currentTasks);
                localStorage.setItem("tasks", JSON.stringify(currentTasks));
            } else {
                alert("Solo existe dos opciones:  contenido y titulo")
            }
        }
    }

    const handleCompleted = (specificTask) => {
        const found = tasks.filter(task => task.id === specificTask.id)[0];
        if (found.completed == false) {
            found.completed = true;
        } else {
            found.completed = false;
        }
        let compareFn = (a, b) => {
            let completedA = a.completed.toString();
            let completedB = b.completed.toString();
            if (completedA < completedB) {
                return -1;
            } else if (completedA > completedB) {
                return 1;
            } else {
                return 0;
            }
        }
        let sortedTasks = tasks.sort(compareFn);
        let currentTasks = [...sortedTasks];
        setTask(currentTasks);
        localStorage.setItem("tasks", JSON.stringify(currentTasks));
    }

    const handleAddTask = (title, content) => {
        let currentTasks = [...tasks];
        const task = new TaskModel(
            tasks.length,
            title,
            content,
            undefined
        )
        if (title.length > 0 && content.length > 0) {
            currentTasks = [...currentTasks, task]
            console.log(currentTasks)
        } else {
            alert("Agrega contenido en los campos");
        }

        setTask(currentTasks);
        localStorage.setItem("tasks", JSON.stringify(currentTasks));
    }
    const handleDeleteTask = (id) => {
        let currentTasks = [...tasks];
        const deleted_task = currentTasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(deleted_task));
        setTask([...deleted_task]);
    }

    return (
        <div className="task-list">
            <NewTaskForm onAddTask={handleAddTask} />
            {
                tasks.length > 0 ? tasks.map((task) => { return <Task onCompletedTask={handleCompleted} task={task} key={task.id} selfDelete={handleDeleteTask} onEdit={handleEdit} /> }) : "There are not tasks to show"

            }
        </div>
    )
}