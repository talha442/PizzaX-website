import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener norefferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener norefferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Github" rel="noopener norefferrer">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener norefferrer">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
