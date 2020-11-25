import React from 'react';

const Rating = props => {

    let rating = Math.round(props.children)

   return( 
    
        <div> 
           <p>{`${rating === 0 ? '☆☆☆☆☆' : rating === 1 ? '★☆☆☆☆' : rating === 2 ? '★★☆☆☆' : rating === 3 ? '★★★☆☆' : rating === 4 ? '★★★★☆' : '★★★★★'}`}</p>
           
        </div>    
    )
}
export default Rating;