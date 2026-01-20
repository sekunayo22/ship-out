import { useForm } from "react-hook-form"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import Icon from "../../../components/Icon"
import { FormHeader, FormHeaderTitle, CloseButton, FormContainer, ButtonContainer, FormGroup, EditVesselContainer } from "./styles"
import Modal from "../../../components/Modal"
import { useEffect } from "react"

interface EditVesselModalProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  vessel: { [key: string]: string | number | null | undefined };
}

export const EditVesselModal = ({ toggleModal, setToggleModal, vessel }: EditVesselModalProps) => {
  const { control, handleSubmit, reset } = useForm()

  useEffect(() => {
    reset(vessel)
  }, [reset, vessel])

  return (
    <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
    <EditVesselContainer>
      <FormHeader>
        <FormHeaderTitle>Edit Vessel</FormHeaderTitle>
        <CloseButton onClick={() => setToggleModal(false)}>
          <Icon icon='close' />
        </CloseButton>
      </FormHeader>
      <FormContainer>
        <Input
          type='text'
          control={control}
          name='name'
          label='Name'
          required
        />
        <Input
          type='text'
          control={control}
          name='loop'
          label='Loop'
          required
        />
        <Input
          type='text'
          control={control}
          name='port'
          label='Port'
          required
        />
        <FormGroup>
            <Input
                type='number'
                control={control}
                name='weekNum'
                label='Week Number'
                required
            />
            <Input
                type='number'
                control={control}
                name='allocation'
                label='Allocation'
                required
            />
        </FormGroup>
      </FormContainer>
      <ButtonContainer>
          <Button
            type='submit'
            variant='primary'
            label='Save'
          />
        </ButtonContainer>
    </EditVesselContainer>
  </Modal>
  )
}