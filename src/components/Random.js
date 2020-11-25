import React from 'react';

const Random = props => {
   return( 
        <div>
            <p>Random value between {props.min} and {props.max} ={">"} {props.min + Math.floor(Math.random() * (props.max-props.min))}</p>
        </div>    
 )
}

export default Random;