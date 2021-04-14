import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

import People1 from '../assets/Eduardo.png';
import People2 from '../assets/Christiani.png';
import People3 from '../assets/Mauro.png';

import Icon from '../assets/icon.svg';


const ContentCargo = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin: 2.5rem 0 0;

  @media (max-width: 648px) {
    margin: 0;
    justify-content: flex-start;
    align-items: flex-start;
	}
`;

const CargoMobile = styled.div`
  display: none;

@media (max-width: 648px) {
  width: 100%;
  height: 70vh;
  background-color: transparent;
  box-shadow: none;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-left: 1rem;
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
    fill: #373737 !important;
  }
`;

const SessionCargo = styled.section`
  width: 22%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  
  @media (max-width: 1024px) {
    width: 30%;
	}

  @media (max-width: 648px) {
    width: 100vw;
	}
`;

const ImageCargo = styled.img`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  object-position: top;

  @media (max-width: 648px) {
    width: 91%;
  }
`;

const ContentCargoCaixa = styled.div`
  height: 25vh;
  background-color: #FFFFFF;
  border-left: 5px solid #801422;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-shadow: 0px 3px 6px #00000029;

  :last-child {
    border-radius: 0 0 5px 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 22vh;
	}

  @media (max-width: 648px) {
    width: 91%;
    height: 24vh;
    background-color: #FFFFFF;
    border-left: 5px solid #801422;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 6px #00000029;
  }
  
  hr {
    width: 3.1vw;
    border: 1px solid #373737;
    margin-bottom: 1rem;
    opacity: 1;

    @media (max-width: 648px) {
      width: 10vw;
      /* margin-bottom: 1.5rem; */
	  }
  }

  img {
    margin-top: 1.2rem;

  @media (max-width: 648px) {
      margin-top: 0.9rem;
    }
  }
`;

const ContentBoxTitle = styled.p`
  color: #373737;
  font-size: 1rem;
  font-family: 'Spartan', Bold;
  font-weight: bold;
  text-transform: uppercase;
`;

const ContentBoxParagraph = styled.p`
  color: #373737;
  font-size: 0.75rem;
  font-family: 'Spartan', Medium;
  padding-top: 0.3rem;
`;

const Cargo = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 4rem;

  @media (min-width: 1600px) {
    justify-content: space-between;
	}

  @media (max-width: 1023px) {
    margin: 5rem 0 0;
	}

  @media (max-width: 648px) {
    display: none;
  }
`;

class Home extends Component {
  state = {
    persons: [
      {
        imgPerson: People1,
        name: "Eduardo Pereira",
        area: " CEO - Área Contábil e Fiscal;",
        linkeId: Icon,
        link: "https://www.linkedin.com/in/eduardo-pereira-4b686013/",
      },
      {
        imgPerson: People2,
        name: "CRISTIANI NASCIMENTO",
        area: " CEO - Leg. de empresas, parafiscal;",
        linkeId: Icon,
        link: "https://www.linkedin.com/in/christiani-nascimento-23b06018b/",
      },
      {
        imgPerson: People3,
        name: "Mauro Moura",
        area: " CEO - Capital Humano;",
        linkeId: Icon,
        link: "https://www.linkedin.com/in/mauro-moura-5a406a74/",
      },
    ]
  }

  renderPerson = () => {
    return this.state.persons.map((item, index) => {
      return (
        <SessionCargo id='cargo0'>
          <ImageCargo src={item.imgPerson} alt='people' />
          <ContentCargoCaixa>
            <hr></hr>
            <ContentBoxTitle>{item.name}</ContentBoxTitle>
            <ContentBoxParagraph>{item.area}</ContentBoxParagraph>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.linkeId} alt='linkedin' />
            </a>
          </ContentCargoCaixa>
        </SessionCargo>
      )
    })
  }

  render() {
    return (
      <ContentCargo>
        <CargoMobile>
          <Carousel
            cellSpacing={32}
            enableKeyboardControls='true'
          >
            {this.renderPerson()}
          </Carousel>
        </CargoMobile>
        <Cargo>
          {this.renderPerson()}
        </Cargo>
      </ContentCargo>
    )
  }
}

export default Home;