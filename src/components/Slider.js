import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const ContentSlider = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8rem;
  background: linear-gradient(to right, #992836, #4D141B);
`;

const ContentTitleSlider = styled.div`
  width: 29%;

  hr {
    width: 15%;
    border: 1px solid #FFFFFF;
    margin: 0 0 2rem 10rem;
    opacity: 1;
  }
`;

const TitleSlider = styled.h2`
  width: 100%;
  color: #FFFFFF;
  font-family: 'Product Sans', Bold;
  text-align: center;
  text-transform: uppercase;
  opacity: 1;
`;

const CarouselSlider = styled.div`
  width: 100%;
`;

const ContentSliderMeio = styled.div`
  width: 65%;
  height: 47vh;
  background-color: #FFFFFF;
  color: #373737;
  font-family: 'Open Sans', Regular;
  font-size: 0.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1.3rem 0.5rem;
  margin-top: 3.5rem;
  outline: none;
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
`;

class Slider extends Component {
  state = {
  }

  componentDidMount() {
    this.handleInterval()
  }

  handleClick = () => {
    this.setState({
      menu: !this.state.menu,
    });
  }

  handleSlider = (item) => {
    this.setState({
      sliderHeader: item,
    })
    clearInterval(this.interval);
    this.handleInterval()
  }

  handleInterval = () => {
    this.interval = setInterval(
      this.handleTransition, 6000
    )
  }

  handleTransition = () => {
    const { sliderHeader } = this.state;

    const slide = sliderHeader === 2 ? 0 : sliderHeader + 1;

    this.handleSlider(slide)
  }


  render() {
    return (
      <ContentSlider>
        <ContentTitleSlider>
          <hr></hr>
          <TitleSlider>o que nossos clientes falam da gente!!</TitleSlider>
        </ContentTitleSlider>
        <CarouselSlider>
          <Carousel
            autoplay='true'
            cellAlign={"left"}
            slidesToShow={3}
            slideWidth="500px"
            swiping={true}
            dragging={true}
            withoutControls={true}
            disableEdgeSwiping={false} 
            >
            <ContentSliderMeio>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit.
              Aenean luctus libero id velit laoreet dignissim.
              Cras vitae venenatis felis. Phasellus egestas justo eu aliquam sodales.</p>
              <ContentSliderParagraph>Erlane, cargo, Empresa</ContentSliderParagraph>
            </ContentSliderMeio>
            <ContentSliderMeio>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit.
              Aenean luctus libero id velit laoreet dignissim.
              Cras vitae venenatis felis. Phasellus egestas justo eu aliquam sodales.</p>
              <ContentSliderParagraph>Cicero, cargo, Empresa</ContentSliderParagraph>
            </ContentSliderMeio>
            <ContentSliderMeio>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit.
              Aenean luctus libero id velit laoreet dignissim.
                Cras vitae venenatis felis. Phasellus egestas justo eu aliquam sodales.</p>
              <ContentSliderParagraph>Evelyn, cargo, Empresa</ContentSliderParagraph>
            </ContentSliderMeio>
            <ContentSliderMeio>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit.
              Aenean luctus libero id velit laoreet dignissim.
                Cras vitae venenatis felis. Phasellus egestas justo eu aliquam sodales.</p>
              <ContentSliderParagraph>Evelyn, cargo, Empresa</ContentSliderParagraph>
            </ContentSliderMeio>
          </Carousel>
          <SliderCarousel>
            <SliderBolinha onClick={() => this.handleSlider(0)}></SliderBolinha>
            <SliderBolinha onClick={() => this.handleSlider(1)}></SliderBolinha>
            <SliderBolinha onClick={() => this.handleSlider(2)}></SliderBolinha>
          </SliderCarousel>
        </CarouselSlider>
      </ContentSlider>
    );
  }
}

export default Slider;