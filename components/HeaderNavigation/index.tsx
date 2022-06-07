import Link from 'next/link'
import { HeaderNavigationLink, HeaderNavigationProps } from './styles'

const HeaderNavigationItem = ({ slug, text }: HeaderNavigationProps) => {
    return (
        <Link href={slug} passHref>
            <HeaderNavigationLink>{text}</HeaderNavigationLink>
        </Link>
    )
}

export default HeaderNavigationItem