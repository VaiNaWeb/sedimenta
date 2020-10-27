import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const ContentSlider = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;
  background-color: #D66B78;
`;

const ContentSliderMeio = styled.div`
  width: 55%;
  height: 35vh;
  background-color: #FFFFFF;
  color: #373737;
  padding: 0 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin: auto; */
  margin-top: 3.5rem;
  outline: none;
`;

const ContentSliderParagraph = styled.p`
  align-self: flex-end;
  margin-top: 2rem;
`;


class Slider extends Component {
  state = {
  }


  render() {
    return (
      <ContentSlider>
        <Carousel
          autoplay='true'
          cellAlign={"left"}
          slidesToShow={3}
          slideWidth="530px"
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
              <ContentSliderParagraph>Jeziel, cargo, Empresa</ContentSliderParagraph>
            </ContentSliderMeio>
            <ContentSliderMeio>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit.
                Aenean luctus libero id velit laoreet dignissim.
                Cras vitae venenatis felis. Phasellus egestas justo eu aliquam sodales.</p>
              <ContentSliderParagraph>Kelvin, cargo, Empresa</ContentSliderParagraph>
            </ContentSliderMeio>
            <ContentSliderMeio>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit.
                Aenean luctus libero id velit laoreet dignissim.
                Cras vitae venenatis felis. Phasellus egestas justo eu aliquam sodales.</p>
              <ContentSliderParagraph>Rhuan, cargo, Empresa</ContentSliderParagraph>
            </ContentSliderMeio>
          </Carousel>
      </ContentSlider>
    );
  }
}

export default Slider;