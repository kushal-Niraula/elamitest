import React from 'react';
import './feedback.css';
import SemiNav from './SemiNav';
import Foot from '../components/Foot';
import {Link} from 'react-scroll';

const Feedback = () => {
    return(
        <>
         <div id="feedback">
         <SemiNav />
            <div className="contact-label col-md-6 col-12 mx-auto">
            <div className="container contact_div">
                <div className="row">
                    <div className="contact-label col-md-10 col-12 mx-auto">
                        <form>
                        <div className=" contact-head my-5">
                            <h2 className="text-center">Feedback</h2>
                        </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Full Name
                                </label>
                                <input
                                type="text"
                                class="form-control"
                                id="exampleFromControlInput1"
                                placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Phone
                                </label>
                                <input
                                type="number"
                                class="form-control"
                                id="exampleFromControlInput1"
                                placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email Address
                                </label>
                                <input
                                type="email"
                                class="form-control"
                                id="exampleFromControlInput1"
                                placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Message
                                </label>
                                <textarea
                                className="form-control"
                                id="exampleFormControlTestarea1"
                                rows="3">
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button class="btn-submit btn-outline-primary" type="submit">
                                 <Link to="#" className="btn-contact-us">Submit</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
         </div> 
         <Foot />
         </>
    );
}

export default Feedback;
