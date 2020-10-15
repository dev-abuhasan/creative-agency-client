import React from 'react';
import './Css/Header.css';
import Carousel from "react-elastic-carousel";
import carouselOne from '../../images/carousel-1.png';
import carouselTow from '../../images/carousel-2.png';
import carouselThe from '../../images/carousel-3.png';
import carouselFor from '../../images/carousel-4.png';
import carouselFiv from '../../images/carousel-5.png';
import Item from './CaruselItme/Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const CarouselSection = () => {


    return (
        <>
            <h3 className="text-center mb-5">Here are some of <span className="text-success">our works</span> </h3>
            <div className="carouselSection">
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <img src={carouselOne} alt=""/>
                    </Item>
                    <Item>
                        <img src={carouselTow} alt=""/>
                    </Item>
                    <Item>
                        <img src={carouselFiv} alt=""/>
                    </Item>
                    <Item>
                        <img src={carouselFor} alt=""/>
                    </Item>
                    <Item>
                        <img src={carouselThe} alt=""/>
                    </Item>
                </Carousel>
            </div>
        </>
    );
};

export default CarouselSection;