import React from 'react'
import { Button } from '../../globalStyles'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput,
    FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialLogo, SocialIcon,
    SocialMediaWrap, SocialIcons, SocialMedia, WebsiteRights, SocialIconLink

} from './Footer.elements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Inscreva-se  e receba novidades em primeira mão.
                </FooterSubHeading>
                <FooterSubText>
                    Você pode cancelar a qualquer momento.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Seu Email" />
                    <Button fontBig>Increver-se</Button>

                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle title="Conheça nossos planos.">Planos</FooterLinkTitle>
                        <FooterLink to='/'>Empresariais</FooterLink>
                        <FooterLink to='/'>Residenciais</FooterLink>
                        <FooterLink to='/'>Corporativos</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Atendimento</FooterLinkTitle>
                        <FooterLink to='/'>Autoatendimento</FooterLink>
                        <FooterLink to='/'>Cadastro e senha</FooterLink>
                        <FooterLink to='/'>2ª via de fatura</FooterLink>
                        <FooterLink to='/'>Perguntas frequentes</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Regulatório</FooterLinkTitle>
                        <FooterLink to='/'>Contratos e regulamentos</FooterLink>
                        <FooterLink to='/'>Política de Privacidade</FooterLink>
                        <FooterLink to='/'>Gerenciar Cookies</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>


            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                            FIBRA OPTICA
                    </SocialLogo>
                    <WebsiteRights> FIBRA OPTICA © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/Facebook' target='_blank' title="Facebook" arial-label="Facebook" ><FaFacebook /> </SocialIconLink>
                        <SocialIconLink href='/Twitter' target='_blank' title="Twitter" arial-label="Twitter" ><FaTwitter /> </SocialIconLink>
                        <SocialIconLink href='/Instagram' target='_blank' title="Instagram" arial-label="Instagram" ><FaInstagram /> </SocialIconLink>
                        <SocialIconLink href='/Linkedin' target='_blank' title="Linkedin" arial-label="Linkedin" ><FaLinkedin /> </SocialIconLink>
                        <SocialIconLink href='/Youtube' target='_blank' title="YouTube" arial-label="Youtube" ><FaYoutube /> </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>



        </FooterContainer>
    )
}

export default Footer
