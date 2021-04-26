import React, { useContext, useEffect, useState } from 'react';
import { faClipboardList, faCommentDots, faList, faPlus, faShoppingCart, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import {useParams} from 'react-router';
import logo from '../../../Images/noun_wifi tower_565072.png';
import { userContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const [user, setUser] = useState(sessionStorage.getItem('email') || '')

    useEffect(() => {
        fetch('https://obscure-temple-65720.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser?.email || user })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const bookData = {
            name: data.name,
            email: data.email,
            package: data.package,
            status: data.status,
            price: data.price
        }
        const url = `https://obscure-temple-65720.herokuapp.com/bookPackage`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })

        alert('You have successfully booked')
        history.push('/bookingList')
    }
    const [packageData, setPackageData] = useState({})
    const {packageId} = useParams();
    console.log(packageId)
    useEffect(() =>{
        fetch('https://obscure-temple-65720.herokuapp.com/bookItem/' + packageId)
        .then(res => res.json())
        .then(data => setPackageData(data))
    }, [])
    
    console.log(packageData)

    return (
        <section className="container-fluid">
            <nav class="navbar navbar-light">
                <a class="navbar-brand fs-2 text-primary fw-bold" href="/">
                    <img src={logo} width="40" height="40" class="d-inline-block ms-2 me-3 align-top" alt="" />
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
                        {isAdmin && <div>
                            <hr />
                            <li className="fs-4 mb-3"><Link to="/orderList"><FontAwesomeIcon icon={faList} /> Order List</Link></li>
                            <hr />
                            <li className="fs-4 mb-3"><Link to="/addService"><FontAwesomeIcon icon={faPlus} /> Add Package</Link></li>
                            <hr />
                            <li className="fs-4 mb-3"><Link to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link></li>
                        </div>}
                    </ul>
                </div>
                <div style={{ backgroundColor: "#dff1f5", borderRadius: "5px" }} className="col-md-8 ms-3 row">
                    <div className="col-md-5">
                        <h3 className="text-secondary ms-5 mt-3">Book A Package</h3>
                        <form className="container pt-3 ps-5 pe-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="mb-3">
                                    <input className="form-control" required name="name" placeholder="Your Name" {...register('name')} />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" required name="email" placeholder="Enter Your Email" {...register('email')} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <input className="form-control" name="package" value={packageData.name} placeholder="Package Name" {...register('package')} />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" value={packageData.price} name="price" placeholder="price" {...register('price')} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <input className="form-control" value="pending" name="status" {...register('status')} />
                                </div>
                            </div>
                            <input className="btn btn-primary mb-4" type="submit" value="Book" />
                        </form>
                    </div>
                    <div className="col-md-4 ms-5 mt-3">
                        <h3 className="text-secondary">Pay here</h3>
                        <ProcessPayment></ProcessPayment>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;