import { ModalProps } from "../../models/modalProps";

export const modalInitialState = {
    modal_props: new ModalProps()
}

export const modalReducer = (state, action) => {
    let { type, modalProps } = action;
    switch (type) {
        case "modal_form":
            return {
                ...state,
                modal_props: modalProps
            }
        case "clean_props":
            return {
                ...state,
                modal_props: new ModalProps()
            }
        default:
            return state;
    }
}