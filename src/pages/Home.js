// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from '../components/Slider';
import Formulation from '../components/Formulario';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

//Images
import seta from '../assets/seta.svg';
import Icon from '../assets/icon.svg';
import Fundo from '../assets/fundo.svg';

import People1 from '../assets/image1.png';
import People2 from '../assets/image2.png';
import People3 from '../assets/image3.png';

import BatePapo from '../assets/batepapo.jpg';
import Buque from '../assets/buque.jpg';
import Farol from '../assets/farol.jpg';
import Cama from '../assets/cama.jpg';
import Crianca from '../assets/crianca.jpg';
import Flor from '../assets/flor.jpg';

import balao from '../assets/balao.svg';
import setinha from '../assets/setinha.svg';


const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #F5F5F5;
`;

const ContentCaixaGeral = styled.div`
  width: 93%;
  height: 25vh;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  bottom: 70px;

  @media (max-width: 768px) {
    width: 95%;
    height: 50vh;
    flex-direction: column;
    bottom: 60px;
	}

  @media (max-width: 648px) {
    height: 90vh;
	}

  @media (max-width: 425px) {
    height: 100vh;
	}
`;

const ContentCaixaBox = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1024px) {
    align-items: center;
	}

  @media (max-width: 768px) {
    width: 75%;
    flex-wrap: wrap;
	}

  @media (max-width: 648px) {
    flex-direction: column;
	}
`;

const Content = styled.div`
  width: 18vw;
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    width: 22vw;
	}

  @media (max-width: 768px) {
    width: 40vw;
    padding: 1rem 0;
    flex-direction: column;
	}
`;

const TitleHeader = styled.h2`
  width: 15vw;
  color: #373737;
  font-size: 1.2rem;
  font-family: 'Product Sans', Bold;
  margin-left: 3rem;

  
  @media (max-width: 1024px) {
    margin-left: 1rem;
	}

  @media (max-width: 768px) {
    width: 40vw;
    text-align: center;
    padding-bottom: 1rem;
    margin-left: 0;
	}
`;

const ImageSeta = styled.img`
  @media (max-width: 768px) {
    transform: rotate(90deg);
	}
`;

const CaixaParagraph = styled.p`
  width: ${props => (props.width)};
  color: #373737;
  font-weight: bold;
  font-family: 'Product Sans', Bold;
  padding: 0 2.5rem 0 0;

  b {
    color: #000000;
  }

  @media (max-width: 1024px) {
    width: ${props => (props.widthMobile)};
    padding: 0 2rem 0 0;
	}

  @media (max-width: 768px) {
    width: 35vw;
    padding: ${props => (props.paddingMobile)};
	}

  @media (max-width: 648px) {
    width: 47vw;
    padding: 3rem 0 0;
	}
`;

const ContentSobre = styled.div`
  width: 100%;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0 3rem;
	}

  @media (max-width: 648px) {
    padding: 0;
	}

  span {
    width: 95%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 100%;
    } 

    @media (max-width: 648px) {
      align-items: center;
      flex-direction: column;
	  }
  }
`;

const ContentSobreTitle = styled.div`
  width: 11vw;
  color: #373737;
  font-size: 1.5rem;
  font-family: 'Product Sans', Bold;

  @media (max-width: 1024px) {
    width: 20vw;
	}

  @media (max-width: 648px) {
    /* width: 45vw; */
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 3rem;
	}

  hr {
    width: 4vw;
    border: 1px solid #707070;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      width: 8vw;
    }

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }

    @media (max-width: 648px) {
      width: 10vw;
    }    
  }
`;

const ContentSobreText = styled.div`
  width: 50%;
  margin-top: 2.4rem;

  @media (max-width: 768px) {
    width: 65%;
    margin-top: 0;
	}
  @media (max-width: 648px) {
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
	}
`;

const ContainerParagraph = styled.p`
  color: #373737;
  font-size: 0.9rem;
  font-family: 'Open Sans', Regular;
  padding-bottom: 1.4rem;
`;

const ContentCargo = styled.div`
  width: 100%;
  margin: 7rem 0 5rem 0;
  padding-left: 10rem;

  @media (max-width: 1024px) {
    padding-left: 3rem;
	}

  @media (max-width: 648px) {
    width: 100%;
    padding: 0;
	}
`;

const SessionCargo = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 648px) {
    width: 90%;
    height: 65vh;
    margin-right: 2rem;
	}
`;

const Cargo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 648px) {
    width: 100%;
    padding-left: 2rem;
    flex-direction: row;
    overflow-x: scroll;
    justify-content: flex-start;
	}
`;

const ImageCargo = styled.img`
  width: 65%;
  box-shadow: 0px 3px 6px #00000029;
  object-fit: cover;
  object-position: top;

  @media (max-width: 1024px) {
    width: 85%;
	}

  @media (max-width: 648px) {
    width: 250px;
    height: 39vh;
	}
`;

const ContentCargoCaixa = styled.div`
  width: 65%;
  height: 25vh;
  background-color: #FFFFFF;
  border-left: 5px solid #801422;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-shadow: 0px 3px 6px #00000029;

  @media (max-width: 1024px) {
    width: 85%;
	}

  @media (max-width: 648px) {
    width: 100%;
	}

  hr {
    width: 3vw;
    border: 1px solid #00000029;
    margin-bottom: 1rem;
    opacity: 1;
  }

  img {
    margin-top: 0.5rem;
  }
`;

const ContentBoxTitle = styled.p`
  color: #373737;
  font-size: 1.125rem;
  font-family: 'Arial', Bold;
  font-weight: bold;
`;

const ContentBoxParagraph = styled.p`
  color: #373737;
  font-size: 0.6875rem;
  font-family: 'Arial', Bold;
  font-weight: bold;
`;

const BoxImage = styled.img`
  width: 13%;
  margin-left: 0.3rem;
`;

const SubContent = styled.div`
  width: 100%;
  background-image: url(${Fundo});
  background-size: cover;
  background-repeat: no-repeat;

  div {
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      height: 60vh;
	  }

    @media (max-width: 648px) {
      height: 78vh;
	  }
  }
`;

const SubContentMeio = styled.span`
  width: 35%;
  height: 40vh;
  background-color: #373737;
  color: #FFFFFF;
  font-family: 'Open Sans', Bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem 1.5rem;

  @media (max-width: 768px) {
    width: 53%;
	}

  @media (max-width: 648px) {
    width: 60%;
    height: 55vh;
    padding: 0 3rem 1.5rem;
	}

  @media (max-width: 425px) {
    width: 90%;
    padding: 0 1rem 1.5rem;
	}

  hr {
    width: 5vw;
    border: 1px solid #FFFFFF;
    opacity: 1;

    @media (max-width: 768px) {
      width: 12vw;
	  }

    @media (max-width: 648px) {
      width: 25vw;
	  }
  }

  h2 {
    padding-top: 2.5rem;
    font-size: 1.7rem;
    text-align: center;

    @media (max-width: 648px) {
      font-size: 1.5rem;
	  }
  }

  b {
    font-size: 1.9rem;
  }
`;

const ContainerCaixa = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 648px) {
    width: 100%;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
	}
`;

const Caixa = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 648px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 4rem;
    overflow-x: scroll;
  } 
`;

const CaixaBox = styled.div`
  width: 22%;
  display: flex;
  background-color: #992836;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 3px 6px #00000029;

  @media (max-width: 768px) {
    width: 30%;
	}

  @media (max-width: 648px) {
    width: 40%;
    margin-right: 4rem;
	}

  @media (max-width: 425px) {
    width: 80%;
	}
`;

const CaixaBoxHeader = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
`;

const Slider = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 648px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    cursor: pointer;
	}

  @media (max-width: 425px) {
    width: 80%;
	}
`;

const SliderBolinha = styled.div`
  width: 2.1vw;
  height: 2vh;
  border-radius: 50%;
  border: 1px solid #37373759;
  background-color: #37373759;
  margin-left: 1rem;

  &:hover {
    background-color: #373737;
  }
`;

const ImageBox = styled.img`
  width: 14vw;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 23vw;
	}

  @media (max-width: 648px) {
    width: 35vw;
	}

  @media (max-width: 425px) {
    width: 50vw;
	}
`;

const BoxDate = styled.div`
  color: #373737;
  font-size: 0.7rem;
  font-family: 'Open Sans', Regular;
  margin-bottom: 0.3rem;
`;

const TitleBox = styled.p`
  color: #373737;
  font-size: 1rem;
  font-family: 'Open Sans', ExtraBold;
  font-weight: bolder;
  margin-bottom: 1rem;
`;

const CaixaBoxSobre = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;

  hr {
    width: 3vw;
    border: 1px solid #a76b73;
    opacity: 1;
  }
`;

const CaixaSaiba = styled.p`
  color: #992836;
  font-size: 0.7rem;
  font-family: 'Open Sans', Regular;
`;

const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  hr {
    width: 25%;
    border: 1px solid #707070;
    margin-left: 6rem;
  }
`;

const ContentLogoImages = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  img {
    @media (max-width: 648px) {
      width: 45%;
    }
  }
`;

class Home extends Component {
  state = {
  }

  handleText = () => {
    this.setState({
      text: this.state.text,
    })
  }

  render() {
    return (
      <Container>
        <Header />
        <ContentCaixaGeral>
          <Content>
            <TitleHeader>PORQUE NOS ESCOLHER</TitleHeader>
            <ImageSeta src={seta} alt='seta' />
          </Content>
          <ContentCaixaBox>
            <CaixaParagraph width='14vw' paddingMobile='2rem 4rem 0 0'>Prestar um atendimento eficiente é a nossa <b>meta!</b></CaixaParagraph>
            <CaixaParagraph width='17vw' widthMobile='19vw' paddingMobile='2rem 0 0 0'>Fazemos terceirização! Diminua seu custo e
              tenha mais tempo para o seu negócio</CaixaParagraph>
            <CaixaParagraph width='16.2vw' paddingMobile='2rem 4rem 0 0'>Oferecemos uma ótima assessoria de planejamento
              para ajudar a por em pratica uma ótima ideia.</CaixaParagraph>
            <CaixaParagraph width='17vw' widthMobile='21vw' paddingMobile='2rem 0 0 0'>Nossos colaboradores são capacitados a apresentar
              candidatos com o perfil profissional de sua preferencia.</CaixaParagraph>
          </ContentCaixaBox>
        </ContentCaixaGeral>
        <ContentSobre id='sobre'>
          <span>
            <ContentSobreTitle>
              <hr></hr>
              <h3>SOBRE A EMPRESA</h3>
            </ContentSobreTitle>
            <ContentSobreText>
              <ContainerParagraph><b>Sedimenta JPM</b> é uma empresa de Contabilidade que se concentra em
              ajudar pequenas e médias empresas a atingir seus objetivos de
              negócios.</ContainerParagraph>
              <ContainerParagraph>Quer seja uma empresa de médio porte, um(a)
              especialista que pretende lançar a sua ideia no mercado ou numa
              Iniciativa Social – Terceiro Setor -, ou um(a) empresário(a)
              que pretende abrir ou expandir um negócio, estaremos ao seu lado
              para ajudar em cada etapa do seu percurso. Oferecemos serviços de
              Contabilidade, Departamento Pessoal, Impostos, Tributação de Pessoa
              Física e Finanças que permitem que você se concentre no
              crescimento de seus negócios - enquanto cuidamos de todo o trabalho
              de Contabilidade. </ContainerParagraph>
              <ContainerParagraph>​Com mais de 10 anos de experiência no mercado aliada
              ao conhecimento de nossos sócios e colaboradores trabalhando em algumas
              das maiores empresas líderes do país e do mundo, atendemos nossos clientes
              com o mais alto nível de profissionalismo, honestidade e integridade em tudo
              o que fazemos. Somos profissionais apaixonados que procuram proporcionar uma
              experiência de maior proximidade e interação com nossos clientes -
              colocando-os sempre em primeiro lugar. Abraçamos a inovação e buscamos
              oportunidades de criar valor para o seu negócio.</ContainerParagraph>
              <ContainerParagraph>​Estamos sediados no bairro da
              Lapa, na cidade do Rio de Janeiro - Brasil, com escritório em Almada - Portugal,
              e também atendemos clientes internacionais fora do Brasil.</ContainerParagraph>
              <ContainerParagraph><b>A Sedimenta JPM </b>
              está ansiosa para ser sua parceira!</ContainerParagraph>
            </ContentSobreText>
          </span>
        </ContentSobre>
        <ContentCargo>
          <Cargo>
            <SessionCargo>
              <ImageCargo src={People1} alt='people' />
              <ContentCargoCaixa>
                <hr></hr>
                <ContentBoxTitle>Eduardo Pereira</ContentBoxTitle>
                <ContentBoxParagraph>CEO</ContentBoxParagraph>
                <ContentBoxParagraph>Responsável pelas áreas Contábil e Fiscal</ContentBoxParagraph>
                <img src={Icon} alt='linkedin' />
              </ContentCargoCaixa>
            </SessionCargo>
            <SessionCargo>
              <ImageCargo src={People2} alt='people' />
              <ContentCargoCaixa>
                <hr></hr>
                <ContentBoxTitle>Christiani Nascimento</ContentBoxTitle>
                <ContentBoxParagraph>CEO</ContentBoxParagraph>
                <ContentBoxParagraph>Resp. pela Legalização de Empresas, Parafiscal;</ContentBoxParagraph>
                <img src={Icon} alt='linkedin' />
              </ContentCargoCaixa>
            </SessionCargo>
            <SessionCargo>
              <ImageCargo src={People3} alt='people' />
              <ContentCargoCaixa>
                <hr></hr>
                <ContentBoxTitle>Mauro Moura</ContentBoxTitle>
                <ContentBoxParagraph>CEO</ContentBoxParagraph>
                <ContentBoxParagraph>responsável pelo Capital Humano</ContentBoxParagraph>
                <img src={Icon} alt='linkedin' />
              </ContentCargoCaixa>
            </SessionCargo>
          </Cargo>
          <Slider>
            <SliderBolinha></SliderBolinha>
            <SliderBolinha></SliderBolinha>
            <SliderBolinha></SliderBolinha>
          </Slider>
        </ContentCargo>
        <Services />
        <Carousel />
        <ContentLogo>
          <ContentLogoImages>
            <img src={BatePapo} alt='' />
            <img src={Buque} alt='' />
            <img src={Farol} alt='' />
            <img src={Cama} alt='' />
            <img src={Crianca} alt='' />
            <img src={Flor} alt='' />
          </ContentLogoImages>
        </ContentLogo>
        <SubContent>
          <div>
            <SubContentMeio>
              <hr></hr>
              <h2>fique por dentro do que acontece no nosso <b>medium</b></h2>
            </SubContentMeio>
          </div>
        </SubContent>
        <ContainerCaixa>
          <Caixa>
            <CaixaBox>
              <ImageBox src={balao} alt='figure' />
              <CaixaBoxHeader>
                <BoxDate>Sep 28 2020</BoxDate>
                <TitleBox>Lorem ipsum dolor sit amet.</TitleBox>
                <CaixaBoxSobre>
                  <hr></hr>
                  <CaixaSaiba>saiba mais <BoxImage src={setinha} /></CaixaSaiba>
                </CaixaBoxSobre>
              </CaixaBoxHeader>
            </CaixaBox>
            <CaixaBox>
              <ImageBox src={balao} alt='figure' />
              <CaixaBoxHeader>
                <BoxDate>Sep 28 2020</BoxDate>
                <TitleBox>Lorem ipsum dolor sit amet.</TitleBox>
                <CaixaBoxSobre>
                  <hr></hr>
                  <CaixaSaiba>saiba mais <BoxImage src={setinha} /></CaixaSaiba>
                </CaixaBoxSobre>
              </CaixaBoxHeader>
            </CaixaBox>
            <CaixaBox>
              <ImageBox src={balao} alt='figure' />
              <CaixaBoxHeader>
                <BoxDate>Sep 28 2020</BoxDate>
                <TitleBox>Lorem ipsum dolor sit amet.</TitleBox>
                <CaixaBoxSobre>
                  <hr></hr>
                  <CaixaSaiba>saiba mais <BoxImage src={setinha} /></CaixaSaiba>
                </CaixaBoxSobre>
              </CaixaBoxHeader>
            </CaixaBox>
          </Caixa>
          <Slider>
            <SliderBolinha></SliderBolinha>
            <SliderBolinha></SliderBolinha>
            <SliderBolinha></SliderBolinha>
          </Slider>
        </ContainerCaixa>
        <Formulation />
        <Footer />
      </Container >
    )
  }
}

export default Home;