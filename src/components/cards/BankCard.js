import React from 'react';

import Cards from "react-credit-cards";
import "../../assets/css/BankCard.css";
import "react-credit-cards/es/styles-compiled.css";

const BankCard = () => {
    return(
        <div className="conteneur">
             <Cards
                className="card"
                cvc={123}
                expiry={1112}
                focused="name"
                name="Eric Pierlot"
                number={"0612354484888888"}
                issuer="visa"
                preview
            />
        </div>
    );
}

export default BankCard;