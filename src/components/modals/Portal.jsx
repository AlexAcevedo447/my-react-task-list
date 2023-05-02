import { useContext } from "react";
import { createPortal } from "react-dom";
import { PortalContext } from "../context/portalContext";
import "./Portal.css"

const myPortal = document.getElementById('portal');


export const Portal = ({ children }) => {
    const { portalContextReducer } = useContext(PortalContext);

    return (
        <>
            {portalContextReducer.portalIsActive.active === true && createPortal(<div className="ns_modal">{children}</div>, myPortal)}

        </>
    )
}

export default Portal;