import Link from 'next/link'
import { HiringLinkProps, HiringWrapper } from './styles'

const HiringLink = ({ slug, text, backgroundColor }: HiringLinkProps) => {
    return (
        <Link href={slug} passHref>
            <HiringWrapper backgroundColor={backgroundColor}>
                {text}
            </HiringWrapper>
        </Link>
    )
}

export default HiringLink