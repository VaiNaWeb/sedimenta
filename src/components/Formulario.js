import React, { Component } from 'react';
import styled from 'styled-components';

import Proposta from '../assets/proposta.png';
import Forma from '../assets/forma.svg';

const ContainerForm= styled.div`
  width: 100%;
  height: 100vh;
  /* background-size: cover; */
  /* position: relative; */
`;

const ContentFinish = styled.div`
  width: 100%;
  height: 100vh;
background-image: url(${Forma});
  /* background-image: url(${Proposta}); */
  background-size: cover;
  /* position: relative; */
  /* top: 400px; */

`;

const ContentFinishSolicitation = styled.span`
  width: 100%;
  height: 97vh;
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
  outline: none;
  cursor: pointer;
`;

// const BoxForm = styled.div`
//   width: 100%;
//   background-image: url(${Forma});
//   display: ${props => props.mostrar ? 'none' : 'flex'};
// `;

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

  render() {
    return (
      <ContainerForm>
        {/* <img src={Forma} alt='forma' /> */}
        <ContentFinish>
          <ContentFinishSolicitation>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam mi justo, interdum et rutrum dictum,
            venenatis sollicitudin nisi.</h3>
            <ButtonSolicitation display={this.state.solicitation} onClick={this.handleSolicitacion}>SOLICITE SUA PROPOSTA</ButtonSolicitation>
          {/* <BoxForm> */}
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
          </ContentFinishSolicitation>
        </ContentFinish>
      </ContainerForm>
    );
  }
}

export default Formulation;