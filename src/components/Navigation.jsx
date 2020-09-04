import React, { useState } from 'react';
import { FaHome, FaHeart,FaClipboardCheck, FaFacebookSquare, FaGooglePlusSquare, FaLinkedin, FaSearch } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import {IoIosPeople} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import {Navbar, NavbarBrand} from 'reactstrap';
import styles from './mystyle.module.css';
import { Collapse, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap'; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
            <Navbar expand="md" className={styles.Navbar} color="navbar navbar-light light-blue lighten-4">
              <NavbarBrand className={styles.NavbarBrand} href="/" >NEPALILAMI</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className={styles.Nav}>
                <NavItem>
                    <NavLink className={styles.NavHome} href="/"><FaHome/>HOME</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={styles.NavLink} href="/member/"><TiTick/>VERIFIED MEMBERS</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={styles.NavLink} href="/how_it_works/"><FaClipboardCheck/>HOW IT WORKS</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className={styles.NavLink} href="/success-stories/"><FaHeart/>SUCCESS STORIES</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className={styles.NavLink} href="/about/"><IoIosPeople/>ABOUT US</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className={styles.NavLink} href="/contact/"><MdEmail/>CONTACT US</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={styles.NavLink} href="/verified_members/"><FaSearch/>SEARCH</NavLink>
                  </NavItem>
                  
                </Nav>
              </Collapse>
            </Navbar>
            </div>
  );
}

export default Navigation;
