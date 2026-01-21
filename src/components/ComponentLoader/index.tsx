import Icon from "../Icon"
import { ComponentLoaderContainer, LoaderContent, LoaderText, } from "./styles"

export const ComponentLoader = () => {
  return (
    <ComponentLoaderContainer>
        <LoaderContent>
            <Icon icon="logo" />
            <LoaderText>SHIP OUT</LoaderText>
        </LoaderContent>
    </ComponentLoaderContainer>
  )
}