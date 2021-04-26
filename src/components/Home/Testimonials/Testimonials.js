import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('https://obscure-temple-65720.herokuapp.com/testimonials')
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
                  testimonials.length === 0 && <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                }
                {
                    testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                }
            </div>
       </section>
    );
};

export default Testimonials;