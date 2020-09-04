import React from 'react';
import './login.css';
import SemiNav from '../components/SemiNav';
import Foot from '../components/Foot';
import {Form, Col, Button,} from 'react-bootstrap';

const initialState = {
    userName: "",
    password: "",
    userNameError: "",
    passwordError: ""
  }

class Login extends React.Component {

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
      let userNameError= "";
      let passwordError= "";

      if (!this.state.userName) {
        userNameError = 'Username cannot be empty';
      }
      if (this.state.userName) {
            if (!this.state.userName.includes('@')) {
            userNameError = 'invalid email';
      }
      }
      if (!this.state.password){
        passwordError = 'Password cannot be empty';
      }

      if (userNameError || passwordError){
        this.setState({userNameError, passwordError});
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
        return(
          <div>
            <SemiNav />
            <div className={'authBox'}>
                <div className={'leftBox'}>
                    <div className={'bgColor'}></div>
                    <div className={'imageAuth'}></div>
                    <div className={'imageText bold style1'}>Loking for Partner!</div>
                    <div className={'imageText style2'}>Find your perfect match here</div>
                </div>
                    <div className={'rightBox'}>
                        <div className={'box'}>
                            <div className={'titleAuth'}> Login Here </div>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="email" 
                                    name="userName" 
                                    placeholder="Enter email" 
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                    />
                                    <div style={{fontSize:12, color: "red"}}>
                                        {this.state.userNameError}
                                    </div>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password"
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        />
                                        <div style={{fontSize:12, color: "red"}}>
                                        {this.state.passwordError}
                                        </div>
                                    </Form.Group>
                                <Form.Row>
                                <Form.Group as={Col} controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                  <p><a href="#">Forget Password?</a></p>
                                </Form.Group>
                                </Form.Row>
                                <Button className="btn-login" variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                            <hr />
                            <p className="register">
                              Don't have Account? <a href="/register">Register</a>
                            </p>
                        </div>
                    </div>
                  </div>
                  <Foot />
                  </div>
        );
    }
}

export default Login;