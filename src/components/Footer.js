import React, { Component } from 'react';
import styled from 'styled-components';

import Face from '../assets/socialFace.svg';
import Linkedin from '../assets/socialLinkedin.svg';
import LogoVnW from '../assets/logoVnw.png';


const ContentFooter = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 8rem;

  @media (max-width: 648px) {
    flex-direction: column;
    padding-bottom: 0;
    margin: 0;
	}
`;

const ContentFooterRede = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 648px) {
    width: 93%;
    flex-direction: column;
	}
`;

const ContentRedeSocial = styled.div`
  color: #373737;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 8rem;
	}

  @media (max-width: 648px) {
    width: 90%;
    border-left: 7px solid #992836;
	}

  span {
    display: flex;
    flex-direction: row;

    @media (max-width: 648px) {
      margin-left: 1rem;
	  }
  }

  img {
    height: 4vh;
    padding-right: 1rem;
  }
`;

const ContentFooterContact = styled.div`
  width: 27%;
  color: #373737;
  margin-right: 2rem;
  margin-bottom: ${props => (props.marginBottom ? '1.1rem' : '0')};

  @media (max-width: 768px) {
    width: 41%;
    line-height: 24px;
	}

  @media (max-width: 648px) {
    width: 100%;
    border-left: 7px solid #992836;
    margin-bottom: 3rem;
    margin-right: 0;
	}
`;

const TitleFooter = styled.h5`
  font-family: 'Open Sans', Extrabold;
  font-size: 1rem;
  font-weight: bolder;
  margin: 0 0 1.5rem 0;

  @media (max-width: 648px) {
    margin: 0 0 2rem 1rem;
	}
`;

const ParagraphFooter = styled.p`
  font-size: 0.85rem;
  font-family: 'Open Sans', Regular;

  @media (max-width: 648px) {
    width: 65vw;
    margin: 0 0 0 1rem;
	}

  b {
    font-family: 'Open Sans', SemiBold;
  }
`;

const FooterLinha = styled.div`
  width: 14vw;
  height: 1vh;
  background: linear-gradient(to right, #992836, #4D141B);
  margin-bottom: 0.4rem;

  @media (max-width: 768px) {
    width: 25vw;
  }

  @media (max-width: 648px) {
    display: none;
	}
`;

const ContentFooterTopo = styled.a`
  width: 5vh;
  height: 5vh;
  background: #F5F5F5;
  border-radius: 2px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 150px;
  opacity: 1;

  @media (max-width: 648px) {
    display: none;
	}
`;

const ContentFooterTriangle = styled.div`
  width: 0; 
  height: 0; 
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 10px solid #992836;
`;

const FooterFinish = styled.footer`
  width: 100%;
  background: linear-gradient(to right, #992836, #4D141B);
  color: #FFFFFF;
  font-family: 'Open Sans', ExtraBold;
  font-weight: bolder;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    margin-left: 1.3rem;
  }
`;


class Footer extends Component {
  render() {
    return (
      <>
        <ContentFooter>
          <ContentFooterRede>
            <ContentFooterContact>
              <FooterLinha></FooterLinha>
              <TitleFooter>CONTATO BRASIL</TitleFooter>
              <ParagraphFooter><b>Endereço:</b> Rua da Lapa, 180 – Salas 804 e 805 – Rio de Janeiro,
                RJ</ParagraphFooter>
              <ParagraphFooter><b>Cep:</b> 20.021-180;</ParagraphFooter>
              <ParagraphFooter><b>Telefone:</b> +55 (21) 2232-1337</ParagraphFooter>
              <ParagraphFooter><b>E-mail:</b> contato@sedimenta.com.br</ParagraphFooter>
            </ContentFooterContact>
            <ContentFooterContact marginBottom>
              <FooterLinha></FooterLinha>
              <TitleFooter>CONTATO PORTUGAL</TitleFooter>
              <ParagraphFooter><b>Endereço:</b> Rua de Moçambique, 12 1° Dir. - Almada, Portugal</ParagraphFooter>
              <ParagraphFooter><b>Telefone:</b> +55 (21) 2232-1337</ParagraphFooter>
              <ParagraphFooter><b>E-mail:</b> contato@sedimenta.com.br</ParagraphFooter>
            </ContentFooterContact>
          </ContentFooterRede>
          <ContentRedeSocial footer>
            <FooterLinha></FooterLinha>
            <TitleFooter>REDE SOCIAL</TitleFooter>
            <span>
              <a
                href='https://www.facebook.com/sedimentajpm'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img src={Face} alt='Facebook' />
              </a>
              <a
                href='https://www.linkedin.com/company/sedimenta-jpm-consultoria-e-servi-os-cont-beis/about/'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt='LinkedIn' />
              </a>
            </span>
          </ContentRedeSocial>
          <ContentFooterTopo href="#topo">
            <ContentFooterTriangle />
          </ContentFooterTopo>
        </ContentFooter>
        <FooterFinish>
          <p>DESENVOLVIDO POR:</p>
          <a
            href='https://www.vainaweb.com.br/'
            target='_blank'
            rel="noopener noreferrer"
          >
            <img src={LogoVnW} alt='logoVnw' />
          </a>
        </FooterFinish>
      </>
    );
  }
}

export default Footer;