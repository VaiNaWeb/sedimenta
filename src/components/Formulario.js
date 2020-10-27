import React, { Component } from 'react';
import styled from 'styled-components';

import Proposta from '../assets/proposta.png';
import Forma from '../assets/forma.svg';

const ContainerForm = styled.div`
  width: 100%;
  height: ${props => props.isBig ? '63vh' : '185vh'};
`;

const ContentFinishSolicitation = styled.span`
  width: 100%;
  height: ${props => props.height ? '190vh' : '67vh'};
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.background ? `url(${Forma})` : `url(${Proposta})`};
  background-size: cover;
`;

const TitleForm = styled.h3`
  width: 49%;
  font-size: 1rem;
  font-family: 'Open Sans', Bold;
  text-align: center;
  margin-top: ${props => props.marginTop ? '11rem' : '4rem'};
`;

const ButtonSolicitation = styled.button`
  width: 20%;
  color: #FFFFFF;
  background-color: transparent;
  border-color: #FFFFFF;
  font-family: 'Product Sans', Bold;
  font-weight: bolder;
  padding: 0.5rem 0.5rem;
  margin-top: 3rem;
  display: ${props => props.display ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
`;

const Formulario = styled.form`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: ${props => props.margin ? '0' : '5rem'};
`;

const Input = styled.input`
  width: 45%;
  background: none;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  font-size: 0.8rem;
  font-family: 'Arial', ExtraBold;
  font-weight: bold;
  padding-top: 1rem;
  padding-bottom: 0.3rem;
  
  ::placeholder {
    color: #d2a2a8;
   }
`;

const Textarea = styled.textarea`
  width: 45%;
  height: 25vh;
  background: none;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  color: #d2a2a8;
  font-size: 0.8rem;
  font-family: 'Arial', ExtraBold;
  font-weight: bold;
  padding-top: 1rem;
  resize: none;

  ::placeholder {
    color: #d2a2a8;
   }
`;

const ButtonForm = styled.button`
  width: 10vw;
  background: none;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  font-weight: bold;
  padding: 0.5rem 0.5rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
`;

const ContentFormTopo = styled.a`
  width: 5vh;
  height: 5vh;
  background: #F5F5F5;
  border-radius: 2px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 500px;
  top: -275px;
  opacity: 1;
`;

const ContentFormTriangle = styled.div`
  width: 0; 
  height: 0; 
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 10px solid #992836;
  position: absolute;
`;


const BoxImage = styled.div`
  width: 100%;
  height: 67vh;
  background-image: url(${Proposta});
  background-size: cover;
`;

class Formulation extends Component {
  state = {
    solicitation: true,
  }

  handleSolicitacion = () => {
    this.setState({
      solicitation: !this.state.solicitation,
    });
  }


  handleChange = (ev) => {
    this.setState({
      ev: ev.target.value,
    });
  }

  renderForm = () => {
    return (
      <>
        <ContentFinishSolicitation height background>
          <TitleForm marginTop>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</TitleForm>
          <Formulario margin={this.state.solicitation}>
            <Input
              type="text"
              placeholder="Nome*"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              placeholder="Empresa*"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              placeholder="E-mail*"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              placeholder="Assunto*"
              onChange={this.handleChange}
            />
            <Textarea
              placeholder="Escreva aqui a sua mensagem:"
            />
            <ButtonForm>ENVIAR</ButtonForm>
            <ContentFormTopo href="#topo">
            <ContentFormTriangle />
          </ContentFormTopo>
          </Formulario>
          <BoxImage />
        </ContentFinishSolicitation>
      </>
    )
  }

  render() {
    const { solicitation } = this.state;

    return (
      <ContainerForm isBig={this.state.solicitation}
        isOpen={this.state.solicitation ? `url(${Proposta})` : `url(${Forma})`}>
        {solicitation ? <ContentFinishSolicitation>
          <TitleForm>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam mi justo, interdum et rutrum dictum, venenatis sollicitudin nisi.</TitleForm>
          <ButtonSolicitation
            display={this.state.solicitation}
            onClick={this.handleSolicitacion}>
            SOLICITE SUA PROPOSTA
          </ButtonSolicitation>
        </ContentFinishSolicitation> : this.renderForm()}
      </ContainerForm>
    );
  }
}

export default Formulation;