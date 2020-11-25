import React from 'react';

const Greetings = props => {
    console.log(props);
    let message = "Ola"
    if (props.lang === "de") {
        message = "Hallo"
    }  else {
         message = "Bonjour"
    }
   return( 
        <div>
            <p>{message} {props.children}</p>
        </div>    
 )
}
export default Greetings;