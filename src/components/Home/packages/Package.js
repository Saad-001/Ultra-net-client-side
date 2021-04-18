import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory} from 'react-router';
import './package.css';

const Package = ({pac}) => {
    const history = useHistory();
    const handleClick = (id) => {
        history.push(`/book/${id}`)
    }
    return (        
            <div class="card package-style mb-4" style={{width: "18rem"}}>
                <span className="card-img-top fs-1 mt-4 text-center text-primary"><FontAwesomeIcon icon={faBroadcastTower}/></span>
                    <div class="card-body">
                        <h5 class="card-title">{pac.name}</h5>
                        <p class="card-text">{pac.description}</p>
                        <div className="card-footer bg-light">
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold text-secondary fs-4">{pac.price}</span>
                                <button onClick={() => handleClick(pac._id)} class="btn fw-bold btn-primary">Book</button>
                            </div>
                        </div>
                    </div>
            </div>
    );
};

export default Package;