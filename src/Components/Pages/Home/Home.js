import React from 'react';
import CarouselSection from '../ShearCompo/CarouselSection';
import Customer from '../ShearCompo/Customer';
import Footer from '../ShearCompo/Footer';
import Header from '../ShearCompo/Header';
import Review from '../ShearCompo/Review';
import Services from '../ShearCompo/Services';
import './Home.css';

const Home = () => {
    document.title = "Creative-Agency Home";
    return (
        <>
           <Header />
           <main id="main" className="container">
                <Customer />
                <Services />
                <section id="carousel-part">
                    <CarouselSection />
                </section>
                <Review />
                <Footer />
           </main>
        </>
    );
};

export default Home;