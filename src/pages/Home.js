// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

//Images
import logo from '../assets/logo.svg';
import menuHamburguer from '../assets/menuHamburguer.svg';
import Background from '../assets/back2.png';
import seta from '../assets/setaLado.svg';
import Icon from '../assets/icon.svg';
import Image from '../assets/image.svg';
import Fundo from '../assets/fundo.svg';

import BatePapo from '../assets/batepapo.jpg';
import Buque from '../assets/buque.jpg';
import Farol from '../assets/farol.jpg';
import Cama from '../assets/cama.jpg';
import Crianca from '../assets/crianca.jpg';
import Flor from '../assets/flor.jpg';

import People from '../assets/people2.png';

import LogoVnW from '../assets/logoVnw.png';


const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #F5F5F5;
`;

const ContainerHeader = styled.span`
  width: 100%;
  height: 2.1875rem;
  background-color: #52151D;
  color: #FFFFFF;
  font-size: 0.8125rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  opacity: 1;

  p {
    font-family: 'Open Sans', Regular;
    padding-right: 0.5rem;
  }

  b {
    font-family: 'Open Sans', Semibold;
  }
`;

const ContainerLogo = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    width: 100%;
    height: 100vh;
    background: #0000005C 0% 0% no-repeat padding-box;
    padding: 2.5rem 5rem;
    opacity: 0.97;
  }
`;

const Logo = styled.img`
  height: 4vh;
`;

const MenuHamburguer = styled.img`
  height: 20px;
  padding-top: 0.5rem;
  display: ${props => (props.open ? 'none' : 'flex')};
  cursor: pointer;
`;

const SubContainer = styled.div`
  color: #FFFFFF;
  display: ${props => (props.open ? 'flex' : 'none')};
  align-items: center;
  flex-direction: row;
`;

const SubContainerParagraph = styled.p`
  margin-right: 2.5rem;
  opacity: 1;
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

const SubContainerText = styled.div`
  width: 29%;
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p{
    margin-top: 1.4rem;
  }
`;

const ContentCaixaGeral = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  bottom: 135px;

  h3 {
    width: 15vw;
    color: #FFFFFF;
  }
`;

const Content = styled.div`
  width: 85%;
  height: 30vh;
  display: flex;
  flex-direction: row;
`;

const ContentCaixa = styled.div`
  color: #FFFFFF;
  background-color: #992836;
  border: 2px solid #801422;
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: 'Arial', Bold;
  margin-bottom: 1.3rem;

  p {
    font-size: 0.75rem;
  }
`;

const ContentSobre = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const ContentSobreTitle = styled.div`
  width: 11vw;
  font-size: 1.7rem;
  font-family: 'Product Sans', Bold;

  hr {
    width: 4vw;
    border: 1px solid #707070;
    margin-bottom: 2rem;
  }
`;

const ContentSobreText = styled.div`
  width: 45%;
`;

const ContainerParagraph = styled.p`
  color: #373737;
  /* font-size: 1rem; */
  font-family: 'Open Sans', Regular;
`;

const ContentCargo = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
`;

const ContentCargoCaixa = styled.div`
  width: 20%;
  height: 25vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    font-size: 1.5rem;
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
  /* height: 60vh; */
  background-image: url(${Fundo});
  background-repeat: no-repeat;

  div {
    height: 63vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SubContentMeio = styled.span`
  width: 34.5%;
  height: 35vh;
  background-color: #373737;
  color: #FFFFFF;
  font-family: 'Open Sans', Bold;
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;

  hr {
    border: 1px solid #FFFFFF;
    opacity: 1;
  }

  h2 {
    padding-top: 1rem;
    font-size: 2rem;
  }

  b {
    color: #992836;
    font-size: 2.5rem;
    font-weight: bolder;
    font-family: 'Open Sans', ExtraBold;
  }
`;

const SubContentSobre = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
`;

const SubContentSobreCaixa = styled.div`
  width: 30%;
  height: 60vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubContentTitle = styled.p`
  color: #373737;
  font-size: 1.125rem;
  font-family: 'Open Sans', ExtraBold;
  font-weight: bolder;
  margin-bottom: 1.5rem;
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
    border: 2px solid #707070;
    margin-left: 6rem;
  }
`;

const ContentTitle = styled.div`
  color: #373737;
  font-size: 2rem;
  font-family: 'Product Sans', Bold;
  margin: 2rem 0 5rem 0;
`;

const ContentLogoImages = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

const ContentSlider = styled.div`
  width: 100%;
  height: 55vh;
  background-color: #D66B78;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

const ContentSliderMeio = styled.div`
  width: 30%;
  height: 35vh;
  background-color: #FFFFFF;
  color: #373737;
  padding: 0 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentSliderParagraph = styled.p`
  align-self: flex-end;
  margin-top: 2rem;
`;

const ContentFinish = styled.div`
  width: 100%;
  height: 55vh;
  background-image: url(${People});
  background-size: cover;
`;

const ContentFinishSolicitation = styled.span`
  width: 100%;
  height: 55vh;
  background-color: #992836B3;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    width: 45%;
    text-align: center;
  }
`;

const ButtonFinish = styled.button`
  width: 20%;
  color: #FFFFFF;
  background-color: transparent;
  border-color: #FFFFFF;
  font-family: 'Product Sans', Bold;
  font-weight: bolder;
  padding: 0.5rem 0.5rem;
  margin-top: 3rem;
  outline: none;
  cursor: pointer;
`;

const ContentFooter = styled.div`
  width: 80%;
  height: 45vh;
  display: flex;
  justify-content: flex-end;
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
    menu: undefined,
  }


  handleClick = () => {
    this.setState({
      menu: !this.state.menu,
    });
  }


  render() {
    return (
      <Container>
        <ContainerHeader>
          <p><b>Telefone:</b> +55 (21) 2232-1337</p>
          <p><b>E-mail:</b> contato@sedimenta.com.br</p>
        </ContainerHeader>
        <ContainerLogo>
          <span>
            <SubContainerPrincipal>
                <SubContainerImage>
                  <Logo src={logo} alt='Logo'/>
                  <MenuHamburguer src={menuHamburguer} alt='Menu Hamburguer' open={this.state.menu} onClick={this.handleClick}/>
                  <SubContainer open={this.state.menu} onClick={this.handleClick}>
                    <SubContainerParagraph><b>SOBRE NÓS</b></SubContainerParagraph>
                    <SubContainerParagraph><b>SERVIÇOS</b></SubContainerParagraph>
                  </SubContainer>
                </SubContainerImage>
                <SubContainerText>
                  <h1>Administração de domesticas</h1>
                  <p>Valorize o trabalho de quem cuida do seu lar.</p>
                </SubContainerText>
              </SubContainerPrincipal>
            </span>
        </ContainerLogo>
        <ContentCaixaGeral>
          <div>
            <h3>PORQUE NOS ESCOLHER</h3>
          </div>
            <img src={seta} alt='seta'/>
          <Content>
            <ContentCaixa>
              <Title>ATENDIMENTO</Title>
              <p>Prestar um atendimento eficiente é a nossa meta.
                Prezamos pela excelência, eficiência e objetividade em 
                todos os nossos atendimentos. Trabalhamos para que 
                novas soluções sejam apresentadas aos nossos clientes.
              </p>
            </ContentCaixa>
            <ContentCaixa>
              <Title>TERCEIRIZAÇÃO</Title>
              <p>Terceirizamos seu Departamento Contábil, Fiscal, 
                Pessoal e Financeiro. Diminua seu custo 
                e tenha mais tempo para o seu negócio.
              </p>
            </ContentCaixa>
            <ContentCaixa>
              <Title>PLANEJAMENTO</Title>
              <p>Para ter sucesso ao abrir um novo negócio, 
                realizar um projeto, colocar em prática uma boa
                ideia, é preciso ter um bom planejamento dos custos.
                Podemos assessorá-los com Planejamento Tributário,
                Formação de Preço, Redução dos custos diretos e indiretos
              </p>
            </ContentCaixa>
            <ContentCaixa>
              <Title>RECRUTAMENTO E SELEÇÃO</Title>
              <p>Nossos colaboradores são capacitados a apresentar 
                candidatos com o perfil profissional de sua preferência. 
                Todos os candidatos passam por uma avaliação criteriosa e confiável.
              </p>
            </ContentCaixa>
          </Content>
        </ContentCaixaGeral>
        <ContentSobre>
          <ContentSobreTitle>
            <hr></hr>
            <h3>SOBRE A EMPRESA</h3>
          </ContentSobreTitle>
          <ContentSobreText>
            <ContainerParagraph><b>Sedimenta JPM</b> é uma empresa de Contabilidade que se concentra em
            ajudar pequenas e médias empresas a atingir seus objetivos de
            negócios.</ContainerParagraph>​
            <ContainerParagraph>Quer seja uma empresa de médio porte, um(a)
            especialista que pretende lançar a sua ideia no mercado ou numa
            Iniciativa Social – Terceiro Setor -, ou um(a) empresário(a)
            que pretende abrir ou expandir um negócio, estaremos ao seu lado 
            para ajudar em cada etapa do seu percurso. Oferecemos serviços de
            Contabilidade, Departamento Pessoal, Impostos, Tributação de Pessoa
            Física e Finanças que permitem que você se concentre no
            crescimento de seus negócios - enquanto cuidamos de todo o trabalho
            de Contabilidade. </ContainerParagraph>​
            <ContainerParagraph>​Com mais de 10 anos de experiência no mercado aliada
            ao conhecimento de nossos sócios e colaboradores trabalhando em algumas
            das maiores empresas líderes do país e do mundo, atendemos nossos clientes
            com o mais alto nível de profissionalismo, honestidade e integridade em tudo
            o que fazemos. Somos profissionais apaixonados que procuram proporcionar uma
            experiência de maior proximidade e interação com nossos clientes - 
            colocando-os sempre em primeiro lugar. Abraçamos a inovação e buscamos
            oportunidades de criar valor para o seu negócio.</ContainerParagraph>​
            <ContainerParagraph>​Estamos sediados no bairro da
            Lapa, na cidade do Rio de Janeiro - Brasil, com escritório em Almada - Portugal,
            e também atendemos clientes internacionais fora do Brasil.</ContainerParagraph>
            <br></br>
            <ContainerParagraph><b>A Sedimenta JPM </b>
            está ansiosa para ser sua parceira!</ContainerParagraph>
          </ContentSobreText>
        </ContentSobre>
        <ContentCargo>
          <ContentCargoCaixa>
            <hr></hr>
            <ContentBoxTitle>NOME</ContentBoxTitle>
            <ContentBoxParagraph>cargo</ContentBoxParagraph>
            <img src={Icon} alt='linkedin'/>
          </ContentCargoCaixa>
          <ContentCargoCaixa>
            <hr></hr>
            <ContentBoxTitle>NOME</ContentBoxTitle>
            <ContentBoxParagraph>cargo</ContentBoxParagraph>
            <img src={Icon} alt='linkedin'/>
          </ContentCargoCaixa>
          <ContentCargoCaixa>
            <hr></hr>
            <ContentBoxTitle>NOME</ContentBoxTitle>
            <ContentBoxParagraph>cargo</ContentBoxParagraph>
            <img src={Icon} alt='linkedin' />
          </ContentCargoCaixa>
        </ContentCargo>
        <ContentServiços>
          <ContentSobreTitle>
            <hr></hr>
            <h3>CONHEÇA NOSSOS SERVIÇOS</h3>
          </ContentSobreTitle>
          <ContentBox>
            <ContentBoxGalery>
              <img src={Image} alt='image' />
              <h2>CONTABILIDADE</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='image' />
              <h2>DEPARTAMENTO FISCAL E PARAFISCAL</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='image' />
              <h2>RECURSOS HUMANOS</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='image' />
              <h2>DEPARTAMENTO PESSOAL</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='image' />
              <h2>INTERNACIONALIZAÇÃO DE EMPRESAS</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box>LER MAIS</Box>
            </ContentBoxGalery>
            <ContentBoxGalery>
              <img src={Image} alt='image' />
              <h2>LOREM</h2>
              <BoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</BoxText>
              <Box>LER MAIS</Box>
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
              <SubContentTitle>Lorem ipsum dolor sit amet</SubContentTitle>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscig elit.
              Aenean id nunc at ex pellentesque ultrices nec sed est.
              Morbi suscipit, odio in bibendum imperdiet, diam
              sapien dignissim urna, quis dapibus purus quam nec tellus.
              Pellentesque bibendum enim ultrices lacus posuere rutrum.
              Nam in elementum leo.</p>
              <Button>LER MAIS</Button>
            </SubContentSobreCaixa>
            <SubContentSobreCaixa>
              <SubContentTitle>Lorem ipsum dolor sit amet</SubContentTitle>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscig elit.
              Aenean id nunc at ex pellentesque ultrices nec sed est.
              Morbi suscipit, odio in bibendum imperdiet, diam
              sapien dignissim urna, quis dapibus purus quam nec tellus.
              Pellentesque bibendum enim ultrices lacus posuere rutrum.
              Nam in elementum leo.</p>
              <Button>LER MAIS</Button>
            </SubContentSobreCaixa>
            <SubContentSobreCaixa>
              <SubContentTitle>Lorem ipsum dolor sit amet</SubContentTitle>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscig elit.
              Aenean id nunc at ex pellentesque ultrices nec sed est.
              Morbi suscipit, odio in bibendum imperdiet, diam
              sapien dignissim urna, quis dapibus purus quam nec tellus.
              Pellentesque bibendum enim ultrices lacus posuere rutrum.
              Nam in elementum leo.</p>
              <Button>LER MAIS</Button>
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
        <ContentSlider>
          <ContentSliderMeio>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit.
            Aenean luctus libero id velit laoreet dignissim.
            Cras vitae venenatis felis. Phasellus egestas justo eu aliquam sodales.</p>
            <ContentSliderParagraph>Nome, cargo, Empresa</ContentSliderParagraph>
          </ContentSliderMeio>
        </ContentSlider>
        <ContentFinish>
          <div>
            <ContentFinishSolicitation>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam mi justo, interdum et rutrum dictum,
              venenatis sollicitudin nisi.</h3>
              <ButtonFinish>SOLICITE SUA PROPOSTA</ButtonFinish>
            </ContentFinishSolicitation>
          </div>
        </ContentFinish>
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
          <img src={LogoVnW} alt= 'logoVnw' />
        </Footer>
      </Container>
    )
  }
}

export default Home;