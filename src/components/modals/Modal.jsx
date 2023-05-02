import { useContext } from "react"
import "./Modal.css"
import Portal from "./Portal"
import { PortalContext } from "../context/portalContext"
import { ModalComfirm } from "./ModalComfirm"


export const Modal = () => {
    const { portalContextReducer } = useContext(PortalContext);
    const { type } = portalContextReducer.portalIsActive.modal_props;
    if (type === "modal-add-form") {
        return (
            <Portal>
                <ModalComfirm />
            </Portal>
        )
    } else if (type === "modal-modify-form") {
        return (
            <Portal>
                <ModalComfirm />
            </Portal>
        )
    } else {
        return (
            <Portal>
                <ModalComfirm />
            </Portal>
        )
    }
}