import React from 'react';

const CreditCard = props => {
   return( 
        <div style={{
            color: `${props.color}`,
            backgroundColor: `${props.bgColor}`,
            width: `250px`, height: `100px`
            }}> 
           <p>{props.type}<br/>{props.number.replace(/\d(?=\d{4})/g, "*")}<br/> 
            Expires: {props.expirationMonth}/{props.expirationYear}   {props.bank}<br/>
            {props.owner}</p>
        </div>    
    )
}
export default CreditCard;
