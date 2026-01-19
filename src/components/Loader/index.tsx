import { LoaderContainer, LoaderContent, LoaderText } from './styles'
import Icon from '../Icon'

const Loader = () => {
  return (
    <LoaderContainer>
        <LoaderContent>
            <Icon icon="logo" />
            <LoaderText>SHIP OUT</LoaderText>
        </LoaderContent>
    </LoaderContainer>
  )
}

export default Loader