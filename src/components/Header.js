import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

//Images
import logo from '../assets/logoSedimenta.svg';
import menuHamburguer from '../assets/menu.svg';
import Amigos from '../assets/amigos.jpg';
import Domestica from '../assets/domestica.png';
import Calculadora from '../assets/calculadora.jpg';

const ContainerLogo = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
	}

  @media (max-width: 648px) {
    background-position-x: ${props => (props.positionImg)};
	}

  span {
    width: 100%;
    height: 100vh;
    background: #0000005C 0% 0% no-repeat padding-box;
    padding: 0.8rem 4rem;
    opacity: 0.97;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
	}

  @media (max-width: 648px) {
    padding: 0.5rem 1rem;
	}
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
  margin-bottom: 0.8rem;
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
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #FFFFFF5C;
  opacity: 0.97;

  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
	}

  @media (max-width: 648px) {
    font-size: 0.7rem;
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
	}

  @media (max-width: 425px) {
    padding-right: 2rem;
	}
`;

const ContainerHeaderMobile = styled.div`
  display: none;

  @media (max-width: 648px) {
    display: flex;
    align-items: center;
    justify-content: center;
	}
`;

const SubContainerPrincipal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
	}
`;

const Logo = styled.img`
  height: 10vh;

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
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 450px) {
    width: 100vw;
    height: 55vh;
    background: ${props => (props.open && 'linear-gradient(to right, #992836, #4D141B)')};
    justify-content: flex-end;
    flex-direction: column-reverse;
    padding: 3.5rem 1rem 0 0;
    position: absolute;
    right: 0;
    top: 0;
	}
`;

const SubContainer = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: center;

  @media (max-width: 648px) {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
	}
`;

const BoxMenu = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  align-items: center;
  flex-direction: row;

  @media (max-width: 450px) {
    width: 100%;
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column-reverse;
    align-items: flex-end;
    padding-top: 2rem;
	}
`;

const rotate = keyframes`
  from { opacity: 0 }
  to { opacity: 1; }
  fade-in { opacity: 1; }
`;

const SubContainerParagraph = styled.p`
  margin-right: 2.5rem;
  animation: 0.7s ease-in ${rotate};

  a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 0.8rem;
    font-family: 'Arial', Bold;
  }

  @media (max-width: 470px) {
    margin-right: 2rem;
	}

  @media (max-width: 450px) {
    margin-right: 0;
	}
`;

const ContainerLinha = styled.div`
  display: none;

  @media (max-width: 450px) {
    width: 95%;
    height: 1px;
    display: flex;
    background-color: #FFFFFF;
    margin: 1rem 0;
	}
`;

const MenuHamburguer = styled.img`
  height: 2vh;
  cursor: pointer;

  @media (max-width: 450px) {
    align-self: flex-end;
	}
`;

const SubContainerText = styled.div`
  width: ${props => (props.title ? '53%' : '40%')};
  height: 68vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 70%;
	}

  @media (max-width: 648px) {
    width: 90%;
    text-align: center;
    align-items: center;
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

const ButtonHeader = styled.button`
  width: 20vw;
  background: linear-gradient(to right, #992836 , #761F29, #4D141B);
  border: none;
  color: #FFFFFF;
  font-size: 1rem;
  font-family: 'Product Sans', Bold;
  text-transform: uppercase;
  padding: 0.7rem;
  outline: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 24vw;
	}

  @media (max-width: 768px) {
    width: 33vw;
	}

  @media (max-width: 648px) {
    width: 40vw;
    font-size: 0.8rem;
    font-weight: bold;
	}

  @media (max-width: 485px) {
    width: 46vw;
	}

  @media (max-width: 450px) {
    width: 55vw;
    display: flex;
    justify-content: center;
	}
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 450px) {
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
    selectedHeader: '0',
    artigos: [
      {
        image: Calculadora,
        title: 'Agilidade, Confiança e Experiência!',
        paragraph: 'Escolha quem se importar com o seu negócio. Nossa medida de sucesso é ver você prosperar.',
      },
      {
        image: Domestica,
        title: 'Administração de domesticas',
        paragraph: 'Valorize o trabalho de quem cuida do seu lar.',

      },
      {
        image: Amigos,
        title: 'Contabilidade e Assessoria para o Terceiro Setor',
        paragraph: 'ONGs, Fundações, OSCIP, e outras entidades em fins lucrativos. A gente cuida da burocracia para vocês gerarem mais impacto social.',
        isBig: true,
      },
    ]
  }

  componentDidMount() {
    this.handleInterval()
  }

  handleClick = () => {
    this.setState({
      menu: !this.state.menu,
      menuMobile: this.state.menuMobile,
    });
  }

  handleSlider = (item, slider) => {
    this.setState({
      sliderHeader: item,
      selectedHeader: slider,
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
    const { menu, sliderHeader, selectedHeader, artigos } = this.state;

    const positionBackground = sliderHeader === 0 && '-255px';
    const positionBackground1 = sliderHeader === 1 && '-375px';
    const positionBackground2 = sliderHeader === 2 && '-545px';

    console.log(sliderHeader)

    return (
      <ContainerLogo image={artigos[sliderHeader].image}
        positionImg={positionBackground || positionBackground1 || positionBackground2} id="topo">
        <span>
          <ContainerHeader>
            <Logo src={logo} alt='Logo' />
            <ContainerHeaderPage>
              <Page><b>Telefone:</b> 2232-1337</Page>
              <p><b>E-mail:</b> contato@sedimenta.com.br</p>
            </ContainerHeaderPage>
          </ContainerHeader>
          <ContainerHeaderMobile>
            <ContainerHeaderPage>
              <Page><b>Tel:</b> 2232-1337</Page>
              <p><b>E-mail:</b> contato@sedimenta.com.br</p>
            </ContainerHeaderPage>
          </ContainerHeaderMobile>
          <SubContainerPrincipal>
            <SubContainer>
              <LogoMobile src={logo} alt='Logo' />
              <ContainerHeaderBox open={menu}>
                <BoxMenu open={menu}>
                  <SubContainerParagraph><a href="#sobre"><b>SOBRE NÓS</b></a></SubContainerParagraph>
                  <ContainerLinha></ContainerLinha>
                  <SubContainerParagraph><a href="#serviços"><b>SERVIÇOS</b></a></SubContainerParagraph>
                </BoxMenu>
                <MenuHamburguer src={menuHamburguer} alt='Menu Hamburguer' onClick={this.handleClick} />
              </ContainerHeaderBox>
            </SubContainer>
            <SubContainerText title={artigos[sliderHeader].isBig}>
              <Title>{artigos[sliderHeader].title}</Title>
              <ParagraphHeader paragraph={artigos[sliderHeader].isBig}>{artigos[sliderHeader].paragraph}</ParagraphHeader>
              {sliderHeader === 0 ? <ButtonHeader id='sobre'>conheça nosso serviço!</ButtonHeader>
                : null}
            </SubContainerText>
          </SubContainerPrincipal>
          <Slider>
            <SliderBolinha isSelected={selectedHeader === '0' ? true : false} onClick={() => this.handleSlider(0, '0')}></SliderBolinha>
            <SliderBolinha isSelected={selectedHeader === '1' ? true : false} onClick={() => this.handleSlider(1, '1')}></SliderBolinha>
            <SliderBolinha isSelected={selectedHeader === '2' ? true : false} onClick={() => this.handleSlider(2, '2')}></SliderBolinha>
          </Slider>
        </span>
      </ContainerLogo>
    );
  }
}

export default Header;