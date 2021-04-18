import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section style={{backgroundColor: "#dff1f5"}} className="container-fluid p-5">
            <div className="container">
                <h1 className="fw-bolder text-primary">CONTACT US</h1>
                <p className="text-secondary"><small>Do you have a project you would like us to work on? Or perhaps a few questions? <br /> Contact us and we will be more than happy to assist you.</small></p>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h3 className="text-secondary">Our Office</h3>
                        <hr />
                        <div className="justify-content-between mb-3">
                            <FontAwesomeIcon className="text-primary fs-2 me-2" icon={faPhone} />
                            <span className="fs-3 text-secondary">01993596075</span>
                        </div>
                        <p className="fs-6 text-secondary">Email: ultranet@gmail.com</p>
                        <p className="fs-6 text-secondary">34 Bree Street</p>
                        <p className="fs-6 text-secondary">12th Floor, The Terraces <br/><span>Cape Town</span></p>
                        <p className="fs-6 text-secondary">8000</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h3 className="text-secondary">Say Hello</h3>
                        <hr />
                        <form>
                            <input type="text" class="form-control mb-2" id="exampleFormControlInput1" placeholder="Name"></input>
                            <input type="email" class="form-control mb-2" id="exampleFormControlInput1" placeholder="Telephone"></input>
                            <input type="email" class="form-control mb-2" id="exampleFormControlInput1" placeholder="Email" />
                            <textarea class="form-control mb-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <input type="submit" className="btn btn-primary text-white" />
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-secondary">About Us</h3>
                        <hr />
                        <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolorum earum cum molestias, cumque voluptate. Quidem at sed quis quisquam.</p>
                        <FontAwesomeIcon className="fs-1 me-3 text-primary" icon={faFacebook} />
                        <FontAwesomeIcon className="fs-1 me-3 text-primary" icon={faTwitter} />
                        <FontAwesomeIcon className="fs-1 text-danger" icon={faYoutube}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;