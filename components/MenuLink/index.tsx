import Link from 'next/link'
import { ButtonLinkWrapper, ButtonLinkProps } from './styles'

const ButtonLink = ({ slug, text, buttonType }: ButtonLinkProps) => {
    return (
        <Link href={slug} passHref>
            <ButtonLinkWrapper buttonType={buttonType}>{text}</ButtonLinkWrapper>
        </Link>
    )
}

export default ButtonLink