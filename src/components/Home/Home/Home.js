import React from 'react';
import ExtraSection from '../ExtraSection/ExtraSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Marketing from '../Marketing/Marketing';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExtraSection></ExtraSection>            
            <Testimonials></Testimonials>
            <Marketing></Marketing>                        
            <Footer></Footer>
        </div>
    );
};

export default Home;