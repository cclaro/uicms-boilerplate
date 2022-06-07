import React, { useState } from 'react'
import ButtonLink from '../ButtonLink'
import { HeaderLoginProps, HeaderLoginWrapper, HeaderLoginLink, HeaderLoginMobileNav, HeaderLoginMobileNavUl, HeaderLoginMobileNavLi, HeaderLoginMenu } from './styles'
import Link from 'next/link'

const HeaderLogin = ({ navigation }: HeaderLoginProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toogleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeaderLoginWrapper>
            <Link href="/login" passHref>
                <HeaderLoginLink>Log in</HeaderLoginLink>
            </Link>
            <ButtonLink slug='/login' text='Try Free' buttonType={'bgGray500'} hideMobile />
            <HeaderLoginMenu>
                <ButtonLink onClick={toogleMenu} slug='#' text={isOpen ? 'Close' : 'Menu'} buttonType={'bgGray500'} hideDesktop />
            </HeaderLoginMenu>
            {isOpen ? (
                <HeaderLoginMobileNav>
                    <HeaderLoginMobileNavUl>
                        {navigation.map(({ id, title, slug }) => (
                            <HeaderLoginMobileNavLi key={id}>
                                <Link href={slug}>{title}</Link>
                            </HeaderLoginMobileNavLi>
                        ))}
                    </HeaderLoginMobileNavUl>
                </HeaderLoginMobileNav>
            ) : null
            }
            
        </HeaderLoginWrapper>
    )
}

export default HeaderLogin