import React, { Component } from 'react';
import styled from 'styled-components';

//Images
import Face from '../assets/socialFace.svg';
import Linkedin from '../assets/socialLinkedin.svg';
import LogoVnW from '../assets/logoVnw.png';


const Content = styled.div`
  width: 100%;
`;

const ContentFooter = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 8rem;

  @media (max-width: 768px) {
    width: 93%;
    padding-bottom: 5rem;
	}

  @media (max-width: 648px) {
    flex-direction: column;
    padding-bottom: 0;
    /* margin: 0; */
	}
`;

const ContentFooterRede = styled.div`
  display: flex;

  @media (max-width: 648px) {
    width: 93%;
    flex-direction: column;
	}
`;

const ContentRedeSocial = styled.div`
  width: 15%;
  color: #373737;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1023px) {
    margin-bottom: 10%;
	}
  
  @media (max-width: 768px) {
    width: 32%;
    margin-bottom: 10rem;
	}

  @media (max-width: 648px) {
    width: 90%;
    border-left: 7px solid #992836;
    margin-bottom: 5rem;
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

  @media (max-width: 1023px) {
    margin-right: 4rem;
	}

  @media (max-width: 768px) {
    width: 41%;
    line-height: 24px;
    margin-bottom: ${props => (props.marginBottomMobile ? '3rem' : '0')};
	}

  @media (max-width: 648px) {
    width: 100%;
    border-left: 7px solid #992836;
    margin-bottom: 3rem;
    margin-right: 0;
	}
`;

const TitleFooter = styled.h5`
  font-size: 0.874rem;
  font-family: 'Spartan', Extrabold;
  font-weight: bolder;
  margin: 1rem 0 2rem;

  @media (max-width: 648px) {
    margin: 0 0 2rem 1rem;
	}
`;

const ParagraphFooter = styled.p`
  font-size: 0.8125rem;
  font-family: 'Open Sans', Regular;
  padding-bottom: 0.3rem;

  @media (max-width: 648px) {
    width: 65vw;
    margin: 0 0 0 1rem;
	}

  b {
    font-family: 'Open Sans', SemiBold;
  }
`;

const FooterLinha = styled.div`
  width: 100%;
  height: 1vh;
  background: linear-gradient(to right, #992836, #4D141B);
  /* margin-bottom: 0.4rem; */

  @media (max-width: 648px) {
    display: none;
	}
`;

const ContentFooterTopo = styled.a`
  width: 6.3vh;
  height: 6.3vh;
  background: rgb(153, 40, 54);
  border-radius: 2px;
  box-shadow: 0px 3px 6px #00000029;
  display: ${props => (props.isScrollTopFooter ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  opacity: 1;

  @media (max-width: 1023px) {
    display: none;
	}
`;

const ContentFooterTriangle = styled.div`
  width: 2px; 
  height: 2px; 
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 10px solid #F5F5F5;

  @media (max-width: 1023px) {
    display: none; 
	}
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
  // state = {
  //   isScrollTop: false,
  // }

  // componentDidMount() {
  //   if (typeof window !== undefined) {
  //     window.onscroll = () => {
  //       console.log('oiiiii');
  //       if (window.scrollY <= 250) {
  //         this.setState({
  //           isScrollTop: true,
  //         })
  //       }
  //       if (window.scrollY > 265) {
  //         this.setState({
  //           isScrollTop: false,
  //         })
  //       }
  //     };
  //   }
  // }

  render() {
    return (
      <>
        <Content>
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
              <ContentFooterContact marginBottom marginBottomMobile>
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
            <ContentFooterTopo isScrollTopFooter={this.props.isScrollTopFooter} href="#topo">
              <ContentFooterTriangle />
            </ContentFooterTopo>
          </ContentFooter>
        </Content>
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