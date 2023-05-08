import { Header } from '../components/Header';
import { TaskList } from '../components/TaskList';
import { Modal } from '../components/modals';

import "./Tasks.css"

import { useContext } from 'react';
import { AddTaskModalFormProps } from '../models/modalProps';
import { NsButton } from '../components/buttons/NsButton';
import { PortalContext } from '../components/context/portalContext';

export default () => {
    document.title = "Tasks"
    const { portalContextReducer } = useContext(PortalContext);
    let [portalIsActive, togglePortal] = portalContextReducer();
    const openNewAddTaskForm = () => {
        togglePortal({ type: "toggle", modal_props: AddTaskModalFormProps("Add a todo") });
    }
    return (
        <div className="task-popup">
            <Header />
            <NsButton title={"Add a new todo"} mode={"cake"} openModal={openNewAddTaskForm} />
            <Modal />
            <TaskList />
        </div>
    )
}