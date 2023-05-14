import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import ManageTaskForm from '../forms/ManageTaskForm';
import { ModalProps } from '../../models/modalProps';
import { useNsColorValues, usePortal } from '../hooks';

export default function ModalConfirm({ setContext = () => { }, buttonProps, onDelete = () => { } }) {
    const { bg, fontColor } = useNsColorValues();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [portalIsActive, togglePortal] = usePortal()
    const { type, title, content, actions } = portalIsActive.modal_props;
    const onOpenModal = () => {
        onOpen();
        setContext();
    }
    const handleDelete = () => {
        onDelete();
        onClose()
    }
    return (
        <>
            <Button color={fontColor} borderColor={fontColor} leftIcon={buttonProps.LeftIcon ? buttonProps.LeftIcon : <></>} variant={buttonProps.buttonVariant} onClick={onOpenModal}>
                {buttonProps.buttonContent}
            </Button>

            <Modal isOpen={isOpen} onClose={() => { onClose(); togglePortal("close", new ModalProps()) }}>
                <ModalOverlay />
                <ModalContent bgColor="blue.0">
                    <ModalHeader color="white.100">{title}</ModalHeader>
                    <ModalCloseButton backgroundColor="white.100" color="blue.0" />
                    <ModalBody>
                        {type === "delete" ? <Text color="white.100">{content.text}</Text> : <ManageTaskForm actionType={type} closeModal={onClose} />}
                    </ModalBody>

                    <ModalFooter>
                        {
                            actions
                            &&
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>

                        }
                        {
                            type === "delete"
                            &&
                            <Button colorScheme='red' mr={3} onClick={handleDelete}>
                                Delete
                            </Button>
                        }
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}