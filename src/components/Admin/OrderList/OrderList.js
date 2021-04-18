import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../Images/noun_wifi tower_565072.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCommentDots, faList, faPlus, faShoppingCart, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../App';


const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const [user, setUser] = useState(sessionStorage.getItem('email') || '')

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
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
        fetch('http://localhost:5000/orderList')
        .then(res => res.json())
        .then(data => setOrders(data))
    })
    

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
                    <hr />
                    <li className="fs-4 mb-3"><Link to="/manageOrder"><FontAwesomeIcon icon={faTasks} /> Manage Order</Link></li>
                 </div>}
                </ul>
            </div>

            <div style={{ backgroundColor: "#dff1f5", borderRadius: "5px", overflow: "auto" }} className="mb-3 col-md-8">
                <h3 className="text-secondary ms-3 mt-5 mb-4">Order List</h3>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Package</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       { orders.map(order => <tr>
                        <th scope="row">{order.package}</th>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.status}</td>
                        </tr> )}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    );
};

export default OrderList;