import { Button } from "@chakra-ui/react"
import NsFormControl from "./NsFormControl"
import { taskTitleValidator } from "../../validators/formValidators"
import { usePortal, useTasks } from "../hooks";

//Modify and add a task form
export default function ManageTaskForm({ actionType, closeModal, taskId }) {
    const [portalIsActive, togglePortal] = usePortal();
    const modalProps = portalIsActive.modal_props;
    console.log(modalProps)
    const [customTasks, setCustomTasks] = useTasks();
    const { titleState, contentState } = customTasks;
    let [title, setTitle] = titleState;
    let [content, setContent] = contentState;
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setCustomTasks(actionType, taskId, title, content);
        closeModal();
    }
    return (
        <>
            {actionType === "add" &&
                <form onSubmit={handleSubmitForm}>
                    <NsFormControl helperMessage="Enter the title of your task" inputType="text" label="Title" validator={taskTitleValidator} charactersLimit={4} value={title} stateChanger={setTitle} />
                    <NsFormControl helperMessage="Enter the content of your task" inputType="text" label="Content" value={content} stateChanger={setContent} />
                    <Button type="submit" variant="solid" disabled={true}>Create</Button>
                </form>
            }
            {actionType === "modify" &&
                <form onSubmit={handleSubmitForm}>
                    <NsFormControl helperMessage="Enter the title of your task" inputType="text" label="Title" validator={taskTitleValidator} charactersLimit={4} value={title} stateChanger={setTitle} />
                    <NsFormControl helperMessage="Enter the content of your task" inputType="text" label="Content" value={content} stateChanger={setContent} />
                    <Button type="submit" variant="solid" disabled={true}>Modify</Button>
                </form>
            }
        </>
    )
}