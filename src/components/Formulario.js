import React, { Component } from 'react';
import styled from 'styled-components';

//Images
import Proposta from '../assets/proposta.png';
import Forma from '../assets/forma.svg';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContainerForm = styled.div`
  width: 100%;
  height: ${props => props.isBig ? '78vh' : '197vh'};

  @media (max-width: 768px) {
    height: ${props => props.isBig ? '85vh' : '160vh'};
	}
`;

const ContentFinishSolicitation = styled.span`
  width: 100%;
  height: ${props => props.height ? '182vh' : '65vh'};
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

  @media (max-width: 648px) {
    height: ${props => props.height ? '150vh' : '55vh'};
	}
`;

const TitleForm = styled.h3`
  width: 49%;
  font-size: 2rem;
  font-family: 'Open Sans', Bold;
  text-align: center;
  margin-top: ${props => props.marginTop ? '11rem' : '4rem'};

  @media (max-width: 768px) {
    width: 75%;
	}

  @media (max-width: 648px) {
    width: 100%;
    font-size: 1.8rem;
	}
`;

const ParagraphForm = styled.p`
  width: 49%;
  font-size: 1rem;
  font-family: 'Open Sans', SemiBold;
  text-align: center;
  margin-top: 0.6rem;

  @media (max-width: 648px) {
    width: 95%;
    font-size: 1.2rem;
	}
`;

const ButtonSolicitation = styled.button`
  width: 18%;
  color: #FFFFFF;
  background: none;
  border: 2px solid #FFF;
  font-family: 'Product Sans', Bold;
  font-weight: 700;
  padding: .75rem;
  margin-top: 2rem;
  display: ${props => props.display ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 27%;
	}

  @media (max-width: 648px) {
    width: 35%;
	}

  @media (max-width: 425px) {
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
  margin-top: ${props => props.margin ? '0' : '2rem'};
`;

const FormContent = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: .75rem 0 0;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
	}

  @media (max-width: 648px) {
    width: 100%;
    margin-top: 0.85rem;
	}
`;

const Label = styled.label`
  width: 100%;
  display: ${props => props.labelShow ? "flex" : "none"};
	color: #d2a2a8;
  font-size: 0.75rem;
  font-family: 'Arial', ExtraBold;
  font-weight: bold;
	transition: 0.5s;
  position: absolute;
  top: -0.5rem;

  @media (max-width: 768px) {
    width: 65%;
	}

  @media (max-width: 648px) {
    width: 80%;
	}
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  border-radius: 0;
  color: #FFFFFF;
  font-size: 0.85rem;
  font-family: 'Arial', ExtraBold;
  font-weight: bold;
  padding-top: 0.9rem;
  padding-bottom: 0.3rem;
  outline: none;
  
  ::placeholder {
    color: #d2a2a8;
   }

   @media (max-width: 768px) {
    width: 65%;
	}

  @media (max-width: 648px) {
    width: 80%;
	}
`;

const FormAssunt = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormTriangle = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid #FFFFFF;
  transform: ${props => (props.isSelected ? 'rotate(180deg)' : 'rotate(0)')};
  transition: 0.5s;
  position: absolute;
  bottom: 8px;
  right: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 0;
    left: 80%;
	}

  @media (max-width: 648px) {
    left: 86%;
	}
`;

const FormSelect = styled.div`
  width: 100%;
  display: ${props => (props.isSelected ? 'flex' : 'none')}; 
  flex-direction: column;
  list-style: none;
  position: absolute;
  bottom: 0;
  top: 100%;

  @media (max-width: 768px) {
    width: 65%;
	}

  @media (max-width: 648px) {
    width: 80%;
	}
`;

const FormSelectList = styled.div`
  background: #af6069;
  border: 1px solid #FFFFFF;
  border-top: none;
  border-bottom: none;
  border-radius: 0;
  color: #d2a2a8;
  font-size: 0.8rem;
  font-family: 'Arial', ExtraBold;
  font-weight: bold;
  padding: 0.7rem 0.6rem 0.2rem;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
    background-color: #882330;
  }

  :last-child {
    border-bottom: 1px solid #FFFFFF;
    padding-bottom: 0.7rem;
  }
`;

const Textarea = styled.textarea`
  width: 45%;
  height: 170px;
  background: none;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  border-radius: 0;
  color: #FFFFFF;
  font-size: 0.9rem;
  font-family: 'Arial', ExtraBold;
  font-weight: bold;
  margin-top: 0.7rem;
  outline: none;

  ::placeholder {
    color: #d2a2a8;
   }

   @media (max-width: 768px) {
    width: 58%;
	}

  @media (max-width: 648px) {
    width: 80%;
    height: 210px;
    padding-top: 1rem;
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

const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: .5rem;
  border-radius: 5px;
  background-color: #32CD32;
`;

const SuccessMessage = styled.span`
  color: #FFF;
  font-family: 'Open Sans', Bold;
  font-size: .9rem;
`;

class Formulation extends Component {
  state = {
    solicitation: true,
    isSelected: false,
    labelShowName: false,
    labelShowCompany: false,
    labelShowEmail: false,
    placeholderShowName: true,
    placeholderShowCompany: true,
    placeholderShowEmail: true,
    inputName: '',
    inputCompany: '',
    inputEmail: '',
    selectedItems: [
      'Contabilidade',
      'RH',
      'Departamento Pessoal',
      'Departamento Fiscal',
      'Departamento Parafiscal',
      'Todos',
      'Outros',
    ],
    form: {
      name: '',
      company: '',
      email: '',
      subject: '',
      message: ''
    },
    showSuccessMessage: false,
  }

  handleSolicitacion = () => {
    this.setState({
      solicitation: !this.state.solicitation,
    });
  }

  handleSelectedForm = (ev) => {
    ev.stopPropagation();
    this.setState({
      isSelected: false,
    });
  }

  handleChangeName = (ev) => {
    this.setState({
      inputName: ev.target.value,
    })
  }

  handleFocusName = () => {
    this.setState({
      placeholderShowName: !this.state.placeholderShowName,
      labelShowName: !this.state.labelShowName,
    });
  }

  handleChangeCompany = (ev) => {
    this.setState({
      inputCompany: ev.target.value,
    })
  }

  handleFocusCompany = () => {
    this.setState({
      placeholderShowCompany: !this.state.placeholderShowCompany,
      labelShowCompany: !this.state.labelShowCompany,
    });
  }

  handleChangeEmail = (ev) => {
    this.setState({
      inputEmail: ev.target.value,
    })
  }

  handleFocusEmail = () => {
    this.setState({
      placeholderShowEmail: !this.state.placeholderShowEmail,
      labelShowEmail: !this.state.labelShowEmail,
    });
  }

  handleSelected = (ev) => {
    ev.stopPropagation();
    this.setState({
      isSelected: !this.state.isSelected,
    });
  }

  handleSelectedItems = (item) => {
    const { form } = this.state;

    this.setState({
      isSelectedItems: item,
      isSelected: false,
      form: {
        ...form,
        subject: item,
      },
    });
  }

  handleForm = (field, value) => {
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        [field]: value,
      },
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    const form = ev.target;

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state.form
      })
    }).then(() => {
      this.setState({
        form: {
          name: '',
          company: '',
          email: '',
          subject: '',
          message: '',
        },
        isSelectedItems: '',
        showSuccessMessage: true,
      });

      setTimeout(() => {
        this.setState({
          showSuccessMessage: false,
        });
      }, 1200);
    }).catch(() => { });
  }

  renderForm = () => {
    const { showSuccessMessage, } = this.state;

    return (
      <>
        <ContentFinishSolicitation height background>
          <TitleForm marginTop>
            Entre em contato!
          </TitleForm>
          <Formulario
            name="contact"
            method="post"
            action=""
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            margin={this.state.solicitation}
            onClick={this.handleSelectedForm}
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <FormContent>
              <Label for="name" labelShow={this.state.labelShowName || this.state.inputName}>Nome *</Label>
              <Input
                name="name"
                type="text"
                placeholder={this.state.placeholderShowName === true ? "Nome *" : ''}
                onChange={this.handleChangeName}
                onFocus={this.handleFocusName}
                onBlur={this.handleFocusName}
              />
            </FormContent>
            <FormContent>
              <Label for="name" labelShow={this.state.labelShowCompany || this.state.inputCompany}>Empresa *</Label>
              <Input
                name="company"
                type="text"
                placeholder={this.state.placeholderShowCompany === true ? "Empresa *" : ''}
                onChange={this.handleChangeCompany}
                onFocus={this.handleFocusCompany}
                onBlur={this.handleFocusCompany}
              />
            </FormContent>
            <FormContent>
              <Label for="name" labelShow={this.state.labelShowEmail || this.state.inputEmail}>E-mail *</Label>
              <Input
                name="email"
                type="email"
                placeholder={this.state.placeholderShowEmail === true ? "E-mail *" : ''}
                onChange={this.handleChangeEmail}
                onFocus={this.handleFocusEmail}
                onBlur={this.handleFocusEmail}
              />
            </FormContent>
            <FormContent>
              <FormAssunt onClick={this.handleSelected}>
                <Input
                  type="text"
                  disabled
                  placeholder="Assunto *"
                  value={this.state.isSelectedItems}
                />
                <FormTriangle isSelected={this.state.isSelected}></FormTriangle>
              </FormAssunt>
              <FormSelect isSelected={this.state.isSelected}>
                {this.state.selectedItems.map((item, index) => (
                  <FormSelectList key={index} onClick={() => this.handleSelectedItems(item)}>{item}</FormSelectList>
                ))}
              </FormSelect>
            </FormContent>
            <Textarea
              name="message"
              placeholder="Escreva aqui a sua mensagem:"
              value={this.state.form.message}
              required
              onChange={(ev) => {
                this.handleForm('message', ev.target.value);
              }}
            />
            {showSuccessMessage ? (
              <SuccessContainer>
                <SuccessMessage>
                  Enviado!
                </SuccessMessage>
              </SuccessContainer>
            ) :
              (
                <ButtonForm>ENVIAR</ButtonForm>
              )}
          </Formulario>
          <BoxImage />
        </ContentFinishSolicitation>
      </>
    )
  }

  render() {
    const {
      solicitation,
    } = this.state;

    return (
      <ContainerForm isBig={this.state.solicitation}
        isOpen={this.state.solicitation ? `url(${Proposta})` : `url(${Forma})`}>
        {solicitation ? <ContentFinishSolicitation>
          <TitleForm>
            Ainda em duvida?? 
          </TitleForm>
          <ParagraphForm>
            Deixe a Sedimenta cuidar da gestão financeira da sua empresa para você!!
          </ParagraphForm>
          <ButtonSolicitation
            display={this.state.solicitation}
            onClick={this.handleSolicitacion}>
            Solicite sua proposta
          </ButtonSolicitation>
        </ContentFinishSolicitation> : this.renderForm()}
      </ContainerForm>
    );
  }
}

export default Formulation;