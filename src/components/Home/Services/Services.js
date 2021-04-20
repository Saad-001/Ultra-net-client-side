import React, { useEffect, useState } from 'react';
import Package from '../packages/Package';

const Services = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch(`https://obscure-temple-65720.herokuapp.com/packages`)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    console.log(packages)
    return (
        <section id="services" className="container p-5">
            <h3 className="text-secondary text-center mb-5">Our Awesome <span className="text-primary">Packages</span></h3>
            <div className="justify-content-around row">
                {
                    packages.map(pac => <Package pac={pac}></Package>)
                }
            </div>
        </section>
    );
};

export default Services;