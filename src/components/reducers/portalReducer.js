import { ModalProps } from "../../models/modalProps";

export const portalInitialState = {
    modal_props: new ModalProps()
}

export const portalReducer = (state, action) => {

    switch (action.type) {
        case "open":
            return {
                ...state,
                modal_props: action.modal_props
            }
        case "close":
            return {
                ...state,
                modal_props: new ModalProps()
            }
        default:
            return state;
    }
}