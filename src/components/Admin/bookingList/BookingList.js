import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../Images/noun_wifi tower_565072.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCommentDots, faList, faPlus, faShoppingCart, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../App';
import BookingItem from './BookingItem';

const BookingList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const [user, setUser] = useState(sessionStorage.getItem('email') || '')

    const [listItem, setListItem] = useState([])

    useEffect(() => {
        fetch('https://obscure-temple-65720.herokuapp.com/isAdmin', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({email: loggedInUser?.email || user})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [])

    useEffect(() => {
        fetch('https://obscure-temple-65720.herokuapp.com/bookingList?email='+ user)
        .then(res => res.json())
        .then(data => setListItem(data))
    },[user])

    console.log(listItem)
    
    

    return (
        <section className="container-fluid">
        <nav class="navbar navbar-light">
        <a class="navbar-brand fs-2 text-primary fw-bold" href="/">
            <img src={logo} width="40" height="40" class="d-inline-block ms-2 me-3 align-top" alt=""/>
            Ultra-Net
        </a>
        </nav>
        <div className="row">
            <div style={{ height: "100%" }} className="col-md-3">
                <ul style={{ listStyleType: "none" }}>
                    <li className="fs-4 mb-3 mt-4"><Link to="/book"><FontAwesomeIcon icon={faShoppingCart} /> Book</Link></li>
                    <hr />
                    <li className="fs-4 mb-3"><Link to="/bookingList"><FontAwesomeIcon icon={faClipboardList} /> Booking List</Link></li>
                    <hr />
                    <li className="fs-4 mb-3"><Link to="/review"><FontAwesomeIcon icon={faCommentDots} /> Review</Link></li>
                { isAdmin && <div>
                   <hr />
                    <li className="fs-4 mb-3"><Link to="/orderList"><FontAwesomeIcon icon={faList} /> Order List</Link></li>
                    <hr />
                    <li className="fs-4 mb-3"><Link to="/addService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link></li>
                    <hr />
                    <li className="fs-4 mb-3"><Link to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link></li>
                 </div>}
                </ul>
            </div>

            <div style={{ backgroundColor: "#dff1f5", borderRadius: "5px", overflow: "auto" }} className="mb-3 col-md-8">
                <h3 className="text-secondary ms-3 mt-5 mb-4">Booking List</h3>
                <div className="row justify-content-around">
                    {
                        listItem.map(item => <BookingItem item={item}></BookingItem>)
                    }
                </div>
            </div>
        </div>
    </section>
    );
};

export default BookingList;