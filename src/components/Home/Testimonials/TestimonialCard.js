import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import userImg from '../../../Images/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png';

const TestimonialCard = ({testimonial}) => {
    return (
        <div style={{width: "18rem"}} className="card shadow mb-3">
            <div className ="d-flex mt-3">
                <img className="me-1" style={{height: "60px"}} src={userImg} alt=""/>
                <div>
                    <span className="fs-4 d-block fw-bold">{testimonial.name}</span>
                    <span className="">{testimonial.companyName}</span>
                </div>
            </div>
            <div className="mt-3 ms-1">
                <FontAwesomeIcon className="text-warning" icon={faStar}/>
                <FontAwesomeIcon className="text-warning" icon={faStar}/>
                <FontAwesomeIcon className="text-warning" icon={faStar}/>
                <FontAwesomeIcon className="text-warning" icon={faStar}/>
                <FontAwesomeIcon className="text-warning" icon={faStar}/>
            </div>
            <p className="card-text p-2">
                {testimonial.description}
            </p>            
        </div>
    );
};

export default TestimonialCard;