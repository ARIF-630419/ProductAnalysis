import React from 'react';
import "./Review.css";
const Review = (props) => {
    const { name, text, rating } = props.review;
    return (
        <div>
            <h3>Name : {name}</h3>
            <p><span>Reviews Text :</span> {text}</p>
            <p><small><span>Rating :</span> {rating}</small></p>
        </div>
    );
};

export default Review;