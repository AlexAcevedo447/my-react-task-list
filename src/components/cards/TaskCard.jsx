import { useNsColorValues, usePortal, useTasks } from "../hooks";
import { Card, CardBody, Button, ButtonGroup } from "@chakra-ui/react";
import { BsCheck2Circle, BsCheckCircleFill, BsTrash } from "react-icons/bs";
import ModalConfirm from "../modals/ModalConfirm";
import { ConfirmProps, EditTaskModalFormProps } from "../../models/modalProps";


export default function TaskCard({ task }) {
    const [customTasks, setCustomTasks] = useTasks();
    const { bg, fontColor } = useNsColorValues()
    const [portalIsActive, togglePortal] = usePortal()
    const { id, title, content, completed } = task;
    const buttonTitle = title.length > 25 ? title.substring(0, 25) + " ..." : title
    const iconButtonSwitcher = completed ? <BsCheckCircleFill color="green" /> : <BsCheck2Circle />;
    const colorSchemeSwitcher = completed ? "dark-blue" : "whiteAlpha";
    const onCompleteTask = () => {
        setCustomTasks("completed", id);
    }
    const onDeleteTask = () => {
        setCustomTasks("delete", id);
    }
    return (
        <Card width="100%" backgroundColor={bg} color="white">
            <CardBody display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" gap="20px">
                <ModalConfirm buttonProps={{ buttonContent: buttonTitle, buttonVariant: "solid" }} setContext={() => togglePortal("open", EditTaskModalFormProps("Modify task number " + id, task))} />
                <ButtonGroup>
                    <ModalConfirm buttonProps={{ buttonContent: "Delete", buttonVariant: "outline", LeftIcon: <BsTrash /> }} setContext={() => togglePortal("open", ConfirmProps("delete", "Delete task number " + id, "Are you sure you want to delete this task?"))} onDelete={onDeleteTask} />
                    <Button backgroundColor={bg} color={fontColor} onClick={onCompleteTask} leftIcon={iconButtonSwitcher} colorScheme={colorSchemeSwitcher} variant="outline">
                        {completed ? "Completed" : "Uncompleted"}
                    </Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    )
}