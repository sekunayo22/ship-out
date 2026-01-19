import Loader from './components/Loader'
import { Global } from '@emotion/react'
import { normalize } from './styles/base/reset'

function App() {
  return (
    <>
      <Global styles={normalize} />
      <Loader />
    </>
  )
}

export default App
