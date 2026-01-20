import { useRef, useState } from "react"
import { OptionsDropdownContent, OptionsDropdownItem, OptionsDropdownItemContainer, OptionsDropdownItemIcon, OptionsMenuButton, StyledOptionsDropdown } from "./styles"
import Icon from "../Icon"
import { css } from "@emotion/css"
import { red01 } from "../../styles/abstracts/colors"
import { useClickOutside } from "../../hooks/useClickOutside"


interface OptionsProps {
    handleDelete: () => void
    handleEdit?: () => void
    handleView: () => void
}

export const Options = ({ handleDelete, handleEdit, handleView }: OptionsProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
      setIsOpen(!isOpen)
    }    

    useClickOutside(ref, () => setIsOpen(false))
    
    return (
      <StyledOptionsDropdown ref={ref}>
        <OptionsMenuButton onClick={handleToggle}>
          <Icon icon='ellipsis' />
        </OptionsMenuButton>
        {isOpen && (
          <OptionsDropdownContent>
            <OptionsDropdownItemContainer>
            <OptionsDropdownItem onClick={() => {
              handleView()
              setIsOpen(false)
            }}>
                <OptionsDropdownItemIcon>
                  <Icon icon='file' />
                </OptionsDropdownItemIcon>
                View
              </OptionsDropdownItem>
              {handleEdit && (
                <OptionsDropdownItem onClick={() => {
                handleEdit?.()
                setIsOpen(false)
              }}>
                <OptionsDropdownItemIcon>
                  <Icon icon='edit' />
                </OptionsDropdownItemIcon>
                Edit
              </OptionsDropdownItem>
              )}
              <OptionsDropdownItem className={css({
                color: `${red01} !important`,
                '& svg path': {
                  stroke: `${red01} !important`,
                },
              })} onClick={() => {
                handleDelete()
                setIsOpen(false)
              }}>
                <OptionsDropdownItemIcon>
                  <Icon icon='delete' />
                </OptionsDropdownItemIcon>
                Delete
              </OptionsDropdownItem>
            </OptionsDropdownItemContainer>
          </OptionsDropdownContent>
        )}
      </StyledOptionsDropdown>
    )
  }
