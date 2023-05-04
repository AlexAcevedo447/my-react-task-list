import { useContext } from "react"
import { PortalContext } from "../context/portalContext"
import { ModalForm } from "./ModalForm";
import { NsButton } from "../buttons/NsButton";
import { ModalProps } from "../../models/modalProps";

import "./ModalComfirm.css";
import { ComfirmDelete } from "./ComfirmDelete";



export const ModalComfirm = () => {
    const { portalContextReducer, tasksContextReducer, dbContextReducer } = useContext(PortalContext);
    let [tasks, setTask] = tasksContextReducer();
    let [portalIsActive, togglePortal] = portalContextReducer();
    const { type, title, content } = portalIsActive.modal_props;
    let { id } = content.task
    return (
        <>
            <div className="ns_modal--header">
                <h1>{title}</h1>
                <button className="close-btn" onClick={() => { togglePortal({ type: "toggle", modal_props: new ModalProps() }) }}>x</button>
            </div>
            <div className="ns_modal--content">
                {type === "modal-modify-form" && <ModalForm kindof={"Modify"} />}
                {type === "modal-add-form" && <ModalForm kindof={"Create"} />}
                {type === "modal-comfirm-delete" && <ComfirmDelete kindof={"Delete"} />}
            </div>
            <div className="ns_modal--actions">
                {type === "modal-comfirm-delete" && <div className="delete-actions"><button className="btn-action" onClick={() => togglePortal({ type: "toggle", modal_props: new ModalProps() })}>I´m not sure</button>
                    <button className="btn-action" onClick={() => { setTask({ type: "delete", taskId: id }); togglePortal({ type: "toggle", modal_props: new ModalProps() }) }}>Just delete it</button></div>}
            </div>
        </>
    )
}