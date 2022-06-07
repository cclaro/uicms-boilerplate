import React from 'react'
import { ContainerWrapper, ContainerProps } from './styles'

const Container: React.FC = ({ children }: ContainerProps) => (
    <ContainerWrapper>{children}</ContainerWrapper>
)

export default Container