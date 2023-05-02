import { useContext, useState } from "react";
import "./ModalForm.css";
import { TaskModel } from "../../models/taskModel";
import { PortalContext } from "../context/portalContext";
import { ModalProps } from "../../models/modalProps";

export function ModalForm({ kindof }) {
    const { portalContextReducer, tasksContextReducer } = useContext(PortalContext);
    let titleToModify = portalContextReducer.portalIsActive.modal_props.content.title;
    let contentToModify = portalContextReducer.portalIsActive.modal_props.content.content;
    const [title, setTitle] = useState(titleToModify);
    const [content, setContent] = useState(contentToModify);
    let { type } = portalContextReducer.portalIsActive.modal_props;

    let onTitleChange = (e) => {
        const inputTitle = e.target.value;
        setTitle(inputTitle);
    }
    let onContentChange = (e) => {
        const inputContent = e.target.value;
        setContent(inputContent);
    }
    const onAddEvent = (e) => {
        e.preventDefault();
        const task = new TaskModel(tasksContextReducer.tasks.length, title, content, undefined);
        try {
            tasksContextReducer.setTask({ type: "add", task: task });
            portalContextReducer.togglePortal({ type: "toggle", modal_props: new ModalProps() })
            let currentTasks = [...tasksContextReducer.tasks];
            localStorage.setItem("tasks", JSON.stringify(currentTasks));
        } catch (error) {
            console.log(error);
        }

    }
    const onModifyEvent = (e) => {
        e.preventDefault();
        const oldtask = portalContextReducer.portalIsActive.modal_props.content;
        const newtask = new TaskModel(tasksContextReducer.tasks.length, title, content, oldtask.completed);
        try {
            tasksContextReducer.setTask({ type: "modify", task: newtask, taskId: oldtask.id });
            portalContextReducer.togglePortal({ type: "toggle", modal_props: new ModalProps() })
            let currentTasks = [...tasksContextReducer.tasks];
            localStorage.setItem("tasks", JSON.stringify(currentTasks));
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>
            {type === "modal-add-form"

                ?
                <form className="modal-form" onSubmit={onAddEvent}>
                    <div className="input-box">
                        <input type="text" onChange={onTitleChange} />
                        <span>Title</span>
                        <i></i>
                    </div>
                    <div className="input-box">
                        <input type="text" onChange={onContentChange} />
                        <span>Content</span>
                        <i></i>
                    </div>
                    <input type="submit" value={kindof} />
                </form>
                :
                <form className="modal-form" onSubmit={onModifyEvent}>
                    <div className="input-box">
                        <input type="text" onChange={onTitleChange} value={title} />
                        <span>Title</span>
                        <i></i>
                    </div>
                    <div className="input-box">
                        <input type="text" onChange={onContentChange} value={content} />
                        <span>Content</span>
                        <i></i>
                    </div>
                    <input type="submit" value={kindof} />
                </form>
            }
        </>
    )
}