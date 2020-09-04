import React from 'react';
import './navbar.css'; 

const SemiNav = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/" offset={-40} duration={800}>eLami</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mx-auto">
				   	<li className="nav-item active">
				   		<a href="/privacy-policy">Terms and Conditions
				   		</a>
					</li>
					<li className="nav-item active">
				   		<a href="/privacy-policy">Privacy Policy
				   		</a>
					</li>
					<li className="nav-item active">
				   		<a href="/feedback">Feedback
				   		</a>
					</li>
				</ul>
			  </div>
			</nav>		
		</>
	);
}

export default SemiNav;