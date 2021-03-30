import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Carousel from 'nuka-carousel';

//Images
import logo from '../assets/logoSedimenta.svg';
import menuHamburguer from '../assets/menu.svg';
import menuHamburguerPreto from '../assets/menuPreto.svg';
import closed from '../assets/close.svg';
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
  display: ${props => (props.desktop ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;


  .slider-control-centerleft {
    display: none !important;
  }

  .slider-control-centerright {
    display: none !important;
  }

  .slider-control-bottomcenter {
    bottom: 120px !important;
  }

  .paging-item {
    padding-right: 1rem;
  }

  button {
    outline: none;
    fill: #FFFFFF !important;

  }
  
  @media (max-width: 768px) {
    flex-direction: column;
	}

  @media (max-width: 648px) {
    display: ${props => (props.desktop ? 'none' : 'flex')};
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
      padding: 0.5rem;
      height: 95vh;
    }
  }
`;

const HeaderScroll = styled.div`
  width: 100%;
  height: 3.79rem;
  background-color: ${props => (props.isScroll ? '#FFFFFF' : 'transparent')};
  box-shadow: ${props => (props.isScroll && '0px 3px 6px #00000029')};
  padding: 0 1.5rem;
  transition: all 0.5s;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  @media (max-width: 768px) {
    padding: 0 1rem 0.4rem;
	}

  @media (max-width: 648px) {
    height: 3rem;
    padding: 0 0.6rem 0.4rem;
    /* background-color: #FFFFFF; */
    box-shadow: none;
    /* position: absolute; */
	}
`;

const ContainerHeader = styled.div`
  width: 100%;
  height: 1.5rem;
  color: #FFFFFF;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.785rem;
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

const ContainerImage = styled.div`
  height: 3.79rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerHeaderPage = styled.div`
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
    width: 100%;
    border-top: 1px solid #FFFFFF99;
    font-size: 0.75rem;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    position: absolute;
    bottom: 0;
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
    width: 100%;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', Regular;
	}
`;

const Logo = styled.img`
  height: 8.4vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
    height: 100%;
    background: ${props => (props.open && 'linear-gradient(to right, #982626, #4D141B)')};
    justify-content: flex-end;
    flex-direction: column-reverse;
    padding: 1rem 0 0 0;
    opacity: 1;
    position: ${props => (props.open ? 'fixed' : 'absolute')};
    right: 0;
    top: 0;
	}
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 648px) {
    justify-content: flex-start;
	}
`;

const BoxMenu = styled.div`
  color: ${props => (props.isScroll ? '#373737' : '#FFFFFF')};
  display: flex;
  /* display: ${props => (props.open ? 'flex' : 'none')}; */
  align-items: center;
  flex-direction: row;

  @media (max-width: 648px) {
    width: 100%;
    height: 75%;
    display: ${props => (props.open ? 'flex' : 'none')};
    align-items: center;
    flex-direction: column;
    justify-content: center;
	}
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 648px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const rotate = keyframes`
  from { opacity: 0 }
  to { opacity: 1; }
  fade-in { opacity: 1; }
`;

const SubContainerParagraph = styled.p`
  padding-left: 2rem;
  animation: 0.7s ease-in ${rotate};

  a {
    color: ${props => (props.isScroll ? '#373737' : '#FFFFFF')};
    font-size: 0.75rem;
    font-family: 'Spartan', SemiBold;
    font-weight: bold;
    text-decoration: none;

    @media (max-width: 648px) {
      color: #FFFFFF !important;
      font-size: 1rem;
	  }
  }

  @media (max-width: 648px) {
    margin-right: 0;
    padding-top: 4rem;
    padding-left: 0;
	}
`;

// const MenuHamburguer = styled.img`
//   height: 13px;
//   display: ${props => (props.isClosed ? 'none' : 'flex')};
//   cursor: pointer;


//   @media (max-width: 648px) {
//     display: none;
//     align-self: end;
//     padding-left: 1rem;
// 	}
// `;

const MenuHamburguerMobile = styled.img`
  height: 12px;
  display: none;
  cursor: pointer;

  @media (max-width: 648px) {
    height: ${props => (props.height && '18px')};
    /* display: flex; */
    display: ${props => (props.isClosed ? 'none' : 'flex')};
    align-self: flex-end;
    padding-right: 1rem;
  }
`;

const SubContainerText = styled.div`
  width: ${props => (props.title ? '59%' : '45%')};
  height: 73.5vh;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding: 8% 4rem;
  margin-top: 4rem;

  @media (max-width: 1023px) {
    width: 70%;
	}

  @media (max-width: 648px) {
    width: 100%;
    /* height: 100vh; */
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0;
    /* padding: 25% 0; */
	}
`;

const Title = styled.h1`
  font-size: 2.625rem;
  font-family: 'Spartan', Bold;
  
  @media (max-width: 768px) {
    width: 95%;
	}
`;

const ParagraphHeader = styled.p`
  width: ${props => (props.paragraph ? '89%' : '99%')};
  font-family: 'Open Sans', Regular;
  font-size: 1.125rem;
  margin: 0.5rem 0 2rem;
  opacity: 1;

  @media (max-width: 648px) {
    width: 93%;
	}
`;

const ContentParahraph = styled.div`
  display: flex;
  font-family: 'Open Sans', Regular;
  font-size: 0.5rem;
  transform: rotate(270deg);
  position: absolute;
  top: 300px;
  right: ${props => (props.right)};
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
  width: 45%;
  background: linear-gradient(to right, #992836 , #761F29, #4D141B);
  border: none;
  border-radius: 2px;
  letter-spacing: 0.14px;
  padding: 1.1rem;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  @media (max-width: 1130px) {
    width: 55%;
	}

  @media (max-width: 648px) {
    font-weight: bold;
    padding: 1.3rem 0 1rem;

    margin-top: 3rem;
	}

  @media (max-width: 485px) {
    width: 78%;
    display: flex;
    justify-content: center;
    margin-top: 1.2rem;
	}

  a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 0.75rem;
    font-family: 'Spartan', 'SemiBold';
    font-weight: 600;
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
    bottom: 2.3em;
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
    // this.interval = setInterval(
    //   this.handleTransition, 6000
    // )
  }

  handleTransition = () => {
    const { sliderHeader } = this.state;

    const slide = sliderHeader === 2 ? 0 : sliderHeader + 1;

    this.handleSlider(slide)
  }

  renderCarousselMobile = () => {
    const { isScroll, sliderHeader } = this.state;

    const positionBackground = sliderHeader === 0 && '-255px';
    const positionBackground1 = sliderHeader === 1 && '-375px';
    const positionBackground2 = sliderHeader === 2 && '-545px';

    return (
      <ContainerLogo>
        <Carousel
          enableKeyboardControls='true'
        >
          {this.state.artigos.map((item, index) => (
            <ContainerLogo
              mobile
              image={item.image}
              positionImg={positionBackground || positionBackground1 || positionBackground2}
              id="topo"
            >
              <span>
                <SubContainerText
                  title={item.title}
                  isScroll={isScroll}
                >
                  <Title>{item.title}</Title>
                  <ParagraphHeader paragraph={item}>{item.paragraph}</ParagraphHeader>
                  {index === 0 ? <ButtonHeader><a href="#services">conheça nossos serviços!</a></ButtonHeader>
                    : null}
                </SubContainerText>
                <ContentParahraph right={(index === 1 && '-42px') || (index === 2 && '-92px')}>
                  <ParagraphHeaderImage target="_blank" href={item.link}>{item.name}</ParagraphHeaderImage>
                  <ParagraphHeaderImage target="_blank" href={item.lastNameLink}>&nbsp; {item.lastName}</ParagraphHeaderImage>
                </ContentParahraph>
              </span>
            </ContainerLogo>
          ))}
        </Carousel>
      </ContainerLogo>

    )
  }


  render() {
    const { menu, sliderHeader, artigos, isScroll } = this.state;

    const isMenu = menu ? closed : isScroll ? menuHamburguerPreto : menuHamburguer;
// se menu for true renderiza X se for scroll renderiza  menu preto ou menu branco
    return (
      <>
        <HeaderScroll isScroll={isScroll}>
          <ContainerHeader>
            <ContainerImage>
              <Logo src={logo} alt='Logo' />
            </ContainerImage>
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
                <Box>
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
                </Box>
                <ContainerHeaderMobile>
                  <ContainerHeaderPage>
                    <Page><b>Tel:</b> 2232-1337</Page>
                    <p><b>E-mail:</b> contato@sedimenta.com.br</p>
                  </ContainerHeaderPage>
                </ContainerHeaderMobile>
              </BoxMenu>
              {/* <MenuHamburguer src={isScroll ? menuHamburguerPreto : menuHamburguer} alt='Menu Hamburguer' onClick={this.handleClick} /> */}
              {/* <MenuHamburguerMobile height={menu} isClosed={menu && closed} src={menu ? closed : menuHamburguer} alt='Menu Hamburguer' onClick={this.handleClick} /> */}
              
              {/* <MenuHamburguerMobile height={menu} isClosed={menu && closed} src={isScroll ? menuHamburguerPreto : menuHamburguer} alt='Menu Hamburguer' onClick={this.handleClick} /> */}
              <MenuHamburguerMobile height={menu} src={isMenu} alt='Menu Hamburguer' onClick={this.handleClick} />
            </ContainerHeaderBox>
          </SubContainer>
        </HeaderScroll>
        {this.renderCarousselMobile()}
        <ContainerLogo
          desktop
          image={artigos[sliderHeader].image}
          // positionImg={positionBackground || positionBackground1 || positionBackground2}
          id="topo"
        >
          <span>
            <SubContainerText
              title={artigos[sliderHeader].isBig}
              isScroll={isScroll}
            >
              <Title>{artigos[sliderHeader].title}</Title>
              <ParagraphHeader paragraph={artigos[sliderHeader].isBig}>{artigos[sliderHeader].paragraph}</ParagraphHeader>
              {sliderHeader === 0 ? <ButtonHeader><a href="#services">conheça nossos serviços!</a></ButtonHeader>
                : null}
            </SubContainerText>
            <ContentParahraph right={(sliderHeader === 1 && '-42px') || (sliderHeader === 2 && '-92px')}>
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