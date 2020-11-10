import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

//Images
import logo from '../assets/logo.svg';
import menuHamburguer from '../assets/menu.svg';
import Amigos from '../assets/amigos.jpg';
import Background from '../assets/back.png';
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

  span {
    width: 100%;
    height: 100vh;
    background: #0000005C 0% 0% no-repeat padding-box;
    padding: 0.8rem 5rem;
    opacity: 0.97;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
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
  justify-content: flex-end;
  margin-bottom: 0.8rem;
  opacity: 1;

  @media (max-width: 768px) {
    flex-direction: column;
	}

  @media (max-width: 768px) {
    font-size: 0.6rem;
	}


  p {
    font-family: 'Open Sans', Regular;
  }
`;

const ContainerHeaderPage = styled.div`
  width: 38%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #FFFFFF5C;
  opacity: 0.97;

  @media (max-width: 1024px) {
    width: 55%;
	}

  @media (max-width: 768px) {
    width: 59%;
    padding-bottom: 0.5rem;
	}

  @media (max-width: 648px) {
    width: 100%;
    justify-content: center;
	}
`;

const Page = styled.p`
  font-family: 'Open Sans', Regular;
  padding-right: 2rem;

  b {
    font-family: 'Open Sans', Semibold;
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

const SubContainerImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
	}
`;

const Logo = styled.img`
  height: 4vh;
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 648px) {
    display: none;
	}
`;

const BoxMenu = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  align-items: center;
  flex-direction: row;
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
`;

const MenuHamburguer = styled.img`
  height: 1.8vh;
  cursor: pointer;
`;

const SubContainerMobile = styled.div`
   display: none;

  @media (max-width: 648px) {
    width: 50%;
    height: 30vh;
    background: linear-gradient(to right, #992836, #4D141B);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem 0.8rem;
	}
`;

const BoxMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  div {
    width: 40vw;
    border-bottom: 1px solid #FFFFFF;
  }
`;

const SubContainerParagraphMobile = styled.p`
  display: none;

  @media (max-width: 648px) {
    display: flex;
    animation: 0.7s ease-in ${rotate};
    padding-top: 2rem;
	}

  a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 0.8rem;
    font-family: 'Arial', Bold;
  }
`;

const SubContainerText = styled.div`
  width: ${props => (props.title ? '53%' : '43%')};
  height: 70vh;
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
    font-size: 1.8rem;
	}
`;

const ParagraphHeader = styled.p`
  width: ${props => (props.paragraph ? '89%' : '99%')};
  margin: 1rem 0 1.5rem;
  font-family: 'Open Sans', Regular;
  opacity: 1;
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

  @media (max-width: 425px) {
    width: 50vw;
    display: flex;
    justify-content: center;
	}
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`;

const SliderBolinha = styled.div`
  width: 1vw;
  height: 2vh;
  border-radius: 50%;
  border: 1px solid #E0E0E0;
  background-color: #E0E0E0;
  margin-left: 1.3rem;

  &:hover {
    background-color: #FFFFFF;
  }

  @media (max-width: 648px) {
    width: 2.1vw;
    height: 2vh;
	}
`;

class Header extends Component {
  state = {
    menu: undefined,
    sliderHeader: 0,
    artigos: [
      {
        image: Calculadora,
        title: 'Agilidade, Confiança e Experiência!',
        paragraph: 'Escolha quem se importar com o seu negócio. Nossa medida de sucesso é ver você prosperar.',
      },
      {
        image: Background,
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
    const { menu, sliderHeader, artigos } = this.state;

    return (
      <ContainerLogo image={artigos[sliderHeader].image} id="topo">
        <span>
          <ContainerHeader>
            <ContainerHeaderPage>
              <Page><b>Telefone:</b> +55 (21) 2232-1337</Page>
              <p><b>E-mail:</b> contato@sedimenta.com.br</p>
            </ContainerHeaderPage>
          </ContainerHeader>
          <SubContainerPrincipal>
            <SubContainerImage>
              <Logo src={logo} alt='Logo' />
              <SubContainer>
                <BoxMenu open={menu}>
                  <SubContainerParagraph><a href="#sobre"><b>SOBRE NÓS</b></a></SubContainerParagraph>
                  <SubContainerParagraph><a href="#serviços"><b>SERVIÇOS</b></a></SubContainerParagraph>
                </BoxMenu>
                <MenuHamburguer src={menuHamburguer} alt='Menu Hamburguer' onClick={this.handleClick} />
              </SubContainer>


              <SubContainerMobile>
                <MenuHamburguer src={menuHamburguer} alt='Menu Hamburguer' onClick={this.handleClick} />
                <BoxMenuMobile open={menu}>
                  <SubContainerParagraphMobile><a href="#serviços"><b>SERVIÇOS</b></a></SubContainerParagraphMobile>
                  <div></div>
                  <SubContainerParagraphMobile><a href="#sobre"><b>SOBRE NÓS</b></a></SubContainerParagraphMobile>
                </BoxMenuMobile>
              </SubContainerMobile>


            </SubContainerImage>
            <SubContainerText title={artigos[sliderHeader].isBig}>
              <Title>{artigos[sliderHeader].title}</Title>
              <ParagraphHeader paragraph={artigos[sliderHeader].isBig}>{artigos[sliderHeader].paragraph}</ParagraphHeader>
              {sliderHeader === 0 ? <ButtonHeader id="sobre">conheça nosso serviço!</ButtonHeader>
                : null}
            </SubContainerText>
          </SubContainerPrincipal>
          <Slider>
            <SliderBolinha onClick={() => this.handleSlider(0)}></SliderBolinha>
            <SliderBolinha onClick={() => this.handleSlider(1)}></SliderBolinha>
            <SliderBolinha onClick={() => this.handleSlider(2)}></SliderBolinha>
          </Slider>
        </span>
      </ContainerLogo>
    );
  }
}

export default Header;