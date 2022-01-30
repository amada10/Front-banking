import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { IconContext } from "react-icons";
import {  IoIosNotificationsOutline } from "react-icons/io";

import Cards from "react-credit-cards";
import "../../assets/css/BankCard.css";
import "react-credit-cards/es/styles-compiled.css";

const BankCard = () => {
    return(
        <>
            <div className='conteneur'>
                <div className='titre'>
                    <h2>Your cards</h2>
                    <button className='add'>New card +</button>
                </div>
                <div className='notification'>
                <IconContext.Provider value={{ size: "3em" ,className: "global-class-name" }}>
                        <div>
                            <IoIosNotificationsOutline />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            <Container>
                <Row>
                    <div className="cont_card">
                        <Cards
                            cvc={123}
                            expiry={2112}
                            focused="name"
                            name="Diamondra RKTVO"
                            number={"5512354484885555"}
                            issuer="visa"
                            preview
                        />

                        <Cards
                            cvc={123}
                            expiry={1510}
                            focused="name"
                            name="Eric Manana"
                            number={"5103544848888880"}
                            issuer="boa"
                            preview
                        />

                        <Cards
                            cvc={111}
                            expiry={1112}
                            focused="name"
                            name="Sergio Louis"
                            number={"4047354484887845"}
                            issuer="bfv"
                            preview
                        />
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default BankCard;