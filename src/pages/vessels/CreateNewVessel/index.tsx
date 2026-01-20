import { useForm } from "react-hook-form"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import Icon from "../../../components/Icon"
import { CreateNewVesselContainer, FormHeader, FormHeaderTitle, CloseButton, FormContainer, ButtonContainer, FormGroup } from "./styles"
import Modal from "../../../components/Modal"

interface CreateNewVesselProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateNewVessel = ({ toggleModal, setToggleModal }: CreateNewVesselProps) => {
  const { control, handleSubmit } = useForm()
  return (
    <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
    <CreateNewVesselContainer>
      <FormHeader>
        <FormHeaderTitle>Create New Vessel</FormHeaderTitle>
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
    </CreateNewVesselContainer>
  </Modal>
  )
}