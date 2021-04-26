//Libs
import React from 'react';
import Carousel from 'nuka-carousel';

const ContentCarousel = ({ children }) => {
	return (
		<Carousel
			cellSpacing={32}
			enableKeyboardControls='true'
		// slideIndex={this.state.slideIndex}
		// afterSlide={slideIndex => this.setState({ slideIndex })}
		>
			{children}
		</Carousel>
	);
}

export default ContentCarousel;