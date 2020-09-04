import React from 'react';
import './sendstory.css';
import {Link} from 'react-scroll';
import SemiNav from '../components/SemiNav';
import Foot from '../components/Foot';

const Sendstory = () => {
    return(
        <div >
            <SemiNav/>
         <div id="send-story">
            <div className="contact-label col-md-6 col-12 mx-auto">
            <div className="container contact_div">
                <div className="row">
                    <div className="contact-label col-md-10 col-12 mx-auto">
                        <form>
                        <div className=" contact-head my-5">
                            <h2 className="text-center">Send your Story</h2>
                        </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                     Name of Groom
                                </label>
                                <input
                                type="text"
                                class="form-control"
                                id="exampleFromControlInput1"
                                placeholder="Groom name"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                     Name of Bride
                                </label>
                                <input
                                type="text"
                                class="form-control"
                                id="exampleFromControlInput1"
                                placeholder="Bride name"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                     Address
                                </label>
                                <input
                                type="text"
                                class="form-control"
                                id="exampleFromControlInput1"
                                placeholder="Address of couple"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Description
                                </label>
                                <textarea
                                className="form-control"
                                id="exampleFormControlTestarea1"
                                placeholder="Write about your ssuccess story here."
                                rows="5">
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                     Upload your photo
                                </label>
                                <input
                                type="file"
                                class="form-control"
                                id="exampleFromControlInput1"
                                />
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
         <Foot/>
         </div>
    );
}

export default Sendstory;