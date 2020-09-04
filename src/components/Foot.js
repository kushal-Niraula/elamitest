import React from 'react';
import './foot.css';
import {Link, animateScroll as scroll} from 'react-scroll';

const Foot = () => {
	return (
		<div>
			<section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4 text-center">
					<h5>|Contact Address|</h5>
					<ul class="list-unstyled quick-links">
						<li><Link to="#"><i class="fa fa-angle-double-right"></i>Phone number here</Link></li>
						<li><Link to="#"><i class="fa fa-angle-double-right"></i>Email address here</Link></li>
						<li><Link to="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Location here</Link></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4 text-center">
					<h5>|Quick links|</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="/privacy-policy"><i class="fa fa-angle-double-right"></i>Terms and  conditions</a>
						</li>
						<li><li><a href="/privacy-policy"><i class="fa fa-angle-double-right"></i>Privacy Policy</a>
						</li></li>
						<li><Link 
						aciveClass="active"
				   		href="/faq"
				   		to="faq"
				   		spy={true}
				   		smooth={true}
				   		offset={-70}
				   		duration={1200}><i class="fa fa-angle-double-right"></i>FAQ</Link></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4 text-center">
					<h5>|Quick links|</h5>
					<ul class="list-unstyled quick-links">
						<li><Link
						aciveClass="active"
				   		href="/"
				   		to="home"
				   		spy={true}
				   		smooth={true}
				   		offset={-70}
				   		duration={1200}><i class="fa fa-angle-double-right"></i>Home</Link></li>
						<li><Link
						aciveClass="active"
				   		href="/about"
				   		to="about"
				   		spy={true}
				   		smooth={true}
				   		offset={-70}
				   		duration={1200}><i class="fa fa-angle-double-right"></i>About Us</Link></li>
						<li><Link
						aciveClass="active"
				   		href="/Members"
				   		to="member"
				   		spy={true}
				   		smooth={true}
				   		offset={-70}
				   		duration={1200}><i class="fa fa-angle-double-right"></i>Members</Link></li>
				   		<li><Link
				   		aciveClass="active"
				   		href="/stories"
				   		to="stories"
				   		spy={true}
				   		smooth={true}
				   		offset={-70}
				   		duration={1200}><i class="fa fa-angle-double-right"></i>Succcess Stories</Link></li>
						<li><Link 
						aciveClass="active"
				   		href="/contact"
				   		to="contact"
				   		spy={true}
				   		smooth={true}
				   		offset={-70}
				   		duration={1200}><i class="fa fa-angle-double-right"></i>Contact Us</Link></li>
						<li><Link 
						aciveClass="active"
				   		href="/search"
				   		to="search"
				   		spy={true}
				   		smooth={true}
				   		offset={-70}
				   		duration={1200}><i class="fa fa-angle-double-right"></i>Search</Link></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><Link to="#"><i class="fa fa-facebook"></i></Link></li>
						<li class="list-inline-item"><Link to="#"><i class="fa fa-twitter"></i></Link></li>
						<li class="list-inline-item"><Link to="#"><i class="fa fa-instagram"></i></Link></li>
						<li class="list-inline-item"><Link to="#"><i class="fa fa-google-plus"></i></Link></li>
					</ul>
				</div>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p class="h6">&copy;{new Date().getFullYear()}. All right Reversed.<Link class="text-green ml-2" to="home" target="_blank">eLami</Link></p>
				</div>
			</div>	
		</div>
	</section>
		</div>
	);
}
export default Foot;