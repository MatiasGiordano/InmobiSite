import React from 'react';
import SlickSlider from 'react-slick';
import Slide from './Slide';
import Arrow from './Arrow';

function Slider(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow: <Arrow direction="next" />,
        prevArrow: <Arrow direction="prev" />
    };

    return (
        <SlickSlider {...settings}>
            {props.imagenes.map((slide, index) => (
                <Slide key={index} data={slide} />
            ))}
        </SlickSlider>
    );
}

export default Slider;