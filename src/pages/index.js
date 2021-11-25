import React from 'react';
import { Container, 
    ContainerPrincipal,
    Profile,
    Image, 
    H1,
    ContainerSecondary,
    ContainerSocialNetwork,
    CardWhatsapp,
    CardTelephone,
    CardEmail,
    ContainerServices,
    H2,
    ContainerFooter
 } from './styles';

import Avatar from '../assets/foto-emerson.jpg';
import { BsWhatsapp, BsTelephoneFill} from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosFlash } from 'react-icons/io';
import { GiClick } from 'react-icons/gi';

function DigitalCard() {
  return (
      <Container>
        <ContainerPrincipal>
            <Profile>
                <Image src={Avatar} alt="foto-emerson"/>
                <H1>Emerson Moura</H1>
            </Profile>
            <ContainerSecondary>
                <ContainerSocialNetwork>
                    <CardWhatsapp>
                        <a href="https://wa.me/5511995048049">
                            <BsWhatsapp size="30px" className="logo-whatsapp"/>
                        </a>
                    </CardWhatsapp>
                    <p>WhatsApp</p>
                    <CardTelephone>
                        <a href="tel:+5511995048049">
                            <BsTelephoneFill size="30px" className="logo-telephone"/>
                        </a>
                    </CardTelephone>
                    <p>Telefone</p>
                    <CardEmail>
                        <a href="mailto:emerson_ro7@yahoo.com.br">
                            <HiOutlineMail size="30px" className="logo-email"/>
                        </a>
                    </CardEmail>
                    <p>Email</p>
                </ContainerSocialNetwork>
                <ContainerServices>
                    <H2>Manutenção em:</H2>
                    <ul>
                        <li><IoIosFlash size="16px"/>Micro-ondas</li>
                        <li><IoIosFlash size="16px"/>Air Fryer</li>
                        <li><IoIosFlash size="16px"/>Chapinhas</li>
                    </ul>
                </ContainerServices>
            </ContainerSecondary>
            <ContainerFooter>
                <GiClick size="20px"/><p>Clique nos Ícones</p>
            </ContainerFooter>
        </ContainerPrincipal>
      </Container>
  );
}

export default DigitalCard;