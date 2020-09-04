import React from 'react';
import SemiNav from '../components/SemiNav';
import Foot from '../components/Foot';
import {Form, Col, Button,} from 'react-bootstrap';
import './register.css';

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  middleName: "",
  lastName: "",
  country: "",
  state: "",
  city: "",
  dateOfBirth: "",
  gender: "",
  phoneNumber: "",
  checkBox: "",
  emailError: "",
  passwordError: "",
  confirmPasswordError: "",
  firstNameError: "",
  middleNameInfo: "",
  lastNameError: "",
  countryError: "",
  stateError: "",
  cityError: "",
  dateOfBirthError: "",
  phoneNumberError: "",
  checkBoxError: ""
}

class Register extends React.Component {

    state= initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
        });
    };

    validate = () => {
      let emailError= "";
      let passwordError= "";
      let confirmPasswordError= "";
      let firstNameError= "";
      let middleNameInfo= "";
      let lastNameError= "";
      let countryError= "";
      let stateError= "";
      let cityError= "";
      let dateOfBirthError= "";
      let phoneNumberError= "";
      let checkBoxError= "";

      if (!this.state.email.includes('@')) {
        emailError = 'invalid email';
      }
      if (!this.state.password){
        passwordError = 'Password cannot be empty';
      }
      if (!this.state.confirmPassword){
        confirmPasswordError = 'Password cannot be empty';
      }
      if (!this.state.firstName){
        firstNameError = 'First Name cannot be empty';
      }
      if (!this.state.middleName){
        middleNameInfo = 'Looks Ok';
      }
      if (!this.state.lastName){
        lastNameError = 'Last Name cannot be empty';
      }
      if (!this.state.country) {
        countryError = 'Country cannot be empty';
      }
      if (!this.state.state){
        stateError = 'State cannot be empty';
      }
      if (!this.state.city){
        cityError = 'City cannot be empty';
      }
      if (!this.state.dateOfBirth) {
        dateOfBirthError = 'DOB cannot be empty';
      }
      if (!this.state.phoneNumber){
        phoneNumberError = 'Phone number cannot be empty';
      }
      if (this.state.password && this.state.confirmPassword)
      {
        if (!(this.state.password == this.state.confirmPassword))
        {
          confirmPasswordError = 'Password mismatch';
        }
      }

      if (emailError || firstNameError || middleNameInfo || lastNameError || countryError || stateError || cityError || dateOfBirthError || phoneNumberError || checkBoxError || passwordError || confirmPasswordError){
        this.setState({emailError, firstNameError, middleNameInfo, lastNameError, countryError, stateError, cityError, dateOfBirthError, phoneNumberError, checkBoxError, passwordError, confirmPasswordError});
        return false;
      }
      return true;
    };

    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
      }
    };

    render(){
    const register_styles = {
    marginTop : '65px'
    }
        return(
          <div>
        <div id="register">
          <SemiNav />
          <div className="container" style={register_styles}>
            <div className="row">
              <div className="col-10 mx-auto">
                  <Form onSubmit={this.handleSubmit}>
                  <div className=" register-head my-5">
                            <h2 className="text-center">User Registration</h2>
                        </div>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFname">
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control name="firstName"
                      placeholder="First Name" 
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      />
                      <div style={{fontSize:12, color: "red"}}>
                        {this.state.firstNameError}
                      </div>
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridLname">
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control name="lastName"
                      placeholder="Last Name" 
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      />
                      <div style={{fontSize:12, color: "red"}}>
                        {this.state.lastNameError}
                      </div>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control as="select" defaultValue="Male">
                        <option>Male</option>
                        <option>Female</option>
                      </Form.Control>
                    </Form.Group>
                   </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridDob">
                      <Form.Label>Date Of Birth*</Form.Label>
                      <Form.Control name="dateOfBirth"
                      placeholder="YYYY/MM/DD"
                      value={this.state.dateOfBirth}
                      onChange={this.handleChange}
                      />
                      <div style={{fontSize:12, color: "red"}}>
                        {this.state.dateOfBirthError}
                      </div>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCountry">
                      <Form.Label>Country*</Form.Label>
                      <Form.Control name="country"
                      placeholder="Currenty Living Country" 
                      value={this.state.country}
                      onChange={this.handleChange}
                      />
                      <div style={{fontSize:12, color: "red"}}>
                        {this.state.countryError}
                      </div>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label> City*</Form.Label>
                      <Form.Control name="city"
                      placeholder="City"
                      value={this.state.city}
                      onChange={this.handleChange}
                      />
                      <div style={{fontSize:12, color: "red"}}>
                        {this.state.cityError}
                      </div>
                    </Form.Group>
                  </Form.Row>
                  <hr />
                
                  <p> Please upload your profile picture* </p>
                  <Form.Row>
                    <Form.Group>
                      <Form.File id="formControlFile1"/>
                    </Form.Group>
                  </Form.Row>
                  <hr />

                  <p> Please upload the photo (both front and back) of your verified document (Citizenship/Driving License). This is just for verification and we will not share it with anyone.</p>
                  <Form.Row>
                    <Form.Group>
                      <Form.File id="formControlFile2" label="Front side of document*"/>
                    </Form.Group>

                    <Form.Group>
                      <Form.File id="formControlFile3" label="Back side of document*"/>
                    </Form.Group>
                  </Form.Row>
                  <hr />

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email*</Form.Label>
                      <Form.Control name="email" 
                      type="email" 
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      />
                      <div style={{fontSize:12, color: "red"}}>
                        {this.state.emailError}
                      </div>
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password*</Form.Label>
                      <Form.Control type="password" name="password"
                      placeholder="Password" 
                      value={this.state.password}
                      onChange={this.handleChange}
                      />
                      <div style={{fontSize:12, color: "red"}}>
                        {this.state.passwordError}
                      </div>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCpassword">
                      <Form.Label>Confirm*</Form.Label>
                      <Form.Control type="password" 
                      placeholder="Confirm Password" 
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                      />
                      <div style={{fontSize:12, color: "red"}}>
                        {this.state.confirmPasswordError}
                      </div>
                    </Form.Group>
                  </Form.Row>
                
                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I agree all the terms and conditions and privacy policy"
                    value={this.state.checkBox}
                    onChange={this.handleChange}/>
                  </Form.Group>
                  <hr />
                  <div className="btn-register">
                    <Button className="btn-submit-register" type="submit">
                      Register
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          </div>
          <Foot />
          </div>
        );
    }
}

export default Register;