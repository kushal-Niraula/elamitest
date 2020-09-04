import React from 'react';
import './navbar.css';
import { FaHome, FaHeart, FaSearch } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import {IoIosPeople} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import {Link, animateScroll as scroll} from 'react-scroll';

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">eLami</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav ml-auto">
				   	<li className="nav-item active">
				   		<Link
				   		aciveClass="active"
				   		href="/"
				   		to="home" 
				   		spy={true}
				   		smooth={true} 
				   		offset={-60}
				   		duration={1200}><FaHome/>{" "}Home</Link>
					</li>
					<li className="nav-item active">
				   		<Link
				   		aciveClass="active"
				   		href="/about"
				   		to="about"
				   		spy={true}
				   		smooth={true}
				   		offset={-60}
				   		duration={1200}><IoIosPeople/>{" "}About</Link>
					</li>
					<li className="nav-item active">
				   		<Link
				   		aciveClass="active"
				   		href="/Members"
				   		to="member"
				   		spy={true}
				   		smooth={true}
				   		offset={-60}
				   		duration={1200}><TiTick/>{" "}Members</Link>
					</li>
					<li className="nav-item active">
				   		<Link
				   		aciveClass="active"
				   		href="/stories"
				   		to="stories"
				   		spy={true}
				   		smooth={true}
				   		offset={-60}
				   		duration={1200}><FaHeart/>{" "}Success Stories</Link>
					</li>
					<li className="nav-item active">
				   		<Link
				   		aciveClass="active"
				   		href="/contact"
				   		to="contact"
				   		spy={true}
				   		smooth={true}
				   		offset={-60}
				   		duration={1200}><MdEmail/>{" "}Contact Us</Link>
					</li>
					<li className="nav-item active">
				   		<Link
				   		aciveClass="active"
				   		href="/search"
				   		to="search"
				   		spy={true}
				   		smooth={true}
				   		offset={-60}
				   		duration={1200}><FaSearch/>{" "}Search</Link>
					</li>
				</ul>
			  </div>
			</nav>		
		</>
	);
}

export default Navbar;