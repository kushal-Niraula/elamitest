import React from 'react';
import './footer.css';

const Footer = () => {
	return(
		<div className="main-footer">
			<div className="container">
				<div className="row"> 
					<div className="col">
						<h4>Nepali Lami</h4>
						<ul className="list-unstyled">
							<li>Phone here</li>
							<li>email address here</li>
							<li>Address here</li>
						</ul>
					</div>

					<div className="col">
						<h4>Nepali Lami Stuffs</h4>
						<ul className="list-unstyled">
							<li>Phone here</li>
							<li>email address here</li>
							<li>Address here</li>
						</ul>
					</div>

					<div className="col">
						<h4>Nepali Lami</h4>
						<ul className="list-unstyled">
							<li>Phone here</li>
							<li>email address here</li>
							<li>Address here</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="row">
					<p className="col-sm">
						&copy;{new Date().getFullYear()} NepaliLami | All rights reserved | Terms and Conditions | Privacy policy
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;