import { createContext, useReducer } from "react";
import { portalReducer, portalInitialState } from "../reducers/portalReducer";
import { ModalProps } from "../../models/modalProps";
import { tasksReducer, tasksInitialState } from "../reducers/tasksReducer"; import { useColorModeValue } from "@chakra-ui/react";

const portalInitialContext = {
    portalContextReducer: () => [{ modal_props: new ModalProps() }, ({ type, modal_props }) => { }],
    tasksContextReducer: () => [[], ({ type, task, taskId, tasks }) => { }],
    colorModeValues: { bg: "", fontColor: "" }
}

export const PortalContext = createContext(portalInitialContext);

const PortalProvider = ({ children }) => {
    //para activar y desactivar el portal
    let [portalIsActive, togglePortal] = useReducer(portalReducer, portalInitialState);
    let [tasks, dispatch] = useReducer(tasksReducer, tasksInitialState);
    const bg = useColorModeValue("white", "#050239")
    const fontColor = useColorModeValue("#050239", "white")

    return (
        <PortalContext.Provider value={{
            portalContextReducer: () => [portalIsActive, togglePortal], tasksContextReducer: () => [[...tasks], dispatch],
            colorModeValues: { bg, fontColor }
        }}>
            {children}
        </PortalContext.Provider>
    )
}

export default PortalProvider;