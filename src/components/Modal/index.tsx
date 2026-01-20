import { useClickAway } from '@uidotdev/usehooks'

import { ModalOverlay } from './styles'

interface ModalProps {
  children: React.ReactNode
  toggleModal: boolean
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>
  style?: React.CSSProperties
  closeOnOverlayClick?: boolean
}

const Modal = ({
  toggleModal,
  setToggleModal,
  children,
  style,
  closeOnOverlayClick = true,
}: ModalProps) => {
  const ref = useClickAway<HTMLDivElement>(() => {
    if (closeOnOverlayClick) {
      setToggleModal(false)
    }
  })

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      setToggleModal(false)
    }
  }

  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <ModalOverlay
      dataDisplay={toggleModal}
      style={style}
      onClick={handleOverlayClick}
      data-testid='modal-overlay'
    >
      <div
        ref={ref}
        data-testid='modal-content'
        onClick={handleModalContentClick}
      >
        {children}
      </div>
    </ModalOverlay>
  )
}

export default Modal
