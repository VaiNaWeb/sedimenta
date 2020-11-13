import React, { Component } from 'react';
import styled from 'styled-components';
// import Carousel from 'nuka-carousel';

const ContentSlider = styled.div`
  width: 100%;
  height: 90vh;
  background: linear-gradient(to right, #992836, #4D141B);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
`;

const ContentTitleSlider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  hr {
    width: 15%;
    border: 1px solid #FFFFFF;
    opacity: 1;
  }
`;

const TitleSlider = styled.h2`
  width: 65%;
  color: #FFFFFF;
  font-family: 'Product Sans', Bold;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
  opacity: 1;
`;

const CarouselSlider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentSliderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  
`;

const ContentSliderMeio = styled.div`
  width: 27%;
  height: 32vh;
  background-color: #FFFFFF;
  color: #373737;
  font-family: 'Open Sans', Regular;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 1.3rem 0;
  margin-top: 3.5rem;
  outline: none;
  transform: ${props => (props.transformScale && 'scale(1.2)')};
`;

const ContentSliderParagraph = styled.p`
  align-self: flex-end;
  margin-top: 2rem;
`;

const SliderCarousel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 3rem;
`;

const SliderBolinha = styled.div`
  width: 1vw;
  height: 2vh;
  border-radius: 50%;
  border: 1px solid #E0E0E0;
  background-color: #E0E0E0;
  margin-left: 1.3rem;

  &:hover {
    background-color: #FFFFFF;
  }

  @media (max-width: 648px) {
    width: 2.1vw;
    height: 2vh;
	}
`;

class Slider extends Component {
  state = {
    slider: 'slider1',
  }

  handleClick = () => {
    this.setState({
      menu: !this.state.menu,
    });
  }

  handleSlider = (item) => {
    this.setState({
      slider: item,
    })
    // document.getElementById(item).scrollIntoView();
  }


  render() {
    return (
      <ContentSlider>
        <ContentTitleSlider>
          <hr></hr>
          <TitleSlider>o que nossos clientes falam da gente!!</TitleSlider>
        </ContentTitleSlider>
        <CarouselSlider>
          <ContentSliderBox>
            <ContentSliderMeio transformScale={this.state.slider === 'slider0'}>
              <p>"Estamos muito satisfeitos com o atendimento
              personalizado da Sedimenta JPM. Contabilidade não é
                só número! E nós sabemos que podemos contar com eles."</p>
              <ContentSliderParagraph>Plano B</ContentSliderParagraph>
            </ContentSliderMeio>
            <ContentSliderMeio transformScale={this.state.slider === 'slider1'}>
              <p>A Sedimenta JPM é uma empresa muito competente. Desde 2017 tem
              nos auxiliado em todas as questões contábeis e financeiras do
                Instituto sempre com muita agilidade, destreza técnica e simpatia.</p>
              <ContentSliderParagraph>Instituto Precisa Ser</ContentSliderParagraph>
            </ContentSliderMeio>
            <ContentSliderMeio transformScale={this.state.slider === 'slider2'}>
              <p>Uma empresa que tem como Meta a qualidade nos serviços
              e no atendimento ao Cliente. Outro diferencial é a Competência,
                honestidade e seriedade.</p>
              <ContentSliderParagraph>Erlane, cargo, Empresa</ContentSliderParagraph>
            </ContentSliderMeio>
          </ContentSliderBox>
          <SliderCarousel>
            <SliderBolinha onClick={() => this.handleSlider('slider0')}></SliderBolinha>
            <SliderBolinha onClick={() => this.handleSlider('slider1')}></SliderBolinha>
            <SliderBolinha onClick={() => this.handleSlider('slider2')}></SliderBolinha>
          </SliderCarousel>
        </CarouselSlider>
      </ContentSlider>
    );
  }
}

export default Slider;