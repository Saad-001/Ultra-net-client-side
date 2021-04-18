import React, { useContext, useEffect, useState } from 'react';
import { faClipboardList, faCommentDots, faList, faPlus, faShoppingCart, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import logo from '../../../Images/noun_wifi tower_565072.png';
import { userContext } from '../../../App';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(sessionStorage.getItem('email') || '')
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

    const onSubmit = data => {
        console.log(data)
        const serviceData = {
            name: data.name,
            price: data.price,
            description: data.description,
        }
        const url = `http://localhost:5000/addService`;
        console.log(serviceData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })

        window.location.reload()
    }

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
                        <li className="fs-4 mb-3"><Link to="/addService"><FontAwesomeIcon icon={faPlus} /> Add package</Link></li>
                        <hr />
                        <li className="fs-4 mb-3"><Link to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link></li>
                        <hr />
                        <li className="fs-4 mb-3"><Link to="/manageOrder"><FontAwesomeIcon icon={faTasks} /> Manage Order</Link></li>
                    </div>}
                    </ul>
                </div>

               {isAdmin && <div style={{ backgroundColor: "#dff1f5", borderRadius: "5px" }} className="col-md-8">
                    <h3 className="text-secondary ms-5 mt-5">Add Package</h3>
                    <form className="container p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <h5>Package Title</h5>
                                <input className="form-control" required name="name" placeholder="Service Name" {...register('name')} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <h5>Add Price</h5>
                                <input className="form-control" required name="price" placeholder="price" {...register('price')} />                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <h5>Add Description</h5>
                                <textarea class="form-control" required name="description" placeholder="Description" id="floatingTextarea2" {...register('description')} style={{height: "100px"}}></textarea>
                            </div>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Save" />
                    </form>
                </div>}
            </div>
        </section>
    );
};

export default AddService;