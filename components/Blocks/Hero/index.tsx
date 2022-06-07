import React from 'react'
import Image from 'next/image'
import ButtonLink from '../../ButtonLink'
import Container from '../../Container'
import Block from '../../Block'
import { HeroWrapper, HeroContent, HeroThumb, HeroProps } from './styles'

const Hero = ({ title, subtitle, image, align, buttonLink: { slug, text, buttonType } }: HeroProps) => {
  return (
    <Block backgroundType='bgGray50'>
        <Container>
            <HeroWrapper align={align}>
                <HeroContent>
                   <h1>{title}</h1>
                   <p>{subtitle}</p>
                   {slug && (
                       <ButtonLink slug={slug} text={text} buttonType={buttonType} />
                   )}
                </HeroContent>
                {image && <HeroThumb>
                  <Image 
                    src={image}
                    layout='fill'
                    alt={title}
                    priority
                  />
                </HeroThumb>}
                
            </HeroWrapper>
        </Container>
    </Block>
  )
}

export default Hero