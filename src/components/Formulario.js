import React, { Component } from 'react';
import styled from 'styled-components';

import Proposta from '../assets/proposta.png';
import Forma from '../assets/forma.svg';

const ContainerForm = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContentFinish = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContentFinishSolicitation = styled.span`
  width: 100%;
  height: ${props => props.height ? '100vh' : '67vh'};
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.background ? `url(${Forma})` : `url(${Proposta})`};
  background-size: cover;

  h3 {
    width: 45%;
    font-size: 1rem;
    font-family: 'Open Sans', Bold;
    text-align: center;
    padding-top: 4rem;
  }
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
    console.log('solicitation', this.state.solicitation);
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
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam mi justo, interdum et rutrum dictum,
            venenatis sollicitudin nisi.</h3>
          <Formulario>
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
          </Formulario>
          {/* </BoxForm> */}
        <BoxImage />
        </ContentFinishSolicitation>
      </>
    )
  }

  render() {
    const { solicitation } = this.state;

    return (
      <ContainerForm isOpen={this.state.solicitation ? `url(${Proposta})` : `url(${Forma})`}>
        <ContentFinish>
          {solicitation ? <ContentFinishSolicitation>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam mi justo, interdum et rutrum dictum,
            venenatis sollicitudin nisi.</h3>
            <ButtonSolicitation 
              display={this.state.solicitation} 
              onClick={this.handleSolicitacion}>
              SOLICITE SUA PROPOSTA
            </ButtonSolicitation>
          </ContentFinishSolicitation> : this.renderForm()}
        </ContentFinish>
      </ContainerForm>
    );
  }
}

export default Formulation;