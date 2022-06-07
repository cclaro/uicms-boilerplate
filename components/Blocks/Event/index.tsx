import React from 'react'
import Image from 'next/image'
import Container from '../../Container'
import Block from '../../Block'
import { EventsWrapper, EventsHeader, EventsHeaderSubtitle, EventsItems, EventsItem, EventsItemThumb, EventsItemContent, EventProps } from './styles'

const Events = ({ title, subtitle, events }: EventProps) => {
  return (
    <Block backgroundType='white'>
        <Container>
            <EventsWrapper>
                <EventsHeader>
                    <h2>{title}</h2>
                    {subtitle ? <EventsHeaderSubtitle>{subtitle}</EventsHeaderSubtitle> : null}
                </EventsHeader>
                {events && (
                    <EventsItems>
                        {events.map(( item, index ) => (
                            <EventsItem key={index}>
                                <EventsItemThumb>
                                    <Image 
                                        src={item.thumb}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </EventsItemThumb>
                                <h5>{item.title}</h5>
                                <EventsItemContent>{item.content}</EventsItemContent>
                            </EventsItem>
                        ))}
                    </EventsItems>
                )}
            </EventsWrapper>
        </Container>
    </Block>
  )
}

export default Events