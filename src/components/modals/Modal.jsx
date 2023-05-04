import { useContext } from "react"
import "./Modal.css"
import Portal from "./Portal"
import { PortalContext } from "../context/portalContext"
import { ModalComfirm } from "./ModalComfirm"


export const Modal = () => {
    return (
        <Portal>
            <ModalComfirm />
        </Portal>
    )
}