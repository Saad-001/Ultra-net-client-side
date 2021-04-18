import React from 'react';
import image from '../../../Images/enjoy_triangle_movie-300x204.png';

const ExtraSection = () => {
    return (
        <section style={{border: '1px solid lighblue'}} className="container p-4 mb-5">
            <h3 className="text-center text-secondary">Enjoy Unlimited Movies <span className="text-primary">With Triangle</span></h3>
            <div className="row p-5">
                <div className="col-md-7 me-5 mt-4">
                    <p className="tex-secondary pt-5 ">We provide high-speed internet and with real IPs that are not shared by another workstation or computer. This makes our internet perfect for streaming and entertainment applications, such as streaming Netflix and High Definition (HD) content. We value your opinion and this why we want you to give us a call today.</p>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={image} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default ExtraSection;