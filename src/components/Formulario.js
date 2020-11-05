import React, { Component } from 'react';
import styled from 'styled-components';

import Proposta from '../assets/proposta.png';
import Forma from '../assets/forma.svg';

const ContainerForm = styled.div`
  width: 100%;
  height: ${props => props.isBig ? '78vh' : '197vh'};

  @media (max-width: 768px) {
    height: ${props => props.isBig ? '78vh' : '160vh'};
	}
`;

const ContentFinishSolicitation = styled.span`
  width: 100%;
  height: ${props => props.height ? '190vh' : '65vh'};
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.background ? `url(${Forma})` : `url(${Proposta})`};
  background-size: cover;

  @media (max-width: 768px) {
    height: ${props => props.height ? '150vh' : '45vh'};
	}
`;

const TitleForm = styled.h3`
  width: 49%;
  font-size: 1rem;
  font-family: 'Open Sans', Bold;
  text-align: center;
  margin-top: ${props => props.marginTop ? '11rem' : '4rem'};

  @media (max-width: 768px) {
    width: 75%;
	}

  @media (max-width: 648px) {
    font-size: 0.8rem;
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

  @media (max-width: 768px) {
    width: 27%;
	}

  @media (max-width: 648px) {
    width: 60%;
	}
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

   @media (max-width: 768px) {
    width: 65%;
	}
`;

const FormAssunt = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormTriangle = styled.div`
  width: 0; 
  height: 0; 
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid #FFFFFF;
  position: absolute;
  top: 417rem;
  right: 357px;
  cursor: pointer;
`;

const FormSelect = styled.div`
  width: 45%;
  display: ${props => (props.isSelected ? 'flex' : 'none')}; 
  flex-direction: column;
  border: 1px solid #FFFFFF;
  list-style: none;

  @media (max-width: 768px) {
    width: 65%;
	}
`;

const FormSelectList = styled.li`
  color: #d2a2a8;
  font-size: 0.8rem;
  font-family: 'Arial', ExtraBold;
  font-weight: bold;
  padding: 0.5rem 0.5rem 0.2rem;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
    background-color: #882330;
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

   @media (max-width: 768px) {
    width: 65%;
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

  @media (max-width: 648px) {
    width: 35vw;
	}
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
    isSelected: false,
    selectedItems: [
      'Contabilidade',
      'RH',
      'Departamento Pessoal',
      'Departamento Fiscal',
      'Departamento Parafiscal',
      'Todos',
      'Outros',
    ],
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

  handleSelected = () => {
    this.setState({
      isSelected: !this.state.isSelected,
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
            <FormAssunt>
              <Input
                type="text"
                placeholder="Assunto*"
                onChange={this.handleChange}
              />
            </FormAssunt>
            <FormTriangle onClick={this.handleSelected}></FormTriangle>
            <FormSelect isSelected={this.state.isSelected}>
              {this.state.selectedItems.map((item, index) => (
                <FormSelectList key={index}>{item}</FormSelectList>
              ))}
            </FormSelect>
            <Textarea
              placeholder="Escreva aqui a sua mensagem:"
            />
            <ButtonForm>ENVIAR</ButtonForm>
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