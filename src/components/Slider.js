//Libs
import React, { Component } from 'react';
import styled from 'styled-components';

//Component
import Carousel from './Carousel';


const Section = styled.section`
  width: 100%;
  background: linear-gradient(to right, #992836, #4D141B);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ContentSlider = styled.div`
  max-width: 1440px;
  width: 100%;
  /* padding: 4rem 0 0; */
  /* margin-bottom: 5rem; */

  @media (max-width: 768px) {
    padding: 0 0 5rem;
  }
`;

const ContentCarouselMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
  }

  .slider-control-centerleft {
    display: none;
  }

  .slider-control-centerright {
    display: none;
  }

  .slider-control-bottomcenter {
    bottom: -48px !important;
  }

  .paging-item {
    padding-right: 1rem;
  }
  
  button {
    outline: none;
    fill: #FFFFFF !important;
  }
`;

const ContentTitleSlider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5.5rem;
  padding-top: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
	}

  hr {
    width: 4rem;
    background-color: #FFFFFF;
    border: 2px solid #FFFFFF;
    opacity: 1;
  }
`;

const TitleSlider = styled.h2`
  width: 30%;
  color: #FFFFFF;
  font-size: 1.313rem;
  font-family: 'Spartan', Bold;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
  opacity: 1;

  @media (max-width: 1023px) {
    width: 35%;
	}

  @media (max-width: 768px) {
    width: 43%;
	}

  @media (max-width: 648px) {
    width: 90%;
	}
`;

const CarouselSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: space-between;
	}

  @media (max-width: 648px) {
    align-items: flex-end;
	}
`;

const SessionSlider = styled.section`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  z-index: 0;
`;

const ContentSliderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    width: 95%;
	}
 
  @media (max-width: 768px) {
    display: none;
	}
`;

const SliderArrow = styled.svg`
  margin: 0 2rem 0 2rem;
  transform: ${props => props.isRotation && 'rotate(180deg)'};
  position: relative;
  bottom: ${props => props.botton && '28px'};
  cursor: pointer;
  z-index: 1;

  &:hover {
    path {
      stroke: #FFFFFF;
      opacity: 1;
    }
  }

  @media (max-width: 1023px) {
    margin: ${props => (props.selected ? '0 2rem 0 2rem' : '0 1rem 0 2rem')};
	}

  @media (max-width: 768px) {
    bottom: ${props => props.botton && '-100px'};
    margin: ${props => (props.selected ? '0 2rem 0 6rem' : '0 6rem 0 2rem')};
	}

  @media (max-width: 648px) {
    display: none; 
	}
`;

const ContentSliderMeio = styled.div`
  width: 24.8em;
  height: 10rem;
  background-color: ${props => (props.selected ? '#FFFFFF' : '#A37D82')};
  color: ${props => (props.selected ? '#373737' : '#4A2529')};
  font-size: 0.7rem;
  font-family: 'Open Sans', Regular;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-around;
  line-height: 18px;
  padding: 0.5rem 1.25rem 0;
  margin-bottom: 3rem;
  transform: ${props => (props.selected && 'scale(1.4)')};
  outline: none;

  @media (max-width: 1024px) {
    width: 21em;
	}

  @media (max-width: 1023px) {
    width: 21em;
	}

  @media (max-width: 768px) {
    width: 47%;
    height: 14rem;
    background-color: #FFFFFF;
    color: #373737;
    justify-content: space-between;
    font-size: 0.9rem;
    line-height: 22px;
    padding: 2rem 1.25rem 1.25rem;
    margin-bottom: 0;
    transform: none;
	}

  @media (max-width: 648px) {
    width: 90%;
  }
`;

const ContentSliderParagraph = styled.p`
  /* margin-top: 2rem; */
`;

const SliderCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
	}
`;

const SliderBolinha = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${props => (props.isSelected ? '#FFFFFF' : '#8A4A52')};
  margin-left: 1.3rem;
  opacity: 1;
  cursor: pointer;
`;

class Slider extends Component {
  state = {
    slideIndex: 1,
    previousSlide: 0,
    nextSlide: 2,
  }

  list = [
    {
      text: '"Estamos muito satisfeitos com o atendimento personalizado da Sedimenta JPM. Contabilidade não é só número! E nós sabemos que podemos contar com eles."',
      name: 'Pedro Herzog, Plano B',
    },
    {
      text: 'A Sedimenta JPM é uma empresa muito competente. Desde 2017 tem nos auxiliado em todas as questões contábeis e financeiras do Instituto sempre com muita agilidade, destreza técnica e simpatia.',
      name: 'Aline, Instituto Precisa Ser',
    },
    {
      text: 'Uma empresa que tem como Meta a qualidade nos serviços e no atendimento ao Cliente. Outro diferencial é a Competência, honestidade e seriedade.',
      name: 'Wallace Caldas, Velatura',
    }
  ]

  handleArrowPrevious = () => {
    let { slideIndex, previousSlide, nextSlide } = this.state;

    if (slideIndex > 0 && slideIndex <= 2) {
      slideIndex = slideIndex - 1;
    } else {
      slideIndex = 2
    }
    previousSlide = slideIndex === 0 ? 2 : slideIndex - 1
    nextSlide = slideIndex === 2 ? 0 : slideIndex + 1

    this.setState({
      slideIndex,
      previousSlide,
      nextSlide,
    })
  }

  handleArrowNext = () => {
    let { slideIndex, previousSlide, nextSlide } = this.state;

    slideIndex = slideIndex === 2 ? 0 : slideIndex + 1;
    previousSlide = slideIndex === 0 ? 2 : slideIndex - 1
    nextSlide = slideIndex === 2 ? 0 : slideIndex + 1

    this.setState({
      slideIndex,
      previousSlide,
      nextSlide,
    })


  }

  handleSlider = i => {
    let { slideIndex, previousSlide, nextSlide } = this.state;

    slideIndex = i;
    previousSlide = i === 0 ? 2 : i - 1
    nextSlide = i === 2 ? 0 : i + 1

    this.setState({
      slideIndex,
      previousSlide,
      nextSlide,
    })
  }

  renderSlider = () => {
    const { slideIndex, previousSlide, nextSlide } = this.state;

    return (
      <>
        <SessionSlider>
          <ContentSliderMeio>
            <p>{this.list[previousSlide].text}</p>
            <ContentSliderParagraph>{this.list[previousSlide].name}</ContentSliderParagraph>
          </ContentSliderMeio>
        </SessionSlider>
        <SessionSlider>
          <ContentSliderMeio selected>
            <p>{this.list[slideIndex].text}</p>
            <ContentSliderParagraph>{this.list[slideIndex].name}</ContentSliderParagraph>
          </ContentSliderMeio>
        </SessionSlider>
        <SessionSlider>
          <ContentSliderMeio>
            <p>{this.list[nextSlide].text}</p>
            <ContentSliderParagraph>{this.list[nextSlide].name}</ContentSliderParagraph>
          </ContentSliderMeio>
        </SessionSlider>
      </>
    )
  }

  render() {
    const { slideIndex } = this.state;

    return (
      <Section>
        <ContentSlider id='clientes'>
          <ContentTitleSlider>
            <hr></hr>
            <TitleSlider>o que os clientes falam da nossa empresa!!</TitleSlider>
          </ContentTitleSlider>
          <CarouselSlider>
            <figure onClick={this.handleArrowPrevious} >
              <SliderArrow selected botton xmlns="http://www.w3.org/2000/svg" width="22.262" height="36.018"
                viewBox="0 0 22.262 36.018" ><path id="Caminho_374" data-name="Caminho 374"
                d="M28.958,16.232,14.617,0,0,16.232" transform="translate(2.499 32.487) 
                rotate(-90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="5" opacity="0.2" />
              </SliderArrow>
            </figure>
            <ContentSliderBox>
              {this.renderSlider()}
            </ContentSliderBox>
            <figure onClick={this.handleArrowNext} >
              <SliderArrow botton isRotation xmlns="http://www.w3.org/2000/svg" width="22.262"  height="36.018" viewBox="0 0 22.262 36.018"><path id="Caminho_374" data-name="Caminho 374"
                d="M28.958,16.232,14.617,0,0,16.232" transform="translate(2.499 32.487) 
                rotate(-90)" fill="none" stroke="#fff" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="5" opacity="0.2" />
              </SliderArrow>
            </figure>
          </CarouselSlider>
          <SliderCarousel>
            <SliderBolinha isSelected={slideIndex === 0} onClick={() => this.handleSlider(0)}></SliderBolinha>
            <SliderBolinha isSelected={slideIndex === 1} onClick={() => this.handleSlider(1)}></SliderBolinha>
            <SliderBolinha isSelected={slideIndex === 2} onClick={() => this.handleSlider(2)}></SliderBolinha>
          </SliderCarousel>
          <ContentCarouselMobile>
            <Carousel>
              {this.list.map(i => (
                <SessionSlider>
                  <ContentSliderMeio selected>
                    <p>{i.text}</p>
                    <ContentSliderParagraph>{i.name}</ContentSliderParagraph>
                  </ContentSliderMeio>
                </SessionSlider>
              ))}
            </Carousel>
          </ContentCarouselMobile>
        </ContentSlider >
      </Section>
    )
  }
}

export default Slider;