import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

//Images
import logo from '../assets/logo.svg';
import menuHamburguer from '../assets/menu.svg';
import Aperto from '../assets/aperto.jpg';
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

  /* @media (max-width: 648px) {
    display: none;
	} */

  span {
    width: 100%;
    height: 100vh;
    background: #0000005C 0% 0% no-repeat padding-box;
    padding: 0.8rem 5rem;
    opacity: 0.97;

  /* @media (max-width: 648px) {
    background: none; 
	} */
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
`;

const SubContainerImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 4vh;
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
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

const SubContainerText = styled.div`
  width: ${props => (props.title ? '53%' : '43%')};
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Product Sans', Bold;
`;

const ParagraphHeader = styled.p`
  width: ${props => (props.paragraph ? '83%' : '100%')};
  margin-top: 1.4rem;
  font-family: 'Open Sans', Regular;
  opacity: 1;
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
  margin-left: 1rem;

  &:hover {
    background-color: #FFFFFF;
  }
`;

class Header extends Component {
  state = {
    menu: undefined,
    sliderHeader: 0,
    artigos: [ 
      {
        image: Aperto,
        title: 'Agilidade, Confiança e Experiência',
        paragraph: 'Escolha quem se importar com o seu negócio. Nossa medida de sucesso é ver você prosperar.',
      },
      { 
        image: Background,
        title: 'Administração de domesticas',
        paragraph: 'Valorize o trabalho de quem cuida do seu lar.',

      },
      { 
        image: Calculadora,
        title: 'Contabilidade e Assessoria para o Terceiro Setor',
        paragraph: 'ONGs, Fundações, OSCIP, e outras entidades em fins lucrativos. A gente cuida da burocracia para vocês gerarem mais impacto social.',
        isBig: true,
      },
    ]
  }

  handleClick = () => {
    this.setState({
      menu: !this.state.menu,
    });
  }

  handleSlider = (item) => {
    console.log(item);
    this.setState({
      sliderHeader: item,
    })
  }

  render() {
    const { menu, sliderHeader, artigos } = this.state;

    return (
      <ContainerLogo image={artigos[sliderHeader].image}>
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
            </SubContainerImage>
            <SubContainerText title={artigos[sliderHeader].isBig}>
              <Title>{artigos[sliderHeader].title}</Title>
              <ParagraphHeader paragraph={artigos[sliderHeader].isBig}>{artigos[sliderHeader].paragraph}</ParagraphHeader>
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