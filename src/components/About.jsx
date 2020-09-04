import React from 'react';
import image from '../assets/1.png';
import './aboutpage.css';
import {Link} from 'react-scroll';
import Register from './Register';

const About = () => {
    return (
        <div id="about">
        <div class="about-title">
            <h2 class="text-center">About Us</h2>
         </div>
        <section id="header" class="d-flex align-items-center">
            <div class="container-fluid">
                <div class="row mb-3">
                    <div class="col-10 mx-auto">
                        <div class='row'> 
                        <div class="col-md-8 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                            <h1>
                                This is my About page of
                                <strong class="brand-name"> elami  </strong>
                            </h1>
                            <h3 class="my-3">
                                We are here helping you find your perfect life partner around the world.
                            </h3>
                            <div class="row">
                            <div class="mb-3">
                                <Link
                                aciveClass="active"
                                href="/contact"
                                to="contact"
                                smooth={true}
                                offset={-70}
                                duration={800}class="btn-contact-us">Contact Us</Link>
                            </div>
                            <div class="mb-3">
                                <a href= "/register" class="btn-contact-us">Register Now</a>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4 order-1 order-lg-2 header-img">
                            <img src={image} class="img-fluid animated" alt="AboutImg"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default About;