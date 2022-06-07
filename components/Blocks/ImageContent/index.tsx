import React from 'react'
import ButtonLink from '../../ButtonLink'
import Container from '../../Container'
import Block from '../../Block'
import { ImageContentWrapper, ImageContentInner, ImageContentText, ImageContentThumb , ImageContentProps  } from './styles'

const ImageContent = ({ title, subtitle, image, inverted, buttonLink: { slug, text, buttonType } }: ImageContentProps) => {
  return (
    <Block backgroundType='white'>
        <Container>
            <ImageContentWrapper>
                <ImageContentInner inverted={inverted}>
                    <ImageContentText>
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                        {slug && (
                        <ButtonLink slug={slug} text={text} buttonType={buttonType} />
                    )}
                   </ImageContentText>
                   <ImageContentThumb src={image} />
                </ImageContentInner>
            </ImageContentWrapper>            
        </Container>
    </Block>
  )
}

export default ImageContent