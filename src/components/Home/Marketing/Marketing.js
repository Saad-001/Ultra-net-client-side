import { faBroadcastTower, faLaptopCode, faNetworkWired, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../../../Images/bannerpic.jpg';

const Marketing = () => {
    return (
        <section style={{backgroundColor: "#dff1f5"}} className="container-fluid p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 img-fluid">
                        <img style={{ width: "100%", borderRadius: "10px"}} src={image} alt=""/>
                    </div>
                    <div className="col-md-6 ps-5 mt-3">
                        <h1 className="text-secondary fw-bold">Enjoy The <span className="text-primary">Next Gen</span> Internet</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo hic deserunt perspiciatis fugiat aliquid!</p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="justify-content-between">
                                    <FontAwesomeIcon className="fs-1 pe-2 text-info" icon={faBroadcastTower}/>
                                    <span className="text-secondary fs-4">Better Coverage</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="justify-content-between">
                                    <FontAwesomeIcon className="fs-1 pe-2 text-primary" icon={faLaptopCode}/>
                                    <span className="text-secondary fs-4">Energy Efficient</span>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="justify-content-between">
                                    <FontAwesomeIcon className="fs-1 pe-2" icon={faWifi}/>
                                    <span className="text-secondary fs-4">1 Gbps Data Rate</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="justify-content-between">
                                    <FontAwesomeIcon className="fs-1 pe-2 text-danger" icon={faNetworkWired}/>
                                    <span className="text-secondary fs-4">More Data Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketing;