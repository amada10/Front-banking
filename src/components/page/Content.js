import React from 'react';
import BankCard from '../cards/BankCard';
import { Container, Row, Col } from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from '@trendyol-js/react-carousel';

const Content = () =>{
    return(
        <div className='body' style={styles.body}>
            <Container>
                <div style={styles.card_credit}>
                    <Carousel show={1} slide={3} swiping={true}>
                        <BankCard />
                        <BankCard />
                        <BankCard />
                    </Carousel>
                </div>
            </Container>

            <Container>
                <div className="stat" style={styles.stat}>
                    <Col>
                        Text
                    </Col>
                    <Col>
                        Dama
                    </Col>
                </div>
            </Container>
        </div>
    );
}

const styles = {
    body: {
        margin: '5px 10px',
        display: 'flex',
        flexDirection: 'column'
    },
    card_credit: {
        position: 'relative',
        top: '20px',
        height: '100px'
    },
    stat: {
        margin: '0px auto'
    }

}

export default Content;