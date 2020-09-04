import React from 'react';
import './member.css';

const MemberCard = (props) => {
	return(
		<>
			<div className="col-md-3 col-10 mx-auto">
				<div className="card">
					<div className="overflow">
					<img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
					</div>
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">
							Address
						</p>
						<a href="/search" className="btn btn-primary">
							Visit Profile
						</a>
					</div>
				</div>
			</div>
		</>
	);	
}

export default MemberCard;