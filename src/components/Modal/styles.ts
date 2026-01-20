import styled from '@emotion/styled'

export const ModalOverlay = styled.div<{ dataDisplay: boolean }>`
  display: ${({ dataDisplay }) => (dataDisplay ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  align-items: center;
  justify-content: center;
  padding: 16px;

  /* Ensure modal content is always visible and scrollable */
  & > div {
    max-height: calc(100vh - 32px);
    max-width: calc(100vw - 32px);
    overflow-y: auto;
    overflow-x: hidden;
  }

  /* Position at bottom on mobile like feedback form */
  @media (max-width: 768px) {
    align-items: flex-end;
    padding: 0;

    & > div {
      width: 100%;
      max-width: 100vw;
      max-height: 90vh;
      overflow-x: hidden;
    }
  }
`
