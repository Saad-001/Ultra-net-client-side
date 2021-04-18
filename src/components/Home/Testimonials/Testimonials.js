import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])

    console.log(testimonials)
    return (
       <section id="testimonials" className="container p-5 mb-3">
           <div className="text-center">
                <h2 className="text-secondary fw-bold">Testimo<span className="text-primary">nials</span></h2>
           </div>
            <div className="row justify-content-around mt-5">
                {
                    testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                }
            </div>
       </section>
    );
};

export default Testimonials;