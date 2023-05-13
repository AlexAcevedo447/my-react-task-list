import { Header } from '../components/Header';
import { TaskList } from '../components/TaskList';

import "./Tasks.css"

import { AddTaskModalFormProps } from '../models/modalProps';
import { Flex } from '@chakra-ui/react';
import ModalConfirm from '../components/modals/ModalConfirm';
import { usePortal } from '../components/hooks';
import { BsPlus } from 'react-icons/bs';

export default function Tasks() {
    document.title = "Tasks"
    const modalProps = AddTaskModalFormProps("Add a new todo");
    const buttonProps = { buttonContent: "Add a new todo", buttonVariant: "outline", LeftIcon: <BsPlus size="40px" /> };
    const [portalIsActive, togglePortal] = usePortal();
    return (
        <Flex className="task-popup">
            <Header />
            <ModalConfirm buttonProps={buttonProps} setContext={() => { togglePortal("open", modalProps); }} />
            <TaskList />
        </Flex>
    )
}