import Button from "../Button"
import Icon from "../Icon"
import Modal from "../Modal"
import { CloseButton, DeleteModalButtons, DeleteModalContainer, DeleteModalContent, DeleteModalDescription, DeleteModalHeader, DeleteModalIcon, DeleteModalTitle } from "./styles"

interface DeleteModalProps {
    toggleModal: boolean
    setToggleModal: React.Dispatch<React.SetStateAction<boolean>>
    id: string;
    handleDelete: () => void;
}

export const DeleteModal = ({ toggleModal, setToggleModal, id, handleDelete }: DeleteModalProps) => {
    return (
        <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
            <DeleteModalContainer>
                <DeleteModalHeader>
                    <CloseButton onClick={() => setToggleModal(false)}>
                        <Icon icon='close' />
                    </CloseButton>
                </DeleteModalHeader>
                <DeleteModalContent>
                    <DeleteModalIcon>
                        <Icon icon='infoDelete' />
                    </DeleteModalIcon>
                    <DeleteModalTitle>Are you sure?</DeleteModalTitle>
                    <DeleteModalDescription>This will permanently delete <span style={{ fontWeight: 'bold' }}>{id}</span> from the table.</DeleteModalDescription>
                </DeleteModalContent>
                <DeleteModalButtons>
                    <Button variant='secondary' label='No Thanks' handleClick={() => setToggleModal(false)} type={"button"} />
                    <Button variant='primary' label='Delete' handleClick={handleDelete} type={"button"} />
                </DeleteModalButtons>
            </DeleteModalContainer>
        </Modal>
    )
}