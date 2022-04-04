import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee } from '@fortawesome/free-solid-svg-icons'

const ReviewsDisplay = (props) => {
    const {name, username, id, address} = props.user
    return (

        <div>
            <div className="col">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Id: {id}</h5>
                        <h5 className="card-title">Name: {name}</h5>
                        <h5 className="card-title">User Name:{username}</h5>
                        <h5 className="card-title">City: {address.city}</h5>
                        <p>Review:<FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faCoffee} />
                         </p>
                        
                    </div>
                </div>
            </div>



        </div>


    );
};

export default ReviewsDisplay;