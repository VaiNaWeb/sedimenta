import React, { Component } from 'react';
import styled from 'styled-components';

import Contabilidade from '../assets/contabilidade.svg';
import RH from '../assets/RH.svg';
import Fiscal from '../assets/fiscal.svg';
import Legislação from '../assets/legislação.svg';
import AssessoriaFinanceira from '../assets/assessoriaFinanceira.svg';
import Consultoria from '../assets/consultoria.svg';
import Terceirização from '../assets/terceirização.svg';
import PessoaFisica from '../assets/pessoaFisica.svg';

import setinha from '../assets/setinha.svg';
import fechar from '../assets/fechar.svg';


const ContentServiços = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0 27rem;
  padding-left: 4rem;

  @media (max-width: 768px) {
    margin: 5rem 0 7rem;
    padding-left: 1rem;
	}

  @media (max-width: 648px) {
    width: 100%;
    flex-direction: column;
	}
`;

const ContentServiçosTitle = styled.div`
  width: 25vw;
  color: #373737;
  font-size: 1.4rem;
  font-family: 'Product Sans', Bold;

  @media (max-width: 648px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 3rem;
	}


  @media (max-width: 450px) {
    width: 85vw;
	}

  hr {
    width: 4vw;
    border: 1px solid #707070;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      width: 8vw;
	  }

    @media (max-width: 648px) {
     width: 25vw;
	  }
  }
`;

const ContentBox = styled.div`
  width: 67%;
  background-color: #FFFFFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 5rem;
  box-shadow: 0px 3px 6px #00000029;

  @media (max-width: 1024px) {
    margin-right: 2rem;
	}

  @media (max-width: 768px) {
    width: 83%;
	}

  @media (max-width: 648px) {
    width: 100%;
    background-color: transparent;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: scroll;
    box-shadow: none;
	}
`;

const ContentBoxCaixa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentBoxGalery = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${props => (props.padding ? '2rem 0 0' : '3rem 0 0')};
  background-color: ${props => (props.background)};

  @media (max-width: 648px) {
    width: 95%;
    min-height: 100%;
    background-color: #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 3px 6px #00000029;
    padding: 2rem 4rem;
    margin-right: 2rem;
    opacity: 1;
	}
`;

const ContentBoxImage = styled.img`
  width: ${props => (props.width ? '12%' : '19%')};

  @media (max-width: 648px) {
    width: ${props => (props.widthMobileImg)};
	}
`;

const BoxContentText = styled.span`
  width: 100%;
  display: ${props => (props.isOpen ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BoxTitle = styled.h2`
  width: ${props => (props.width)};
  font-size: 1.2rem;
  font-family: 'Product Sans', Bold;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin: ${props => (props.margin ? '1.5rem 0' : '2rem 0')};

  @media (max-width: 768px) {
    width: ${props => (props.widthMobile)};
	}

  @media (max-width: 648px) {
    width: 50vw;
    font-size: 1.5rem;
  }
`;

const BoxText = styled.p`
  width: 58%;
  font-size: 0.8rem;
  font-family: 'Open Sans', Regular;

  @media (max-width: 768px) {
    width: 70%;
  }
  
  @media (max-width: 648px) {
    width: 65vw;
    font-size: 1rem;
	}
`;

const Box = styled.button`
  background: none;
  border: none;
  color: #992836;
  font-size: 0.75rem;
  font-family: 'Open Sans', SemiBold;
  font-weight: 600;
  margin: 2rem 0;
  outline: none;
  opacity: 1;
  cursor: pointer;

  @media (max-width: 648px) {
    font-size: 0.9rem;
  }
`;

const BoxImage = styled.img`
  width: 13%;
  margin-left: 0.3rem;
`;

const BoxLinha = styled.div`
  height: 15vh;
  border-right: 2px solid #707070;
  position: relative;
  bottom: -25px;
  opacity: 0.25;

  @media (max-width: 648px) {
    display: none;
	}
`;

const BoxContext = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  color: #373737;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  font-size: 0.8rem;
  font-family: 'Open Sans', Regular;
  line-height: 1.5rem;
  padding: 3rem 8.5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 2rem 0;
	}

  @media (max-width: 648px) {
    width: ${props => (props.widthText ? '42%' : '95%')};
    display: ${props => (props.isOpen ? 'flex' : 'none')};
	}
`;

const Desktop = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */

  @media (max-width: 648px) {
    display: none;
	}
`;

const Mobile = styled.div`
  display: none;

  @media (max-width: 648px) {
    display: flex;
	}
`;

const ContentBoxText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBoxContainer = styled.div`
  width: 100%;
`;

const BoxContextText = styled.p`
  margin-bottom: 2rem;
`;

const BoxImageClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0 1.5rem 0;
`;

const ImageClose = styled.button`
  background: none;
  border: none;
  color: #992836;
  font-size: 0.75rem;
  font-family: 'Open Sans', Bold;
  font-weight: 600;
  outline: none;
  cursor: pointer;

  img {
    width: 14%;
    margin-left: 0.3rem;
  }
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

  @media (max-width: 425px) {
    width: 80%;
	}
`;

const SliderBolinha = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${props => (props.selectedClick ? '#373737' : '#A7A7A7')};
  margin-left: 1rem;
  opacity: 1;
  cursor: pointer;
`;

class Services extends Component {
  state = {
    services: {
      isOpen: false,
      isSelected: '',
      slider: 0,
      selectedClickSlider: 0,
    }
  }

  handleClick = (item) => {
    this.setState({
      services: {
        isOpen: true,
        isSelected: item,
      }
    })
  }

  handleClose = (item) => {
    this.setState({
      services: {
        isSelected: item,
      }
    })
  }

  handleClickSlider = (item, select) => {
    this.setState({
      slider: item,
      selectedClickSlider: select,
    })
    document.getElementById(item).scrollIntoView();
  }

  // -----------------------------------------------------

  renderTitleContabilidade = () => (
    <ContentBoxGalery id='list0'>
      <ContentBoxImage widthMobileImg='48%' src={Contabilidade} alt='category' />
      <BoxTitle>contabilidade</BoxTitle>
      <BoxContentText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list0'}>
        <BoxText>A contabilidade da sua empresa sem burocracia,
        entregas seguras e econômicas.</BoxText>
        <Box onClick={() => this.handleClick('list0')}>Saiba mais <BoxImage src={setinha} /></Box>
      </BoxContentText>
    </ContentBoxGalery>
  )

  renderTextContabilidade = () => (
    <BoxContext widthText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list0'}>
      <BoxContextText>A contabilidade da sua empresa sem burocracia,
        entregas seguras e econômicas.</BoxContextText>
      <li>Planejamento e orientação contábil;</li>
      <li>Escrituração contábil convencional;</li>
      <li>Levantamento de balancetes e outros relatórios contábeis;</li>
      <li>Elaboração, análise e consolidação das demonstrações contabéis
        - incluindo as específicas para o terceiro setor:</li>
      <li>Emissão dos Livros Contábeis, versão física e/ou digital; </li>
      <li>Atendimento às obrigações vinculadas ao SPED (Escrituração Contábil Digital).</li>
      <BoxContextText>Nossa Escrituração Contábil e Demonstrações Contábeis são
        adequadas ao padrões contabéis internacionais. </BoxContextText>
      <BoxImageClose>
        <ImageClose onClick={this.handleClose}>Fechar <img src={fechar} alt='close' /> </ImageClose>
      </BoxImageClose>
    </BoxContext>
  )

  // -----------------------------------------------------

  renderTitleRecursosHumanos = () => (
    <ContentBoxGalery id='list1'>
      <ContentBoxImage widthMobileImg='51%' src={RH} alt='category' />
      <BoxTitle width='22vw' widthMobile='30vw'>recursos humanos</BoxTitle>
      <BoxContentText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list1'}>
        <BoxText>Administramos todos os serviços de RH e departamento pessoal
          para você focar no seu negócio.</BoxText>
        <Box onClick={() => this.handleClick('list1')}>Saiba mais <BoxImage src={setinha} /></Box>
      </BoxContentText>
    </ContentBoxGalery>
  )

  renderTextRecursosHumanos = () => (
    <BoxContext isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list1'}>
      <BoxContextText>Administramos todos os serviços de RH e departamento pessoal
        para você focar no seu negócio.</BoxContextText>
      <li>Recrutamento e Seleção;</li>
      <li>Cargos e Salários;</li>
      <li>Avaliação de Desempenho;</li>
      <li>Treinamentos;</li>
      <BoxImageClose>
        <ImageClose onClick={this.handleClose}>Fechar <img src={fechar} alt='close' /> </ImageClose>
      </BoxImageClose>
    </BoxContext>
  )

  // -----------------------------------------------------

  renderTitleDepartamentoFiscal = () => (
    <ContentBoxGalery id='list2'>
      <ContentBoxImage widthMobileImg='27.7%' src={Fiscal} alt='category' />
      <BoxTitle>departamento fiscal</BoxTitle>
      <BoxContentText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list2'}>
        <BoxText>Escrituração Fiscal 100% automatizada e livre de erros.</BoxText>
        <Box onClick={() => this.handleClick('list2')}>Saiba mais <BoxImage src={setinha} /></Box>
      </BoxContentText>
    </ContentBoxGalery>
  )

  renderTextDepartamentoFiscal = () => (
    <BoxContext widthText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list2'}>
      <BoxContextText>Escrituração Fiscal 100% automatizada e livre de erros.</BoxContextText>
      <li>Planejamento e orientação fiscal;</li>
      <li>Escrituração Fiscal Digital</li>
      <li>Apuração de ICMS, PIS, COFINS, ISS e emissão das guias para recolhimento</li>
      <li>Entrega da Declaração de Econômicos-Fiscais; Sped Contribuições, Sped Fiscal,
        PGDAS Simples Nacional, entre outras; </li>
      <li>Apuração de IRPJ e CSLL, elaboração de DCTF, PER-DCOMP e da
        ECF-Escrituração Contábil Fiscal e DIRF anual.</li>
      <li>Declaração de faturamento, cadastro do cliente e emissão de notas
        fiscais.</li>
      <li>Estudos de Cenários de Tributação - Visando redução de custos.</li>
      <BoxImageClose>
        <ImageClose onClick={this.handleClose}>Fechar <img src={fechar} alt='close' /></ImageClose>
      </BoxImageClose>
    </BoxContext>
  )
  // -----------------------------------------------------

  renderTitleLegislação = () => (
    <ContentBoxGalery id='list3'>
      <ContentBoxImage widthMobileImg='28%' src={Legislação} alt='category' />
      <BoxTitle width='15vw' widthMobile='25vw'>legislação de empresas</BoxTitle>
      <BoxContentText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list3'}>
        <BoxText>Abertura, Alterações, Fechamento de empresas e muito
          mais de forma prática e rápida.</BoxText>
        <Box onClick={() => this.handleClick('list3')}>Saiba mais <BoxImage src={setinha} /></Box>
      </BoxContentText>
    </ContentBoxGalery>
  )

  renderTextLegislação = () => (
    <BoxContext isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list3'}>
      <BoxContextText>Abertura, Alterações, Fechamento de empresas e muito
        mais de forma prática e rápida.</BoxContextText>
      <li>Planejamento da Estrutura do Negócio (Idealizado x Realizável)</li>
      <li>Assessoria na confecção do Contrato Social;</li>
      <li>Cadastro/Alteração Vigilância Sanitária, Bombeiros e Entidades de classe;</li>
      <li>Abertura, Alterações e Encerramento de empresas;</li>
      <li>Emissão mensal de Certidões fiscais;</li>
      <li>Manutenção mensal da situação fiscal das empresas -
        Identificação prévia de possíveis problemas fiscais.</li>
      <BoxImageClose>
        <ImageClose onClick={this.handleClose}>Fechar <img src={fechar} alt='close' /> </ImageClose>
      </BoxImageClose>
    </BoxContext>
  )

  // -----------------------------------------------------

  renderTitleAssessoriaFinanceira = () => (
    <ContentBoxGalery id='list4'>
      <ContentBoxImage widthMobileImg='42.5%' src={AssessoriaFinanceira} alt='category' />
      <BoxTitle width='22vw' widthMobile='30vw'>acessoria financeira</BoxTitle>
      <BoxContentText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list4'}>
        <BoxText>Seu patrimônio administrado de forma inteligente.</BoxText>
        <Box onClick={() => this.handleClick('list4')}>Saiba mais <BoxImage src={setinha} /></Box>
      </BoxContentText>
    </ContentBoxGalery>
  )

  renderTextAssessoriaFinanceira = () => (
    <BoxContext widthText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list4'}>
      <BoxContextText>Seu patrimônio administrado de forma inteligente.</BoxContextText>
      <BoxContextText>Nossa equipe desenvolve todas as rotinas financeiras que são
      fundamentais para a sua gestão e organização, incluindo:</BoxContextText>
      <li>Faturamento (Emissão de Notas Fiscais)</li>
      <li>Cobranças</li>
      <li>Contas a Pagar</li>
      <li>Conciliação Bancária</li>
      <li>Gestão de Contratos</li>
      <BoxContextText>Também estão incluidos os relatórios de Fluxos de Caixas e outros
      pertinentes a sua tomada decisão</BoxContextText>
      <BoxImageClose>
        <ImageClose onClick={this.handleClose}>Fechar <img src={fechar} alt='close' /> </ImageClose>
      </BoxImageClose>
    </BoxContext>
  )

  // -----------------------------------------------------

  renderTitleConsultoria = () => (
    <ContentBoxGalery id='list5'>
      <ContentBoxImage widthMobileImg='44%' src={Consultoria} alt='category' />
      <BoxTitle>consultoria</BoxTitle>
      <BoxContentText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list5'}>
        <BoxText>Uma ajuda especializada para manter seu negócio atualizado e legal.</BoxText>
        <Box onClick={() => this.handleClick('list5')}>Saiba mais <BoxImage src={setinha} /></Box>
      </BoxContentText>
    </ContentBoxGalery>
  )

  renderTextConsultoria = () => (
    <BoxContext isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list5'}>
      <BoxContextText>Uma ajuda especializada para manter seu negócio atualizado e legal.</BoxContextText>
      <li>Contábil - gerenciamento dos seus negócios, análise da estrutura
      de custos, elaboração de orçamentos e fluxos de caixa, estudo de
      viabilidade de investimentos, consultoria de investimentos financeiros
        e análise de processos de gestão e Planejamento Tributário.</li>
      <li>Recursos Humanos - Implantação e adequação de políticas e
      ações operacionais, Recrutamento e Seleção, pesquisa de Clima
        Organizacional, avaliação e implantação de Cargos e Salários</li>
      <BoxImageClose>
        <ImageClose onClick={this.handleClose}>Fechar <img src={fechar} alt='close' /> </ImageClose>
      </BoxImageClose>
    </BoxContext>
  )

  // -----------------------------------------------------

  renderTitleTerceirização = () => (
    <ContentBoxGalery id='list6'>
      <ContentBoxImage widthMobileImg='51%' src={Terceirização} alt='category' />
      <BoxTitle>terceirização</BoxTitle>
      <BoxContentText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list6'}>
        <BoxText>Sua empresa reduz custo e otimiza a demanda sem a
          necessidade de criar novos departamentos ou expandir a área física.</BoxText>
        <Box onClick={() => this.handleClick('list6')}>Saiba mais <BoxImage src={setinha} /></Box>
      </BoxContentText>
    </ContentBoxGalery>
  )

  renderTextTerceirização = () => (
    <BoxContext widthText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list6'}>
      <BoxContextText>Sua empresa reduz custo e otimiza a demanda sem a
        necessidade de criar novos departamentos ou expandir a área física.</BoxContextText>
      <BoxContextText>O trabalho de Outsourcing fará com que a Sedimenta seja o seu
        departamento dentro da sua empresa (in company).</BoxContextText>
      <BoxContextText>Desta forma, sua empresa reduz custo e otimiza a demanda sem a
        necessidade de criar novos departamentos ou expandir a área física.</BoxContextText>
      <BoxContextText>Desenvolvemos nosso trabalho em sua empresa, onde serão prestados serviços como:</BoxContextText>
      <li>Gestão Financeira;</li>
      <li>Gestão de Capital Humano;</li>
      <li>Contabilidade.</li>
      <BoxImageClose>
        <ImageClose onClick={this.handleClose}>Fechar <img src={fechar} alt='close' /> </ImageClose>
      </BoxImageClose>
    </BoxContext>
  )

  // -----------------------------------------------------

  renderTitlePessoaFisica = () => (
    <ContentBoxGalery padding id='list7'>
      <ContentBoxImage width widthMobileImg='39%' src={PessoaFisica} alt='category' />
      <BoxTitle margin>pessoa física</BoxTitle>
      <BoxContentText isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list7'}>
        <BoxText>Administração justa e simplificada.</BoxText>
        <Box onClick={() => this.handleClick('list7')}>Saiba mais <BoxImage src={setinha} /></Box>
      </BoxContentText>
    </ContentBoxGalery>
  )

  renderTextPessoaFisica = () => (
    <BoxContext isOpen={this.state.services.isOpen && this.state.services.isSelected === 'list7'}>
      <BoxContextText>Administração justa e simplificada.</BoxContextText>
      <li>Declaração de Imposto de Renda</li>
      <li>Gestão de Empregados Domésticos (Babás, motoristas, domésticas e etc) </li>
      <li>Previdência Social (Aposentadoria)</li>
      <BoxImageClose>
        <ImageClose onClick={this.handleClose}>Fechar <img src={fechar} alt='close' /> </ImageClose>
      </BoxImageClose>
    </BoxContext>
  )

  // -----------------------------------------------------

  render() {
    const { selectedClickSlider } = this.state;

    console.log('selectedClickSlider', selectedClickSlider)

    return (
      <ContentServiços id='serviços'>
        <ContentServiçosTitle>
          <hr></hr>
          <h3>CONHEÇA NOSSOS SERVIÇOS</h3>
        </ContentServiçosTitle>
        <ContentBox>
          <ContentBoxCaixa>
            <ContentBoxText>
              {this.renderTitleContabilidade()}
              <BoxLinha></BoxLinha>
              <ContentBoxContainer>
                {this.renderTitleRecursosHumanos()}
                <Mobile>
                  {this.renderTextRecursosHumanos()}
                </Mobile>
              </ContentBoxContainer>
            </ContentBoxText>
            <ContentBoxContainer>
              {this.renderTextContabilidade()}
              <Desktop>
                {this.renderTextRecursosHumanos()}
              </Desktop>
            </ContentBoxContainer>
          </ContentBoxCaixa>
          <ContentBoxCaixa>
            <ContentBoxText>
              {this.renderTitleDepartamentoFiscal()}
              <BoxLinha></BoxLinha>
              <ContentBoxContainer>
                {this.renderTitleLegislação()}
                <Mobile>
                  {this.renderTextLegislação()}
                </Mobile>
              </ContentBoxContainer>
            </ContentBoxText>
            <ContentBoxContainer>
              {this.renderTextDepartamentoFiscal()}
              <Desktop>
                {this.renderTextLegislação()}
              </Desktop>
            </ContentBoxContainer>
          </ContentBoxCaixa>
          <ContentBoxCaixa>
            <ContentBoxText>
              {this.renderTitleAssessoriaFinanceira()}
              <BoxLinha></BoxLinha>
              <ContentBoxContainer>
                {this.renderTitleConsultoria()}
                <Mobile>
                  {this.renderTextConsultoria()}
                </Mobile>
              </ContentBoxContainer>
            </ContentBoxText>
            <ContentBoxContainer>
              {this.renderTextAssessoriaFinanceira()}
              <Desktop>
                {this.renderTextConsultoria()}
              </Desktop>
            </ContentBoxContainer>
          </ContentBoxCaixa>
          <ContentBoxCaixa>
            <ContentBoxText>
              {this.renderTitleTerceirização()}
              <BoxLinha></BoxLinha>
              <ContentBoxContainer>
                {this.renderTitlePessoaFisica()}
                <Mobile>
                  {this.renderTextPessoaFisica()}
                </Mobile>
              </ContentBoxContainer>
            </ContentBoxText>
            <ContentBoxContainer>
              {this.renderTextTerceirização()}
              <Desktop>
                {this.renderTextPessoaFisica()}
              </Desktop>
            </ContentBoxContainer>
          </ContentBoxCaixa>
        </ContentBox>
        <Slider>
          <SliderBolinha selectedClick={selectedClickSlider === 0 || selectedClickSlider === undefined ? true : false} onClick={() => this.handleClickSlider('list0', 0)}></SliderBolinha>
          <SliderBolinha selectedClick={selectedClickSlider === 1 ? true : false} onClick={() => this.handleClickSlider('list1', 1)}></SliderBolinha>
          <SliderBolinha selectedClick={selectedClickSlider === 2 ? true : false} onClick={() => this.handleClickSlider('list2', 2)}></SliderBolinha>
          <SliderBolinha selectedClick={selectedClickSlider === 3 ? true : false} onClick={() => this.handleClickSlider('list3', 3)}></SliderBolinha>
          <SliderBolinha selectedClick={selectedClickSlider === 4 ? true : false} onClick={() => this.handleClickSlider('list4', 4)}></SliderBolinha>
          <SliderBolinha selectedClick={selectedClickSlider === 5 ? true : false} onClick={() => this.handleClickSlider('list5', 5)}></SliderBolinha>
          <SliderBolinha selectedClick={selectedClickSlider === 6 ? true : false} onClick={() => this.handleClickSlider('list6', 6)}></SliderBolinha>
          <SliderBolinha selectedClick={selectedClickSlider === 7 ? true : false} onClick={() => this.handleClickSlider('list7', 7)}></SliderBolinha>
        </Slider>
      </ContentServiços>
    );
  }
}

export default Services;