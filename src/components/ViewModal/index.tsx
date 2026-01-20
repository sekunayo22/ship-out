import Icon from "../Icon"
import Modal from "../Modal"
import { ViewModalContainer, ViewModalHeader, ViewModalTitle, CloseButton, ViewModalContent, ViewModalItem, ViewModalItemKey, ViewModalItemValue } from "./styles"

interface ViewModalProps {
    toggleModal: boolean
    setToggleModal: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    payload: { [key: string]: string | number | null | undefined };
}

export const ViewModal = ({ toggleModal, setToggleModal, title, payload }: ViewModalProps) => {
    return (
        <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
            <ViewModalContainer>
                <ViewModalHeader>
                <ViewModalTitle>View {title} </ViewModalTitle>
                    <CloseButton onClick={() => setToggleModal(false)}>
                        <Icon icon='close' />
                    </CloseButton>
                </ViewModalHeader>
                <ViewModalContent>
                    {Object.entries(payload).map(([key, value]) => (
                        <ViewModalItem key={key}>
                            <ViewModalItemKey>{key}</ViewModalItemKey>
                            <ViewModalItemValue>{value as string}</ViewModalItemValue>
                        </ViewModalItem>
                    ))}
                </ViewModalContent>
            </ViewModalContainer>
        </Modal>
    )
}