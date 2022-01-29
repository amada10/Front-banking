import React from 'react';
import BankCard from '../cards/BankCard';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from '@trendyol-js/react-carousel';

const Content = () =>{
    return(
        <>
            <Carousel>
                <BankCard />
                <BankCard />
                <BankCard />
                <BankCard />
            </Carousel>, 
        </>
    );
}

export default Content;