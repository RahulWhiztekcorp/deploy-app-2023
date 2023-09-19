import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
    const starRating = Math.round(rating); // Round the rating to the nearest whole number

    return (
        <div className='d-flex flex-wrap text-warning'>
        {Array.from({ length: starRating }, (_, index) => (
                        <FaStar key={index} />
            ))}
        </div>
    );
};

export default RatingStars;