// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//Components
import Carousel from '../components/Slider';
import Formulation from '../components/Formulario';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

//Images
import seta from '../assets/seta.svg';
import Icon from '../assets/icon.svg';
import Fundo from '../assets/fundo.svg';

import People1 from '../assets/Eduardo.png';
import People2 from '../assets/Christiani.png';
import People3 from '../assets/Mauro.png';

import Velatura from '../assets/velaturaLogo.png';
import ChooseMed from '../assets/chooseMedLogo.png';
import AndreLuiz from '../assets/andreLuizLogo.png';
import FichaCerta from '../assets/fichaCertaLogo.png';
import FitaArquitetura from '../assets/fitaArquiteturaLogo.png';
import SabendoMais from '../assets/sabendoMaisLogo.png';

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
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 3rem 0;
  position: relative;
  bottom: 85px;
  box-shadow: 0px 3px 6px #00000029;

  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    bottom: 60px;
	}

  @media (max-width: 648px) {
    width: 90%;
    padding: 1.5rem 0;
	}
`;

const ContentCaixaBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 6rem;

  @media (max-width: 1024px) {
    align-items: center;
	}

  @media (max-width: 768px) {
    margin-left: 0;
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
  padding: 0 8rem 0 0;

  b {
    color: #000000;
  }

  @media (max-width: 1024px) {
    width: ${props => (props.widthMobile)};
    padding: 0 2rem 0 0;
	}

  @media (max-width: 768px) {
    width: 30vw;
    padding: ${props => (props.paddingMobile)};
	}

  @media (max-width: 648px) {
    width: 55vw;
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
    padding: 5rem 0;
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
    @media (max-width: 425px) {
      width: 15vw;
    }
  }
`;

const ContentSobreText = styled.div`
  width: 50%;
  margin-top: 2.4rem;

  @media (max-width: 768px) {
    width: 65%;
    margin-top: 1.3rem;
	}
  @media (max-width: 648px) {
    width: 90%;
    display: flex;
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
  padding-left: 10rem;
  margin: 7rem 0 5rem 0;

  @media (max-width: 1024px) {
    padding-left: 3rem;
	}

  @media (max-width: 768px) {
    padding-left: 2rem;
	}

  @media (max-width: 648px) {
    width: 100%;
    padding: 0;
    margin: 4rem 0 2rem 0;
	}
`;

const SessionCargo = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 648px) {
    width: 100%;
    height: 65vh;
    margin-right: 2rem;
    padding-right: ${props => (props.paddingRight)};
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
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;
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
    width: 270px;
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

    @media (max-width: 648px) {
      width: 15vw;
	  }
  }

  img {
    margin-top: 0.9rem;
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
  padding-top: 0.2rem;
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
`;

const SubContentCaixa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.5rem 2rem;
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

  @media (max-width: 1024px) {
    width: 45%;
	}

  @media (max-width: 768px) {
    width: 62%;
	}

  @media (max-width: 648px) {
    width: 70%;
	}

  @media (max-width: 450px) {
    width: 100%;
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
      width: 15vw;
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
  height: 75vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: 648px) {
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
    padding-left: 2rem;
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
    margin-right: 3rem;
	}

  @media (max-width: 450px) {
    width: 80%;
	}
`;

const CaixaBoxHeader = styled.div`
  width: 100%;
  height: 30vh;
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
	}

  @media (max-width: 450px) {
    width: 80%;
	}
`;

const SliderBolinha = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isSelected ? '#373737' : '#37373759')};
  margin-left: 1rem;
  opacity: 1;
  cursor: pointer;
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

  @media (max-width: 450px) {
    width: 60vw;
    padding: 2rem 3rem;
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
  text-overflow: ellipsis;
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

const CaixaSaiba = styled.a`
  color: #992836;
  font-size: 0.7rem;
  font-family: 'Open Sans', Regular;
  text-decoration: none;
`;

const ContentLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 648px) {
    display: none;
	}
`;

const ContentLogoImages = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LogoSeparation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 9rem 0;
`;

const ContentImages = styled.img`
  width: 15%;
  height: ${props => (props.height ? '119px' : '40px')};
  position: ${props => (props.position)};
  bottom: ${props => (props.bottom)};

  @media (max-width: 768px) {
    width: 22%;
    height: ${props => (props.height ? '85px' : '50px')};
	}
`;

const ContentLogoMobile = styled.div`
  display: none;

  @media (max-width: 648px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
	}
`;

const ContentLogoImagesMobile = styled.div`
  display: none;

  @media (max-width: 648px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
	}
`;

const LogoSeparationMobile = styled.div`
  display: none;

  @media (max-width: 648px) {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0 0 5rem 0;
	}
`;

const PostsMessage = styled.span`
  display: inline-block;
  width: 100%;
  color: #000;
  text-align: center;
  font-size: 2.75rem;
  font-family: 'Product Sans', Bold;
`;

class Home extends Component {
  state = {
    slider: 0,
    sliderCargo: 0,
    selectedSlider: 1,
    sliderSelect: 0,
    posts: [],
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    try {
      const response = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@estreia"
      );

      this.setState({
        posts: response.data.items.slice(0, 3),
      });
    } catch (err) { }
  };


  handleText = () => {
    this.setState({
      text: this.state.text,
    })
  }

  handleSlider = (item, slider) => {
    this.setState({
      slider: item,
      sliderSelect: slider,
    })
    document.getElementById(item).scrollIntoView()
  }

  renderPosts = () => {
    return this.state.posts.map((post) => {
      return (
        <CaixaBox>
          <ImageBox src={balao} alt='figure' />
          <CaixaBoxHeader>
            <BoxDate>{post.pubDate}</BoxDate>
            <TitleBox>{post.title}</TitleBox>
            <CaixaBoxSobre>
              <hr></hr>
              <CaixaSaiba href={post.link} target="_blank">saiba mais <BoxImage src={setinha} /></CaixaSaiba>
            </CaixaBoxSobre>
          </CaixaBoxHeader>
        </CaixaBox>
      )
    });
  }

  render() {
    const { sliderSelect, posts } = this.state;

    return (
      <Container>
        <Header />
        <ContentCaixaGeral>
          <Content>
            <TitleHeader>PORQUE NOS ESCOLHER</TitleHeader>
            <ImageSeta src={seta} alt='seta' />
          </Content>
          <ContentCaixaBox>
            <CaixaParagraph width='24vw' paddingMobile='3rem 0 0 2rem'>Prestar um atendimento
              eficiente e diferenciado é a nossa <b>meta!</b></CaixaParagraph>
            <CaixaParagraph width='22vw' widthMobile='19vw' paddingMobile='2rem 3rem 0'>Transparência
              nas informações</CaixaParagraph>
            <CaixaParagraph width='23vw' paddingMobile='2rem 1rem 0 0'>Comprometimento
              com o seu negócio</CaixaParagraph>
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
            <SessionCargo id='cargo0'>
              <ImageCargo src={People1} alt='people' />
              <ContentCargoCaixa>
                <hr></hr>
                <ContentBoxTitle>Eduardo Pereira</ContentBoxTitle>
                <ContentBoxParagraph>CEO</ContentBoxParagraph>
                <ContentBoxParagraph>Responsável pelas áreas Contábil e Fiscal</ContentBoxParagraph>
                <a
                  href="https://www.linkedin.com/in/eduardo-pereira-4b686013/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Icon} alt='linkedin' />
                </a>
              </ContentCargoCaixa>
            </SessionCargo>
            <SessionCargo id='cargo1'>
              <ImageCargo src={People2} alt='people' />
              <ContentCargoCaixa>
                <hr></hr>
                <ContentBoxTitle>Christiani Nascimento</ContentBoxTitle>
                <ContentBoxParagraph>CEO</ContentBoxParagraph>
                <ContentBoxParagraph>Resp. pela Legalização de Empresas, Parafiscal;</ContentBoxParagraph>
                <a
                  href="https://www.linkedin.com/in/christiani-nascimento-23b06018b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Icon} alt='linkedin' />
                </a>
              </ContentCargoCaixa>
            </SessionCargo>
            <SessionCargo id='cargo2' paddingRight='2rem'>
              <ImageCargo src={People3} alt='people' />
              <ContentCargoCaixa>
                <hr></hr>
                <ContentBoxTitle>Mauro Moura</ContentBoxTitle>
                <ContentBoxParagraph>CEO</ContentBoxParagraph>
                <ContentBoxParagraph>Responsável pelo Capital Humano</ContentBoxParagraph>
                <a
                  href="https://www.linkedin.com/in/mauro-moura-5a406a74/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Icon} alt='linkedin' />
                </a>
              </ContentCargoCaixa>
            </SessionCargo>
          </Cargo>
          <Slider >
            <SliderBolinha isSelected={sliderSelect === 0 ? true : false} onClick={() => this.handleSlider('cargo0', 0)}></SliderBolinha>
            <SliderBolinha isSelected={sliderSelect === 1 ? true : false} onClick={() => this.handleSlider('cargo1', 1)}></SliderBolinha>
            <SliderBolinha isSelected={sliderSelect === 2 ? true : false} onClick={() => this.handleSlider('cargo2', 2)}></SliderBolinha>
          </Slider>
        </ContentCargo>
        <Services />
        <Carousel />
        <ContentLogo>
          <ContentLogoImages>
            <LogoSeparation>
              <ContentImages src={ChooseMed} alt='logo' />
              <ContentImages src={AndreLuiz} alt='logo' />
              <ContentImages src={FichaCerta} alt='logo' />
            </LogoSeparation>
            <LogoSeparation>
              <ContentImages src={FitaArquitetura} alt='logo' />
              <ContentImages height position='relative' bottom='22px' src={SabendoMais} alt='logo' />
              <ContentImages src={Velatura} alt='logo' />
            </LogoSeparation>
          </ContentLogoImages>
        </ContentLogo>
        <ContentLogoMobile>
          <ContentLogoImagesMobile>
            <LogoSeparationMobile>
              <ContentImages src={ChooseMed} alt='logo' />
              <ContentImages src={AndreLuiz} alt='logo' />
            </LogoSeparationMobile>
            <LogoSeparationMobile>
              <ContentImages src={FichaCerta} alt='logo' />
              <ContentImages src={FitaArquitetura} alt='logo' />
            </LogoSeparationMobile>
            <LogoSeparationMobile>
              <ContentImages height src={SabendoMais} alt='logo' />
              <ContentImages src={Velatura} alt='logo' />
            </LogoSeparationMobile>
          </ContentLogoImagesMobile>
        </ContentLogoMobile>
        <SubContent>
          <SubContentCaixa>
            <SubContentMeio>
              <hr></hr>
              <h2>fique por dentro do que acontece no nosso <b>medium</b></h2>
            </SubContentMeio>
          </SubContentCaixa>
        </SubContent>
        <ContainerCaixa>
          <Caixa>
            {posts.length > 0 
              ? this.renderPosts()
              : <PostsMessage>Nenhuma publicação encontrada!</PostsMessage>
            }
          </Caixa>
          <Slider>
            <SliderBolinha isSelected={sliderSelect === 0 ? true : false} onClick={() => this.handleSlider('caixa0', 0)}></SliderBolinha>
            <SliderBolinha isSelected={sliderSelect === 1 ? true : false} onClick={() => this.handleSlider('caixa1', 1)}></SliderBolinha>
            <SliderBolinha isSelected={sliderSelect === 2 ? true : false} onClick={() => this.handleSlider('caixa2', 2)}></SliderBolinha>
          </Slider>
        </ContainerCaixa>
        <Formulation />
        <Footer />
      </Container >
    )
  }
}

export default Home;