import React from 'react';

const DriverCard = props => {

    let rating = Math.round(props.children)

   return( 
    
        <div> 
            <img src={props.img} style={{width: `100px`}}/>
            <p>{props.name}</p>
            <p>{`${rating === 0 ? '☆☆☆☆☆' : rating === 1 ? '★☆☆☆☆' : rating === 2 ? '★★☆☆☆' : rating === 3 ? '★★★☆☆' : rating === 4 ? '★★★★☆' : '★★★★★'}`}</p>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>    
    )
}
export default DriverCard;