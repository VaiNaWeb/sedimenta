// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from '../components/Slider';
import Formulation from '../components/Formulario';
import Header from '../components/Header';

//Images
import seta from '../assets/seta.svg';
import Icon from '../assets/icon.svg';
import Image from '../assets/image.svg';
import Fundo from '../assets/fundo.svg';

import BatePapo from '../assets/batepapo.jpg';
import Buque from '../assets/buque.jpg';
import Farol from '../assets/farol.jpg';
import Cama from '../assets/cama.jpg';
import Crianca from '../assets/crianca.jpg';
import Flor from '../assets/flor.jpg';

import LogoVnW from '../assets/logoVnw.png';


const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #F5F5F5;

  @media (max-width: 648px) {
    background-color: none;
    padding-top: 30rem;
	}
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
`;

const ContentCaixaBox = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const TitleHeader = styled.h3`
  width: 15vw;
  color: #373737;
  font-size: 1.2rem;
  font-family: 'Product Sans', Bold;
  margin-left: 3rem;
`;

const Content = styled.div`
  width: 18vw;
  display: flex;
  flex-direction: row;
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
`;

const ContentSobre = styled.div`
  width: 100%;
  padding: 0 5rem;

  /* @media (max-width: 648px) {
    align-items: center;
    flex-direction: column;
	} */
  span {
    width: 95%;
    display: flex;
    justify-content: space-between;
  }
`;

const ContentSobreTitle = styled.div`
  width: 11vw;
  color: #000000;
  font-size: 1.5rem;
  font-family: 'Product Sans', Bold;

  hr {
    width: 4vw;
    border: 1px solid #707070;
    margin-bottom: 2rem;
  }
/* 
  @media (max-width: 648px) {
    width: 15vw;
    font-size: 1rem;
    padding-bottom: 2rem;
	} */
`;

const ContentSobreText = styled.div`
  width: 50%;
  margin-top: 2.4rem;
`;

const ContainerParagraph = styled.p`
  color: #373737;
  font-size: 0.9rem;
  font-family: 'Open Sans', Regular;
  padding-bottom: 1.4rem;
`;

const ContentCargo = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 20rem 0 5rem 0;

  @media (max-width: 648px) {
    align-items: center;
    flex-direction: column;
	}
`;

const ContentCargoCaixa = styled.div`
  width: 20%;
  height: 25vh;
  background-color: #FFFFFF;
  border-left: 5px solid #801422;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 3vw;
    border: 1px solid #00000029;
    margin-bottom: 1rem;
    opacity: 1;
  }

  img {
    margin-top: 1.4rem;
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

const ContentServiços = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  padding-left: 4rem;

  @media (max-width: 648px) {
    flex-direction: column;
	}
`;

const ContentServiçosTitle = styled.div`
  width: 25vw;
  color: #373737;
  font-size: 1.5rem;
  font-family: 'Product Sans', Bold;

  hr {
    width: 4vw;
    border: 1px solid #707070;
    margin-bottom: 2rem;
  }

  b {
    color: #000000;
  }
`;

const ContentBox = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 15%;
  }
`;

const ContentBoxGalery = styled.div`
  width: 36%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.2rem;
    font-family: 'Arial', Bold;
    font-weight: bold;
    text-align: center;
    margin: 2rem 0;
  }
`;

const BoxText = styled.p`
  width: 75%;
`;

const Box = styled.p`
  color: #992836;
  text-decoration: underline;
  margin: 2rem 0;
  opacity: 1;
`;

const SubContent = styled.div`
  width: 100%;
  background-image: url(${Fundo});
  background-repeat: no-repeat;

  div {
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SubContentMeio = styled.span`
  width: 35%;
  height: 45vh;
  background-color: #373737;
  color: #FFFFFF;
  font-family: 'Open Sans', Bold;
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem 0;

  hr {
    width: 20vw;
    border: 1px solid #FFFFFF;
    opacity: 1;
  }

  h2 {
    padding-top: 1rem;
    font-size: 2rem;
  }

  b {
    color: #992836;
    font-size: 2.2rem;
    font-weight: bolder;
    font-family: 'Open Sans', ExtraBold;
  }
`;

const SubContentSobre = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 10rem;
`;

const SubContentSobreCaixa = styled.div`
  width: 30%;
  height: 60vh;
  background-color: #FFFFFF;
  border-left: 5px solid #992836;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 1.5rem;
`;

const SubContentTriangle= styled.div`
  width: 0; 
  height: 0; 
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 17px solid #992836;
  position: relative;
  right: 24px;
`;

const SubContentTitle = styled.p`
  width: 14vw;
  color: #373737;
  font-size: 1.125rem;
  font-family: 'Open Sans', ExtraBold;
  font-weight: bolder;
  margin-bottom: 1.5rem;
`;

const SubContentParagraph = styled.p`
  width: 20vw;
  color: #373737;
  font-size: 0.9rem;
  font-family: 'Open Sans', Regular;
  margin-bottom: 1rem;
  opacity: 1;
`;

const SubContentButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50px;
`;

const Button = styled.button`
  width: 50%;
  background: linear-gradient(to right, #992836, #4D141B);
  color: #FFFFFF;
  font-family: 'Open Sans', ExtraBold;
  font-weight: bolder;
  padding: 0.5rem 0.5rem;
  outline: none;
  cursor: pointer;
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

const ContentTitle = styled.h2`
  color: #373737;
  font-size: 1.7rem;
  font-family: 'Product Sans', Bold;
  margin: 2rem 0 5rem 0;
  opacity: 1;
`;

const ContentLogoImages = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

const ContentFooter = styled.div`
  width: 85%;
  height: 45vh;
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
`;

const ContentFooterRede = styled.div`
  display: flex;
  align-items: center;
`;

const ContentRedeSocial = styled.div`
  color: #373737;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  hr {
    width: 10vw;
    border: 2px solid #992836;
  }

  h5 {
    font-family: 'Open Sans', Extrabold;
    font-size: 1rem;
    margin: 1rem 0;
  }

  span {
    display: flex;
    flex-direction: row;
  }

  img {
    padding-right: 1rem;
  }
`;

const ContentFooterContact = styled.div`
  width: 30%;
  color: #373737;
  padding-right: 3rem;

  hr {
    width: 14vw;
    border: 2px solid #992836;
  }

  h5 {
    font-family: 'Open Sans', Extrabold;
    font-size: 1rem;
    margin: 0.8rem 0 2rem 0;
  }

  p {
    font-size: 0.8125rem;
  }
`;

const Footer = styled.footer`
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
            <img src={seta} alt='seta' />
          </Content>
          <ContentCaixaBox>
            <CaixaParagraph width='14vw'>Prestar um atendimento eficiente é a nossa <b>meta!</b></CaixaParagraph>
            <CaixaParagraph width='17vw'>Fazemos terceirização! Diminua seu custo e
              tenha mais tempo para o seu negócio</CaixaParagraph>
            <CaixaParagraph width='16.2vw'>Oferecemos uma ótima assessoria de planejamento
              para ajudar a por em pratica uma ótima ideia.</CaixaParagraph>
            <CaixaParagraph width='17vw'>Nossos colaboradores são capacitados a apresentar
              candidatos com o perfil profissional de sua preferencia.</CaixaParagraph>
          </ContentCaixaBox>
        </ContentCaixaGeral>
        <ContentSobre>
          <span>
            <ContentSobreTitle>
              <hr></hr>
              <h3 id="sobre">SOBRE A EMPRESA</h3>
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
          <ContentCargoCaixa>
            <hr></hr>
            <ContentBoxTitle>NOME</ContentBoxTitle>
            <ContentBoxParagraph>cargo</ContentBoxParagraph>
            <img src={Icon} alt='linkedin' />
          </ContentCargoCaixa>
          <ContentCargoCaixa>
            <hr></hr>
            <ContentBoxTitle>NOME</ContentBoxTitle>
            <ContentBoxParagraph>cargo</ContentBoxParagraph>
            <img src={Icon} alt='linkedin' />
          </ContentCargoCaixa>
          <ContentCargoCaixa>
            <hr></hr>
            <ContentBoxTitle>NOME</ContentBoxTitle>
            <ContentBoxParagraph>cargo</ContentBoxParagraph>
            <img src={Icon} alt='linkedin' />
          </ContentCargoCaixa>
        </ContentCargo>
        <ContentServiços>
          <ContentServiçosTitle>
            <hr></hr>
            <h3 id="serviços">CONHEÇA NOSSOS <b>SERVIÇOS</b></h3>
          </ContentServiçosTitle>
          <ContentBox>
            <ContentBoxGalery>
              <img src={Image} alt='teste' />
              <h2>CONTABILIDADE</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box onClick={this.handleText}>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='teste' />
              <h2>DEPARTAMENTO FISCAL E PARAFISCAL</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box onClick={this.handleText}>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='teste' />
              <h2>RECURSOS HUMANOS</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box onClick={this.handleText}>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='teste' />
              <h2>DEPARTAMENTO PESSOAL</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box onClick={this.handleText}>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='teste' />
              <h2>INTERNACIONALIZAÇÃO DE EMPRESAS</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box onClick={this.handleText}>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='teste' />
              <h2>LOREM</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box onClick={this.handleText}>LER MAIS</Box>
            </ContentBoxGalery>
          </ContentBox>
        </ContentServiços>
        <SubContent>
          <div>
            <SubContentMeio>
              <hr></hr>
              <h2>Fique por dentro do que acontece no nosso <b>Medium</b></h2>
            </SubContentMeio>
          </div>
        </SubContent>
        <SubContentSobre>
          <SubContentSobreCaixa>
            <SubContentTriangle></SubContentTriangle>
            <SubContentTitle>Lorem ipsum dolor sit amet</SubContentTitle>
            <SubContentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscig elit.
              Aenean id nunc at ex pellentesque ultrices nec sed est.</SubContentParagraph>
            <SubContentParagraph>Morbi suscipit, odio in bibendum imperdiet, diam
              sapien dignissim urna, quis dapibus purus quam nec tellus.
              Pellentesque bibendum enim ultrices lacus posuere rutrum.
              Nam in elementum leo.</SubContentParagraph>
            <SubContentButton>
              <Button>LER MAIS</Button>
            </SubContentButton>
          </SubContentSobreCaixa>
          <SubContentSobreCaixa>
          <SubContentTriangle></SubContentTriangle>
            <SubContentTitle>Lorem ipsum dolor sit amet</SubContentTitle>
            <SubContentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscig elit.
              Aenean id nunc at ex pellentesque ultrices nec sed est.</SubContentParagraph>
            <SubContentParagraph>Morbi suscipit, odio in bibendum imperdiet, diam
              sapien dignissim urna, quis dapibus purus quam nec tellus.
              Pellentesque bibendum enim ultrices lacus posuere rutrum.
              Nam in elementum leo.</SubContentParagraph>
            <SubContentButton>
              <Button>LER MAIS</Button>
            </SubContentButton>
          </SubContentSobreCaixa>
          <SubContentSobreCaixa>
          <SubContentTriangle></SubContentTriangle>
          <SubContentTitle>Lorem ipsum dolor sit amet</SubContentTitle>
            <SubContentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscig elit.
              Aenean id nunc at ex pellentesque ultrices nec sed est.</SubContentParagraph>
            <SubContentParagraph>Morbi suscipit, odio in bibendum imperdiet, diam
              sapien dignissim urna, quis dapibus purus quam nec tellus.
              Pellentesque bibendum enim ultrices lacus posuere rutrum.
              Nam in elementum leo.</SubContentParagraph>
            <SubContentButton>
              <Button>LER MAIS</Button>
            </SubContentButton>
          </SubContentSobreCaixa>
        </SubContentSobre>
        <ContentLogo>
          <div>
            <hr></hr>
            <ContentTitle>NOSSOS CLIENTES</ContentTitle>
          </div>
          <ContentLogoImages>
            <img src={BatePapo} alt='' />
            <img src={Buque} alt='' />
            <img src={Farol} alt='' />
            <img src={Cama} alt='' />
            <img src={Crianca} alt='' />
            <img src={Flor} alt='' />
          </ContentLogoImages>
        </ContentLogo>
        <Carousel />
        <Formulation />
        <ContentFooter>
          <ContentFooterRede>
            <ContentFooterContact>
              <hr></hr>
              <h5>CONTATO BRASIL</h5>
              <p><b>Endereço:</b> Rua da Lapa, 180 – Salas 804 e 805 – Rio de Janeiro,
                RJ</p>
              <p><b>Cep:</b> 20.021-180;</p>
              <p><b>Telefone:</b> +55 (21) 2232-1337</p>
              <p><b>E-mail:</b> contato@sedimenta.com.br</p>
            </ContentFooterContact>
            <ContentFooterContact>
              <hr></hr>
              <h5>CONTATO PORTUGAL</h5>
              <p><b>Endereço:</b> Rua da Lapa, 180 – Salas 804 e 805 – Rio de Janeiro,
                RJ</p>
              <p><b>Cep:</b> 20.021-180;</p>
              <p><b>Telefone:</b> +55 (21) 2232-1337</p>
              <p><b>E-mail:</b> contato@sedimenta.com.br</p>
            </ContentFooterContact>
          </ContentFooterRede>
          <ContentRedeSocial>
            <hr></hr>
            <h5>REDE SOCIAL</h5>
            <span>
              <img src={Image} alt='' />
              <img src={Image} alt='' />
              <img src={Image} alt='' />
            </span>
          </ContentRedeSocial>
        </ContentFooter>
        <Footer>
          <p>DESENVOLVIDO POR:</p>
          <img src={LogoVnW} alt='logoVnw' />
        </Footer>
      </Container>
    )
  }
}

export default Home;