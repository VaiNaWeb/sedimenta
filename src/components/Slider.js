import React, { Component } from 'react';
import styled from 'styled-components';

const ContentSlider = styled.div`
  width: 100%;
  background: linear-gradient(to right, #992836, #4D141B);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0 0;
  margin-bottom: 4rem;
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

  @media (max-width: 648px) {
    width: 80%;
	}
`;

const CarouselSlider = styled.div`
  width: 100%;
  margin: 6rem 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 648px) {
    margin: 4rem 0 2rem;
    align-items: center;
	}
`;

const SessionSlider = styled.section`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  order: ${props => (props.order)};

  @media (max-width: 648px) {
    margin-right: 1.5rem;
    /* padding-left: 0.8rem; */
    order: ${props => (props.orderMobile)};

    :last-child {
      padding-right: 1.5rem;
    }
	}
`;

const ContentSliderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  @media (max-width: 648px) {
    padding-left: 1rem;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;
	}
`;

const SliderArrow = styled.svg`
  margin: 0 2rem 0 2rem;
  position: relative;
  bottom: 30px;
  cursor: pointer;

  &:hover {
    path {
      stroke: #FFFFFF;
      opacity: 1;
    }
  }

  @media (max-width: 648px) {
    display: none; 
	}
`;

const SliderArrowRotate = styled.svg`
  margin: 0 2rem 0 2rem;
  position: relative;
  bottom: 30px;
  transform: rotate(180deg);
  cursor: pointer;

  &:hover {
    path {
      stroke: #FFFFFF;
      opacity: 1;
    }
  }

  @media (max-width: 648px) {
    display: none; 
	}
`;

const ContentSliderMeio = styled.div`
  width: 24.8em;
  background-color: ${props => (props.selected ? '#FFFFFF' : '#A37D82')};
  color: ${props => (props.selected ? '#373737' : '#4A2529')};
  font-size: 0.7rem;
  font-family: 'Open Sans', Regular;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 2rem 1.3rem 1rem;
  margin-bottom: 3.5rem;
  transform: ${props => (props.selected && 'scale(1.4)')};
  outline: none;

  @media (max-width: 1024px) {
    width: 18em;
	}

  @media (max-width: 648px) {
    width: 25em;
    background-color: #FFFFFF;
    color: #373737;
    transform: none;
  }
`;

const ContentSliderParagraph = styled.p`
  margin-top: 2rem;
`;

const SliderCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;

  @media (max-width: 648px) {
    display: none;
	}
`;

const SliderBolinha = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${props => (props.isSelected ? '#FFFFFF' : '#8A4A52')};
  margin-left: 1.3rem;
  opacity: 1;
  cursor: pointer;
`;

class Slider extends Component {
  state = {
    selectedSlide: 1,
    previousSlide: 0,
    nextSlide: 2,
  }

  list = [
    {
      text: '"Estamos muito satisfeitos com o atendimento personalizado da Sedimenta JPM. Contabilidade não é só número! E nós sabemos que podemos contar com eles."',
      name: 'Pedro Herzog, Sócio-diretor',
    },
    {
      text: 'A Sedimenta JPM é uma empresa muito competente. Desde 2017 tem nos auxiliado em todas as questões contábeis e financeiras do Instituto sempre com muita agilidade, destreza técnica e simpatia.',
      name: 'Aline, Instituto Precisa Ser',
    },
    {
      text: 'Uma empresa que tem como Meta a qualidade nos serviços e no atendimento ao Cliente. Outro diferencial é a Competência, honestidade e seriedade.',
      name: 'Wallace Caldas, Sócio-diretor, Velatura',
    }
  ]

  handleArrowPrevious = () => {
    let { selectedSlide, previousSlide, nextSlide } = this.state;

    if ( selectedSlide > 0 && selectedSlide <= 2) {
      selectedSlide = selectedSlide - 1;
    } else {
      selectedSlide = 2
    }
    previousSlide = selectedSlide === 0 ? 2 : selectedSlide - 1
    nextSlide = selectedSlide === 2 ? 0 : selectedSlide + 1

    this.setState({
      selectedSlide,
      previousSlide,
      nextSlide,
    })
  }

  handleArrowNext = () => {
    let { selectedSlide, previousSlide, nextSlide } = this.state;

    selectedSlide = selectedSlide === 2 ? 0 : selectedSlide + 1;
    previousSlide = selectedSlide === 0 ? 2 : selectedSlide - 1
    nextSlide = selectedSlide === 2 ? 0 : selectedSlide + 1

    this.setState({
      selectedSlide,
      previousSlide,
      nextSlide,
    })
  }

  handleSlider = i => {
    let { selectedSlide, previousSlide, nextSlide } = this.state;

    selectedSlide = i;
    previousSlide = i === 0 ? 2 : i - 1
    nextSlide = i === 2 ? 0 : i + 1

    this.setState({
      selectedSlide,
      previousSlide,
      nextSlide,
    })
  }

  render() {
    const { selectedSlide, previousSlide, nextSlide } = this.state;

    return (
      <ContentSlider id='clientes'>
        <ContentTitleSlider>
          <hr></hr>
          <TitleSlider>o que nossos clientes falam da gente!!</TitleSlider>
        </ContentTitleSlider>
        <CarouselSlider>
          <SliderArrow xmlns="http://www.w3.org/2000/svg" width="22.262" height="36.018" 
            viewBox="0 0 22.262 36.018" ><path id="Caminho_374" data-name="Caminho 374" 
            d="M28.958,16.232,14.617,0,0,16.232" transform="translate(2.499 32.487) 
            rotate(-90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="5" opacity="0.2" onClick={this.handleArrowPrevious}/>
          </SliderArrow>
          <ContentSliderBox>
            <SessionSlider>
              <ContentSliderMeio>
                <p>{this.list[previousSlide].text}</p>
                <ContentSliderParagraph>{this.list[previousSlide].name}</ContentSliderParagraph>
              </ContentSliderMeio>
            </SessionSlider>
            <SessionSlider>
              <ContentSliderMeio selected>
                <p>{this.list[selectedSlide].text}</p>
                <ContentSliderParagraph>{this.list[selectedSlide].name}</ContentSliderParagraph>
              </ContentSliderMeio>
            </SessionSlider>
            <SessionSlider>
              <ContentSliderMeio>
                <p>{this.list[nextSlide].text}</p>
                <ContentSliderParagraph>{this.list[nextSlide].name}</ContentSliderParagraph>
              </ContentSliderMeio>
            </SessionSlider>
          </ContentSliderBox>
            <SliderArrowRotate xmlns="http://www.w3.org/2000/svg" width="22.262" height="36.018"
              viewBox="0 0 22.262 36.018"><path id="Caminho_374" data-name="Caminho 374"
              d="M28.958,16.232,14.617,0,0,16.232" transform="translate(2.499 32.487) 
              rotate(-90)" fill="none" stroke="#fff" stroke-linecap="round" 
              stroke-linejoin="round" stroke-width="5" opacity="0.2" onClick={this.handleArrowNext}/>
            </SliderArrowRotate>
        </CarouselSlider>
        <SliderCarousel>
          <SliderBolinha isSelected={selectedSlide === 0} onClick={() => this.handleSlider(0)}></SliderBolinha>
          <SliderBolinha isSelected={selectedSlide === 1} onClick={() => this.handleSlider(1)}></SliderBolinha>
          <SliderBolinha isSelected={selectedSlide === 2} onClick={() => this.handleSlider(2)}></SliderBolinha>
        </SliderCarousel>
      </ContentSlider >
    )
  }
}

export default Slider;