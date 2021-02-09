// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Carousel from 'nuka-carousel';

//Components
import OpinionCard from '../components/Slider';
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
import PrecisaSer from '../assets/precisaSer.svg';
import PlanoB from '../assets/planoB.svg';

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
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 3rem 0;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    transform: translateY(-18%);

	}

  @media (max-width: 648px) {
    width: 90%;
    padding: 1.2rem 0;
    text-align: center;
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
  margin-left: 2.2rem;

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
    padding: 1.5rem 0 2.5rem 0;

    :last-child {
      padding-bottom: 1rem;
    }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 7rem 0 5rem 0;

  @media (max-width: 648px) {
    padding: 0;
    margin: 4rem 0 2rem;
    margin-right: 2rem;
	}
  
  .slider {
    margin: auto;
  }

  .slider-slide {
    outline: none;
  }
`;

const Cargo = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 648px) {
    display: none;
  }
`;

const CargoMobile = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 648px) {
    display: block;
  }
`;

const SessionCargo = styled.section`
  width: 22%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  
  @media (max-width: 1024px) {
    width: 30%
	}
`;

const SessionCargoMobile = styled.div`
  width: 100%;
  padding-left: 2rem;
  height: 65vh;
  margin: 0 auto;
`;

const ImageCargo = styled.img`
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  object-position: top;

  @media (max-width: 768px) {
    width: 100%;
	}
`;

const ImageCargoMobile = styled.img`
    width: 100%;
`;

const ContentCargoCaixa = styled.div`
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

  :last-child{
    border-radius: 0 0 5px 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 22vh;
	}
  
  hr {
    width: 3vw;
    border: 1px solid #00000029;
    margin-bottom: 1rem;
    opacity: 1;
  }

  img {
    margin-top: 0.9rem;
  }
`;

const ContentCargoCaixaMobile = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #FFFFFF;
  border-left: 5px solid #801422;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 1rem; */
  box-shadow: 0px 3px 6px #00000029;

  hr {
    @media (max-width: 648px) {
      width: 10vw;
      margin-bottom: 0.5rem;
	  }
  }

  img {
    @media (max-width: 648px) {
      margin-top: 0.9rem;
	  }
  }
`;

const ContentBoxTitle = styled.p`
  color: #373737;
  font-size: 1.125rem;
  font-family: 'Product Sans', Bold;
  font-weight: bold;
  text-transform: uppercase;
`;

const ContentBoxParagraph = styled.p`
  color: #373737;
  font-size: 0.6875rem;
  font-family: 'Product Sans', Regular;
  padding-top: 0.2rem;
`;

const BoxImage = styled.img`
  width: 14%;
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
  padding: 4rem 2rem;
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
  
  @media (max-width: 1024px) {
    width: 30%;
	}

  @media (max-width: 648px) {
    width: 40%;
    margin-right: 3rem;
	}

  @media (max-width: 450px) {
    width: 90%;
	}
`;

const CaixaBoxHeader = styled.div`
  width: 100%;
  height: 27vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem;
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
  width: 80%;
  color: #373737;
  font-size: 1rem;
  font-family: 'Open Sans', ExtraBold;
  font-weight: bolder;
  padding-top: 0.3rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
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

    @media (max-width: 648px) {
      width: 13vw;
	  }
  }
`;

const CaixaSaiba = styled.a`
  color: #992836;
  font-size: 0.7rem;
  font-family: 'Open Sans', Regular;
  text-decoration: none;
  display: flex;
  justify-content: center;
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
  width: 89%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LogoSeparation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 6rem 0;

  :last-child {
    margin: 0 0 3rem 0;
  }
`;

const ContentImages = styled.img`
  height: ${props => (props.height)};
  position: ${props => (props.position)};
  bottom: ${props => (props.bottom)};
  left: ${props => (props.left)};

  @media (max-width: 768px) {
    width: 22%;
	}

  @media (max-width: 648px) {
    width: 35%;
    /* height: ${props => (props.height ? '85px' : '50px')}; */
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
    align-items: center;
    justify-content: space-between;
    margin: 0 0 5rem 0;
	}
`;

const PostsMessage = styled.span`
  width: 100%;
  display: inline-block;
  color: #000;
  text-align: center;
  font-size: 2.75rem;
  font-family: 'Product Sans', Bold;

  @media (max-width: 648px) {
    width: 90%;
	}
`;

class Home extends Component {
  state = {
    slider: 0,
    sliderCargo: 0,
    selectedSlider: 1,
    sliderSelect: 0,
    posts: [],
    slideIndex: 0,
    width: 0,
    persons: [
      {
        imgPerson: People1,
        name: "Eduardo Pereira",
        office: "CEO,",
        area: "Responsável pelas áreas Contábil e Fiscal;",
        linkeId: Icon,
        link: "https://www.linkedin.com/in/eduardo-pereira-4b686013/",
      },
      {
        imgPerson: People2,
        name: "CRISTIANI NASCIMENTO",
        office: "CEO,",
        area: "Resp. pela Legalização de Empresas, Parafiscal;",
        linkeId: Icon,
        link: "https://www.linkedin.com/in/christiani-nascimento-23b06018b/",
      },
      {
        imgPerson: People3,
        name: "Mauro Moura",
        office: "CEO,",
        area: "Responsável pelo Capital Humano;",
        linkeId: Icon,
        link: "https://www.linkedin.com/in/mauro-moura-5a406a74/",
      },
    ]
  }

  componentDidMount() {
    this.getPosts();
    this.handleScreenSize()
    window.addEventListener('resize', this.handleScreenSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScreenSize)
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

  handleScreenSize = () => {
    const widthViewPort =
      document.documentElement.clientWidth || window.screen.width

    this.setState({
      width: widthViewPort,
    })
  }


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
        <CaixaBox id='blog'>
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

  getCellSpacing = () => {
    const width = this.state.width;
    if (width >= 3800) return -600
    if (width >= 2560) return -500
    if (width >= 1900) return -200
    if (width >= 1366) return -200
    if (width >= 1024) return -150
    if (width >= 768) return -30
    return 10
  }

  renderPerson = () => {
    return this.state.persons.map((item, index) => {
      {console.log('person', this.state.person)}
      return (
        <SessionCargo id='cargo0'>
          <ImageCargo src={item.imgPerson} alt='people' />
          <ContentCargoCaixa>
            <hr></hr>
            <ContentBoxTitle>{item.name}</ContentBoxTitle>
            <ContentBoxParagraph>{item.office}</ContentBoxParagraph>
            <ContentBoxParagraph>{item.area}</ContentBoxParagraph>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.linkeId} alt='linkedin' />
            </a>
          </ContentCargoCaixa>
        </SessionCargo>
      )
    })
  }

  renderPersonMobile = () => {
    return this.state.persons.map((item, index) => {
      return (
        <SessionCargoMobile id='cargo0'>
          <ImageCargoMobile src={item.imgPerson} alt='people' />
          <ContentCargoCaixaMobile>
            <hr></hr>
            <ContentBoxTitle>{item.name}</ContentBoxTitle>
            <ContentBoxParagraph>{item.office}</ContentBoxParagraph>
            <ContentBoxParagraph>{item.area}</ContentBoxParagraph>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.linkeId} alt='linkedin' />
            </a>
          </ContentCargoCaixaMobile>
        </SessionCargoMobile>
      )
    })
  }


  render() {
    const { posts } = this.state;

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
          <CargoMobile>
            <Carousel
              animation='zoom'
              transitionMode='scroll'
              // cellAlign='center'
              zoomScale={1}
              cellSpacing={this.getCellSpacing()}
              wrapAround={false}
              scrollMode='remainder'
              slidesToScroll='auto'
              withoutControls='true'
              slideIndex={this.state.slideIndex}
              afterSlide={(index) => this.setState({ slideIndex: index })}
            >
              {this.renderPersonMobile()}
            </Carousel>
          </CargoMobile>
          <Cargo>
            {this.renderPerson()}
          </Cargo>
        </ContentCargo>
        <Services />
        <OpinionCard />
        <ContentLogo>
          <ContentLogoImages>
            <LogoSeparation>
              <ContentImages height='55px' src={ChooseMed} alt='logo' />
              <ContentImages height='66px' src={AndreLuiz} alt='logo' />
              <ContentImages height='52px' src={FichaCerta} alt='logo' />
              <ContentImages height='45px' src={PrecisaSer} alt='logo' />
            </LogoSeparation>
            <LogoSeparation>
              <ContentImages height='60px' src={FitaArquitetura} alt='logo' />
              <ContentImages height='128px' position='relative' bottom='22px' left='20px' src={SabendoMais} alt='logo' />
              <ContentImages height='57px' src={Velatura} alt='logo' />
              <ContentImages height='100px' src={PlanoB} alt='logo' />
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
              <ContentImages src={PrecisaSer} alt='logo' />
            </LogoSeparationMobile>
            <LogoSeparationMobile>
              <ContentImages src={FitaArquitetura} alt='logo' />
              <ContentImages src={SabendoMais} alt='logo' />
            </LogoSeparationMobile>
            <LogoSeparationMobile>
              <ContentImages src={Velatura} alt='logo' />
              <ContentImages src={PlanoB} alt='logo' />
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
        </ContainerCaixa>
        <Formulation />
        <Footer />
      </Container >
    )
  }
}

export default Home;
