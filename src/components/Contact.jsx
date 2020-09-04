import React from 'react';
import './contact.css';
import { FaPhone } from 'react-icons/fa';
import { MdEmail, MdWeb,MdLocationOn } from 'react-icons/md';
import {Link} from 'react-scroll';

const Contact = () => {
    return(
         <div id="contact">
            
            <div className="containerC contact_div">
            <h2 style={{color: 'B40404', textAlign: 'center'}}>Contact us</h2>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    <div className="container">
                        <form>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{color: '#fff'}}>
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
                                <label for="exampleFormControlInput1" class="form-label" style={{color: '#fff'}}>
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
                                <label for="exampleFormControlInput1" class="form-label" style={{color: '#fff'}}>
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
                                <label for="exampleFormControlInput1" class="form-label" style={{color: '#fff'}}>
                                    Message
                                </label>
                                <textarea
                                className="form-control"
                                id="exampleFormControlTestarea1"
                                rows="8">
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button class="btn-submit btn-outline-primary" type="submit">
                                 <Link to="#" className="btn-contact-us">Submit</Link>
                                </button>
                            </div>
                            <hr/>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <div class="row mx-auto">
            <h4 style={{color: '#fff', margin: 'auto', letterSpacing: '5px'}}><FaPhone/>{" "}Phone Number</h4>
          </div>
            <p style={{textAlign: 'center', color: '#fff'}}>9812345678</p>
            <div class="row mx-auto">
            <h4 style={{color: '#fff', margin: 'auto', letterSpacing: '5px'}}><MdEmail/>{" "}Email Address</h4>
          </div>
            <p style={{textAlign: 'center', color: '#fff'}}>info.elami@gmail.com</p>
            <div class="row mx-auto">
            <h4 style={{color: '#fff', margin: 'auto', letterSpacing: '5px'}}><MdWeb/>{" "}Website Address</h4>
          </div>
            <p style={{textAlign: 'center', color: '#fff'}}>www.elami.com</p>
          <div class="row mx-auto">
            <h4 style={{color: '#fff', margin: 'auto', letterSpacing: '5px'}}><MdLocationOn/>{" "}Address</h4>
          </div>
            <p style={{textAlign: 'center', color: '#fff'}}>Itahari-4 Halgada</p>
        <div class="row mx-auto">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.1224720854357!2d87.26862371409298!3d26.676565276640243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6b0b269da71b%3A0x8bbdd8d3e68ae128!2sItahari%20Halgada!5e0!3m2!1sne!2snp!4v1598643836015!5m2!1sne!2snp" width="100%" height="278" frameborder="0" style={{border:'0', margin:'10px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       </div>
                    </div>
                </div>
            </div>
         </div> 
    );
}

export default Contact;