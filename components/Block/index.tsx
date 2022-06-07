import React from 'react'
import { BlockProps, BlockWrapper } from './styles'

const Block = ({ backgroundType, children }: BlockProps) => {
  return (
    <BlockWrapper backgroundType={backgroundType}>{children}</BlockWrapper>
  )
}

export default Block