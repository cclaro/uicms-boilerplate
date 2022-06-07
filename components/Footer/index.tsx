import React from 'react'
import { FooterProps, FooterWrapper, FooterColHeadingWrapper, FooterColHeading, FooterColHeadingHR, FooterCol, FooterColLInk } from './styles'

const Footer = ({ footer }: FooterProps) => {

  return (
    <FooterWrapper>
        {footer.map((column, index) => {
            return (
                <div key={index}>
                    <FooterColHeadingWrapper>
                        <FooterColHeading>{column.title}</FooterColHeading>
                        <FooterColHeadingHR />
                    </FooterColHeadingWrapper>
                    {column.items.map((item, index) => (
                        <FooterCol key={index}>
                            <FooterColLInk href={item.slug}>
                                {item.title}
                            </FooterColLInk>
                        </FooterCol>
                    ))}
                </div>
            )
        })}
    </FooterWrapper>
  )
}

export default Footer