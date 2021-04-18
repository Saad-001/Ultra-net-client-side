import React from 'react';
import { useHistory } from 'react-router';
import logo from '../../../Images/noun_wifi tower_565072.png';

const Navbar = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/logIn')
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bolder text-primary" href="/">
                        <img src={logo} alt="" width="33" height="25" class="d-inline-block me-2 align-text-top" />
                    Ultra-Net
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-primary fw-bold" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-primary fw-bold" href="#services">Packages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-primary fw-bold" href="#testimonials">Testimonials</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-primary fw-bold" href="/review">Dashboard</a>
                            </li>                            
                        </ul>
                        <form class="d-flex">
                            <button onClick={handleClick} class="btn btn-outline-primary text-white btn-primary">Sign In</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;