import React from 'react';
import Navbar from '../Navbar/Navbar';
import bannerImg from '../../../Images/internet-speeds-CONTENT-2018.gif';
import './Header.css';


const Header = () => {
    return (
        <div className="container-fluid img-fluid header-container p-5">
            <div className="container">
                <Navbar></Navbar>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2 className="text-white mt-5 ms-5 me-5 mb-3">Don't Suffer The Buffer <br/> Get Supper Internet</h2>
                        <p className="text-white ms-5"><small>We offer a variety of Internet plans for various purposes <br/> with speed up to 50 Mbit per second. 2-week free trial is available.</small></p>
                        <button className="btn btn-light text-primary fw-bold ms-5 mt-3 mb-5"><a href="#services" style={{textDecoration: "none"}}>See Packages</a></button>
                    </div>
                    <div className="col-md-6 ps-2 img-fluid">
                        <img style={{ width: "95%", borderRadius: "10px"}} src={bannerImg} alt=""/>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Header;