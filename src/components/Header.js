import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

//Images
import logo from '../assets/logoSedimenta.svg';
import menuHamburguer from '../assets/menu.svg';
import menuHamburguerPreto from '../assets/menuPreto.svg';
import close from '../assets/close.svg';
import Amigos from '../assets/amigos.jpg';
import Domestica from '../assets/domestica.png';
import Calculadora from '../assets/calculadora.jpg';

const ContainerLogo = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position-y: -35px;
  background-size: cover;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 
  @media (max-width: 768px) {
    flex-direction: column;
	}

  @media (max-width: 450px) {
    background-position-x: ${props => (props.positionImg)};
	}

  span {
    width: 100%;
    height: 100vh;
    background: #0000005C 0% 0% no-repeat padding-box;
    opacity: 0.97;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
	}

  @media (max-width: 648px) {
    padding: 0.5rem 1rem;
    height: 95vh;
	}
}
`;

const HeaderScroll = styled.div`
  width: 100%;
  height: 3.59rem;
  background-color: ${props => (props.isScroll ? '#FFFFFF' : 'transparent')};
  box-shadow: ${props => (props.isScroll && '0px 3px 6px #00000029')};
  padding: 0 1.5rem 0.4rem;
  transition: all 0.5s;
  position: fixed;
  top: 0;
  z-index: 99;

  @media (max-width: 648px) {
    height: 3rem;
    padding: 0 0.6rem 0.4rem;
    overflow-x: scroll;
	}
`;

const ContainerHeader = styled.div`
  width: 100%;
  height: 2rem;
  color: #FFFFFF;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  opacity: 1;

  @media (max-width: 768px) {
    font-size: 0.6rem;
	}

  @media (max-width: 648px) {
    display: none;
	}
  
  p {
    font-family: 'Open Sans', Regular;
  }
`;

const ContainerHeaderPage = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: 0.6875rem;
  opacity: 0.97;

  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
	}

  @media (max-width: 648px) {
    border-top: 1px solid #FFFFFF;
    font-size: 0.75rem;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 0;
	}
`;

const Page = styled.p`
  font-family: 'Open Sans', Regular;
  padding-right: 2rem;

  b {
    font-family: 'Open Sans', Semibold;
  }

  @media (max-width: 648px) {
    padding-right: 4rem;
    padding-bottom: 0.4rem;
	}

  @media (max-width: 425px) {
    padding-right: 0;
	}
`;

const ContainerHeaderMobile = styled.div`
  display: none;

  @media (max-width: 648px) {
    width: 95%;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', Regular;
    padding-top: 9rem;
	}
`;

const Logo = styled.img`
  height: 8.4vh;

  @media (max-width: 768px) {
    height: 8vh;
	}

  @media (max-width: 648px) {
    display: none;
	}
`;

const LogoMobile = styled.img`
  display: none;

  @media (max-width: 648px) {
    display: flex;
    height: 7vh;
	}
`;

const ContainerHeaderBox = styled.div`
  height: 2vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 648px) {
    width: 100vw;
    height: 75vh;
    background: ${props => (props.open && 'linear-gradient(to right, #982626, #4D141B)')};
    justify-content: flex-end;
    flex-direction: column-reverse;
    padding: 1rem 0 0 0;
    opacity: 1;
    position: absolute;
    right: 0;
    top: 0;
	}
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 648px) {
    /* width: 80%; */
    /* align-items: center;
    justify-content: space-between; */
	}
`;

const BoxMenu = styled.div`
  color: ${props => (props.isScroll ? '#373737' : '#FFFFFF')};
  display: ${props => (props.open ? 'flex' : 'none')};
  align-items: center;
  flex-direction: row;

  @media (max-width: 648px) {
    width: 100%;
    display: ${props => (props.open ? 'flex' : 'none')};
    align-items: end;
    flex-direction: column;
    padding: 2.3rem 0 0 1rem;
	}
`;

const ImageClosed = styled.img`
  display: none;

  @media (max-width: 648px) {
    display: flex;
	}
`;

const rotate = keyframes`
  from { opacity: 0 }
  to { opacity: 1; }
  fade-in { opacity: 1; }
`;

const SubContainerParagraph = styled.p`
  margin-right: 2rem;
  animation: 0.7s ease-in ${rotate};

  a {
    color: ${props => (props.isScroll ? '#373737' : '#FFFFFF')};
    font-size: 0.8rem;
    font-family: 'Arial', Bold;
    text-decoration: none;

    @media (max-width: 648px) {
      color: #FFFFFF !important;
	  }
  }

  @media (max-width: 470px) {
    padding-bottom: 1.5rem;
    margin-right: 2rem;
	}

  @media (max-width: 648px) {
    margin-right: 0;
	}
`;

const MenuHamburguer = styled.img`
  height: 13px;
  cursor: pointer;
  /* padding-bottom: 0.3rem; */

  @media (max-width: 648px) {
    align-self: end;
    padding-left: 1rem;
    /* margin-top: 1rem; */
	}
`;

const SubContainerText = styled.div`
  width: ${props => (props.title ? '53%' : '43%')};
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding: 8% 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    width: 70%;
	}

  @media (max-width: 648px) {
    width: 95%;
    text-align: center;
    align-items: center;
    padding: 25% 0;
	}
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Product Sans', Bold;
  
  @media (max-width: 768px) {
    font-size: 2rem;
	}
`;

const ParagraphHeader = styled.p`
  width: ${props => (props.paragraph ? '89%' : '99%')};
  margin: 1rem 0 1.5rem;
  font-family: 'Open Sans', Regular;
  opacity: 1;

  @media (max-width: 450px) {
    width: 100%;
	}
`;

const ContentParahraph = styled.div`
  display: flex;
  font-family: 'Open Sans', Regular;
  font-size: 0.5rem;
  transform: rotate(270deg);
  position: absolute;
  top: 300px;
  right: ${props => (props.right ? '-42px' : '-92px')};
`;

const ParagraphHeaderImage = styled.a`
  color: #FFFFFF99;
  text-decoration: none;
  opacity: 99;
  z-index: -2;
  cursor: pointer;

  @media (max-width: 450px) {
    display: none;
	}
`;

const ButtonHeader = styled.button`
  width: 55%;
  background: linear-gradient(to right, #992836 , #761F29, #4D141B);
  border: none;
  font-family: 'Open Sans', Bold;
  text-transform: uppercase;
  letter-spacing: 0.14px;
  padding: 0.7rem;
  outline: none;
  cursor: pointer;

  @media (max-width: 1130px) {
    width: 65%;
	}

  @media (max-width: 768px) {
    width: 48%;
	}

  @media (max-width: 648px) {
    font-size: 0.8rem;
    font-weight: bold;
	}

  @media (max-width: 485px) {
    width: 85%;
    display: flex;
    justify-content: center;
	}

  a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1rem;
    font-family: 'Product Sans', Bold;
  }
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 648px) {
    position: relative;
    bottom: 1em;
	}
`;

const SliderBolinha = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${props => (props.isSelected ? '#FFFFFF' : '#FFFFFF80')};
  margin-left: 1.3rem;
  cursor: pointer;
`;


class Header extends Component {
  state = {
    menu: undefined,
    menuMobile: undefined,
    sliderHeader: 0,
    artigos: [
      {
        image: Calculadora,
        title: 'Agilidade, Confiança e Experiência!',
        paragraph: 'Escolha quem se importar com o seu negócio. Nossa medida de sucesso é ver você prosperar.',
        isBig: true,
      },
      {
        image: Domestica,
        title: 'Administração de domésticas',
        paragraph: 'Valorize o trabalho de quem cuida do seu lar.',
        name: 'Andrea Piacquadio no',
        lastName: 'Pexels',
        lastNameLink: 'https://www.pexels.com/pt-br/foto/dona-de-casa-de-meia-idade-feliz-fazendo-limpeza-em-casa-3768914/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels',
        link: 'https://www.pexels.com/pt-br/@olly?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels',

      },
      {
        image: Amigos,
        title: 'Contabilidade e Assessoria para o Terceiro Setor',
        paragraph: 'ONGs, Fundações, OSCIP, e outras entidades em fins lucrativos. A gente cuida da burocracia para vocês gerarem mais impacto social.',
        isBig: true,
        name: 'Man photo created by rawpixel.com - www.freepik.com',
        link: 'https://www.freepik.com/photos/man',
      },
    ],
    isScroll: false,
  }

  componentDidMount() {
    this.handleInterval();
    if (typeof window !== undefined) {
      window.onscroll = () => {
        if (window.scrollY > 100) {
          this.setState({
            isScroll: true,
          })
        }
        if (window.scrollY === 0) {
          this.setState({
            isScroll: false,
          })
        }
      };
    }
  }

  handleClick = () => {
    this.setState({
      menu: !this.state.menu,
      menuMobile: this.state.menuMobile,
    });
  }

  handleSlider = (item) => {
    this.setState({
      sliderHeader: item,
    })
    clearInterval(this.interval);
    this.handleInterval()
  }

  handleInterval = () => {
    this.interval = setInterval(
      this.handleTransition, 6000
    )
  }

  handleTransition = () => {
    const { sliderHeader } = this.state;

    const slide = sliderHeader === 2 ? 0 : sliderHeader + 1;

    this.handleSlider(slide)
  }


  render() {
    const { menu, sliderHeader, artigos, isScroll } = this.state;

    const positionBackground = sliderHeader === 0 && '-255px';
    const positionBackground1 = sliderHeader === 1 && '-375px';
    const positionBackground2 = sliderHeader === 2 && '-545px';
    return (
      <>
        <HeaderScroll isScroll={isScroll}>
          <ContainerHeader>
            <Logo src={logo} alt='Logo' />
            <ContainerHeaderPage
              style={{
                color: `${isScroll ? '#9E9E9E' : '#FFFFFF'}`,
                borderBottom: `1px solid ${isScroll ? '#00000029' : '#FFFFFF5C'}`,
              }}>
              <Page><b>Telefone:</b> 2232-1337</Page>
              <p><b>E-mail:</b> contato@sedimenta.com.br</p>
            </ContainerHeaderPage>
          </ContainerHeader>
          <SubContainer>
            <LogoMobile src={logo} alt='Logo' />
            <ContainerHeaderBox open={menu}>
              <BoxMenu open={menu}>
              <ImageClosed src={close} alt='closed' onClick={this.handleClick} />
                <SubContainerParagraph><a
                  style={{
                    color: `${isScroll ? '#373737' : '#FFFFFF'}`,
                  }} href="#sobre"><b>SOBRE NÓS</b></a></SubContainerParagraph>
                <SubContainerParagraph><a
                  style={{
                    color: `${isScroll ? '#373737' : '#FFFFFF'}`,
                  }} href="#services"><b>SERVIÇOS</b></a></SubContainerParagraph>
                <SubContainerParagraph><a
                  style={{
                    color: `${isScroll ? '#373737' : '#FFFFFF'}`,
                  }} href="#clientes"><b>NOSSOS CLIENTES</b></a></SubContainerParagraph>
                <SubContainerParagraph><a
                  style={{
                    color: `${isScroll ? '#373737' : '#FFFFFF'}`,
                  }} href="#blog"><b>BLOG</b></a></SubContainerParagraph>
                <ContainerHeaderMobile>
                  <ContainerHeaderPage>
                    <Page><b>Tel:</b> 2232-1337</Page>
                    <p><b>E-mail:</b> contato@sedimenta.com.br</p>
                  </ContainerHeaderPage>
                </ContainerHeaderMobile>
              </BoxMenu>
              {isScroll ?
                <MenuHamburguer src={menuHamburguerPreto} alt='Menu Hamburguer' onClick={this.handleClick} />
                :
                <MenuHamburguer src={menuHamburguer} alt='Menu Hamburguer' onClick={this.handleClick} />
              }
            </ContainerHeaderBox>
          </SubContainer>
        </HeaderScroll>
        <ContainerLogo
          image={artigos[sliderHeader].image}
          positionImg={positionBackground || positionBackground1 || positionBackground2}
          id="topo"
        >
          <span>
            <SubContainerText
              title={artigos[sliderHeader].isBig}
              isScroll={isScroll}
            >
              <Title>{artigos[sliderHeader].title}</Title>
              <ParagraphHeader paragraph={artigos[sliderHeader].isBig}>{artigos[sliderHeader].paragraph}</ParagraphHeader>
              {sliderHeader === 0 ? <ButtonHeader><a href="#services">conheça nosso serviço!</a></ButtonHeader>
                : null}
            </SubContainerText>
            <ContentParahraph right={sliderHeader === 1 && '-42px' || sliderHeader === 2 && '-92px'}>
              <ParagraphHeaderImage target="_blank" href={artigos[sliderHeader].link}>{artigos[sliderHeader].name}</ParagraphHeaderImage>
              <ParagraphHeaderImage target="_blank" href={artigos[sliderHeader].lastNameLink}>&nbsp; {artigos[sliderHeader].lastName}</ParagraphHeaderImage>
            </ContentParahraph>
            <Slider>
              <SliderBolinha isSelected={sliderHeader === 0 ? true : false} onClick={() => this.handleSlider(0)}></SliderBolinha>
              <SliderBolinha isSelected={sliderHeader === 1 ? true : false} onClick={() => this.handleSlider(1)}></SliderBolinha>
              <SliderBolinha isSelected={sliderHeader === 2 ? true : false} onClick={() => this.handleSlider(2)}></SliderBolinha>
            </Slider>
          </span>
        </ContainerLogo>
      </>
    );
  }
}

export default Header;