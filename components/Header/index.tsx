import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderProps, HeaderWrapper, HeaderLogo, HeaderNavigation } from './styles'
import HiringLink from '../HiringLink'
import HeaderNavigationItem from '../HeaderNavigation'
import HeaderLogin from '../HeaderLogin'

const Header = ({ navigation }: HeaderProps) => (
    <HeaderWrapper role="navigation">
        <HeaderLogo>
            <Link href="/" passHref>
                <a>
                    <Image src="/lemon_logo.jpg" height={70} width={70} alt="UI Boilerplate Logo" className='header-logo' />
                </a>
            </Link>
            <HiringLink text="contact us" slug="/" backgroundColor={'bgGray50'} />
        </HeaderLogo>
        <HeaderNavigation>
            {navigation.map((item) => (
                <HeaderNavigationItem key={item.title} slug={item.slug} text={item.title}   />
            ))}
        </HeaderNavigation>
        <HeaderLogin navigation={navigation} />
    </HeaderWrapper>
)

export default Header