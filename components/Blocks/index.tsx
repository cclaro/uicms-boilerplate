import React from 'react'
import Hero from './Hero';
import ImageContent from './ImageContent';
import Wave from '../../components/Wave';
import Events from './Event';
import ContactForm from './ContactForm';
import events from '../../docs/data/events.json';

const Blocks = () => {
  return (
    <>
        <Hero 
          title='H1 Title text' 
          subtitle='Chuck Norris does not sleep. He waits. When Chuck Norris sends in his taxes, he sends blank forms and includes only a picture of himself, crouched and ready to attack.'
          align='center'
          buttonLink={
            {'slug': '/', 'text': 'Let\'s go', 'buttonType': 'bgGray500'}
          }
          image='/darwin-vegher--r_tBsnGTCk-unsplash.jpg'
        />
        <Wave backgroundType='white' />
        <ImageContent 
          title='H3 Title text' 
          subtitle='Chuck Norris is my Homeboy. Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light, went back in time, and killed Amelia Earhart while she was flying over the Pacific Ocean.'
          buttonLink={
            {'slug': '/', 'text': 'Save me a seat', 'buttonType': 'bgGray500'}
          } 
          image='/surface-PLtMP8IGPns-unsplash.jpg' inverted 
        />
        <ImageContent
          title='H3 Title tex'
          subtitle='Chuck Norris can win a game of Connect Four in only three moves, Chuck Norris is the Alpha, Omega and everything in between. After discovering the secrets to time travel, Chuck Norris secretly replaced each player on the 1972 Dolphins team, thus making them undefeated.'
          buttonLink={
            {'slug': '/', 'text': 'Let\'s go', 'buttonType': 'bgGray500'}
          }
          image='/agnieszka-kowalczyk-2bnzvSAKATM-unsplash.jpg'
        />
        <Events 
          title='H2 Title text' 
          subtitle='Chuck Norris once got a gold medal in ice skating during the 2012 Olympics.' 
          events={events}
        />
        <Wave inverted backgroundType='white' />
        <ContactForm />
    </>
  )
}

export default Blocks