import { TaskModel } from "./taskModel";

export class ModalProps {
    constructor(type = "", title = "", content = { text: "", task: new TaskModel() }, actions = false) {
        this.type = type;
        this.title = title;
        this.content = content;
        this.actions = actions;
    }
}

/**
 * @param {string} type
 * @param {string} title
 * @param {string} text
 */
export function ConfirmProps(type, title, text) {

    return new ModalProps(type, title, { text, task: new TaskModel() }, true);
}

/**
 * @param {string} title
 * @param {TaskModel} task
 * @param {{buttonContent:string,buttonVariant:string}} buttonProps
 */
export function EditTaskModalFormProps(title, task) {
    return new ModalProps("modify", title, { text: "", task: task }, false)
}

/**
 * @param {string} title
 */

export function AddTaskModalFormProps(title) {
    return new ModalProps("add", title, { text: "", task: new TaskModel() }, false)
}
