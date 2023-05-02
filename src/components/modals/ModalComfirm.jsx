import { useContext } from "react"
import { PortalContext } from "../context/portalContext"
import { ModalForm } from "./ModalForm";
import { NsButton } from "../buttons/NsButton";
import { ModalProps } from "../../models/modalProps";

import "./ModalComfirm.css";



export const ModalComfirm = () => {
    const { portalContextReducer } = useContext(PortalContext);
    const { type, title, content } = portalContextReducer.portalIsActive.modal_props;
    return (
        <>
            <div className="ns_modal--header">
                <h1>{title}</h1>
                <button className="close-btn" onClick={() => { portalContextReducer.togglePortal({ type: "toggle", modal_props: new ModalProps() }) }}>x</button>
            </div>
            <div className="ns_modal--content">
                {type === "modal-modify-form" ? <ModalForm kindof={"Modify"} /> : <ModalForm kindof={"Create"} />}
            </div>
            <div className="ns_modal--actions">

            </div>
        </>
    )
}