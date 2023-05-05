import "./ModalForm.css";
import { useTasks } from "../hooks";
import { useState } from "react";

export function ModalForm({ kindof }) {
    const [customTasks, setCustomTasks] = useTasks();
    const { titleState, contentState, modal_props } = customTasks;
    let [title, setTitle] = titleState;
    let [content, setContent] = contentState;
    const [formErrors, setFormErrors] = useState({
        title: undefined
    })
    let { type } = modal_props;
    const isValid = Object.keys(formErrors).every(key => formErrors[key] === "");

    let onTitleChange = (e) => {
        const inputTitle = e.target.value;
        setTitle(inputTitle);
        let error = ""

        if (inputTitle.length <= 3) {
            error = "* title must have more than 3 characters";
        }
        setFormErrors({ ...formErrors, title: error });
    }
    let onContentChange = (e) => {
        const inputContent = e.target.value;
        setContent(inputContent);
    }
    const onAddEvent = (e) => {
        e.preventDefault();
        setCustomTasks("add", undefined, title, content);
    }
    const onModifyEvent = (e) => {
        e.preventDefault();
        setCustomTasks("modify", undefined, title, content)
    }
    return (
        <>
            {type === "modal-add-form"

                ?
                <form className="modal-form" onSubmit={onAddEvent}>
                    <div className="input-box">
                        <input type="text" onChange={onTitleChange} required />
                        <span>Title</span>
                        <i></i>

                    </div>
                    <strong style={{ color: "red" }}>{formErrors.title}</strong>
                    <div className="input-box">
                        <input type="text" onChange={onContentChange} required />
                        <span>Content</span>
                        <i></i>
                    </div>
                    <button disabled={!isValid} type="submit" className="btn-action" >{kindof}</button>
                </form>
                :
                <form className="modal-form" onSubmit={onModifyEvent}>
                    <div className="input-box">
                        <input type="text" onChange={onTitleChange} value={title} required />
                        <span>Title</span>
                        <i></i>
                    </div>
                    <strong style={{ color: "red" }}>{formErrors.title}</strong>
                    <div className="input-box">
                        <input type="text" onChange={onContentChange} value={content} required />
                        <span>Content</span>
                        <i></i>
                    </div>
                    <button disabled={!isValid} type="submit" className="btn-action" >{kindof}</button>
                </form>
            }
        </>
    )
}