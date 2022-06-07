import Link from 'next/link'
import { ButtonLinkWrapper, ButtonLinkWrapperButton, ButtonLinkProps } from './styles'

const ButtonLink = ({ slug, text, buttonType, hideDesktop, hideMobile, asButton, onClick }: ButtonLinkProps) => {
    return (
        <>
        {!asButton ? <Link href={slug} passHref>
            <ButtonLinkWrapper buttonType={buttonType} hideDesktop={hideDesktop} hideMobile={hideMobile} onClick={onClick}>{text}</ButtonLinkWrapper>
        </Link> : 
            <ButtonLinkWrapperButton type='submit' buttonType={buttonType}>{text}</ButtonLinkWrapperButton>
        }
        </>
        
    )
}

export default ButtonLink