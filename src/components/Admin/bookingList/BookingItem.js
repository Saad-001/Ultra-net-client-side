import React from 'react';

const BookingItem = ({item}) => {
    return (
        <div class="card bg-light mb-3" style={{width: "16rem"}}>
            <div class="card-header row text-danger">
             <span className="fs-3">{item.package}</span>
             <small className="text-info"><span className="fw-bold">Status :</span> {item.status}</small>
             <small className="text-info"><span className="fw-bold">Price :</span> {item.price}</small>
            </div>            
            <div class="card-body">
                <h4 class="card-title text-primary fw-bold">{item.name}</h4>
                <p class="card-text text-secondary">{item.email}</p>
            </div>
        </div>
    );
};

export default BookingItem;