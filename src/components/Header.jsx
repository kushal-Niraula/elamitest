import React from 'react';
import styles from '../components/mystyle.module.css';
import '../App.css';
import { Button, Jumbotron} from 'reactstrap';
import {IoIosPersonAdd} from 'react-icons/io';
import {FaUnlock} from 'react-icons/fa';

const Header = () => {  
    return ( 
        <div id="home">
          <Jumbotron className={styles.Jumbotron}>
            <h1 style={{marginTop:'25vh'}}>Hello, Everyone!</h1>
            <h3>Wel-come to my site</h3>
            <p>
                <Button onClick= { function handleLogin(){
      document.location.href="/login";
    } } color="danger" size="sm" active><FaUnlock/>{" "}Login</Button>{" "}
              <a href="register">
              <Button outline color="secondary"size="sm" active><IoIosPersonAdd size="1rem"/>{" "}Register</Button>
              </a>
            </p>
            <div id="social">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5 text-center"> 
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </Jumbotron>
        </div>
     );
  }
 
export default Header;