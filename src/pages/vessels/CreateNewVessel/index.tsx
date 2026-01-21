import { useForm } from "react-hook-form"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import Icon from "../../../components/Icon"
import { CreateNewVesselContainer, FormHeader, FormHeaderTitle, CloseButton, FormContainer, ButtonContainer, FormGroup } from "./styles"
import Modal from "../../../components/Modal"
import { useCreateVesselMutation } from "../../../services/apis/vessel"
import type { CreateVesselPayload } from "../../../services/apis/vessel"
import { useCallback } from "react"

type VesselFormValues = CreateVesselPayload

interface CreateNewVesselProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateNewVessel = ({ toggleModal, setToggleModal }: CreateNewVesselProps) => {
  const { control, handleSubmit } = useForm<VesselFormValues>()
  const [createVessel] = useCreateVesselMutation()

  const handleCreateVessel = useCallback((data: VesselFormValues) => {
    createVessel(data).unwrap().then(() => {
      setToggleModal(false)
    }).catch((error) => {
      console.error(error)
    })
  }, [createVessel, setToggleModal]) 

  return (
    <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
    <CreateNewVesselContainer>
      <FormHeader>
        <FormHeaderTitle>Create New Vessel</FormHeaderTitle>
        <CloseButton onClick={() => setToggleModal(false)}>
          <Icon icon='close' />
        </CloseButton>
      </FormHeader>
      <FormContainer onSubmit={handleSubmit(handleCreateVessel)}>
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