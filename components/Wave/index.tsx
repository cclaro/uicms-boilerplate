import React from 'react'
import { WaveWrapper, WaveProps } from './styles'

const WaveItem = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="34"
      fill="none"
      viewBox="0 0 1440 34"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#clip0_106:92)">
        <path
          fill="rgb(249 250 251)"
          d="M116.5 27c-39.543 0-94-.167-116.5 2v-589.5c22.5-2.167 76.957-2 116.5-2 66 0 142.083-7.911 222.5-16 84.5-8.5 220-11.5 316.5-7.5 100.233 4.155 242.79 18.933 361.5 10.5 91.5-6.5 254.5-30 423 19.5V33.5C1271.5-16 1108.5 7.5 1017 14 898.29 22.433 755.733 7.655 655.5 3.5c-96.5-4-232-1-316.5 7.5-80.417 8.09-156.5 16-222.5 16z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_106:92">
          <path fill="#fff" d="M0 0H1440V34H0z"></path>
        </clipPath>
      </defs>
    </svg>
)

const Wave = ({ inverted, backgroundType }: WaveProps) => {
  return (
    <WaveWrapper inverted={inverted} backgroundType={backgroundType}>
        {WaveItem}
    </WaveWrapper>
  )
}

export default Wave