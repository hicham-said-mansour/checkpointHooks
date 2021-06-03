import React from 'react';
import "./OvieCard.css";
import StarRatingComponent from 'react-star-rating-component'


function OvieCard(props) {
  return (
    <div className="container">
      <div className="">{props.title} </div>
      <img src= {props.image} alt=""/>
      <div className="">{props.rating}</div>
      <StarRatingComponent 
      value={props.rating} /* number of selected icon (`0` - none, `1` - first) */
      starCount={5} /* number of icons in rating, default `5` */
      starColor={`#ffb444`} /* color of selected icons, default `#ffb400` */
     ></StarRatingComponent>
         
    </div>
  )
}

export default OvieCard
