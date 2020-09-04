import React from 'react';
import './successstories.css';


const SuccessStoriesCard = (props) => {
	return(
		<>
				<div className="success-container">
					<div className="Searchoverflow">
					<img src={props.imgsrc} className="Searchcard-img-top" alt={props.imgsrc} />
					</div>
					<div >
						<h5 >
                            <p>Name:{props.name}</p>
                            
                        </h5>
						<p >
							{props.Address}
						</p>
                        <p >{props.Desc}</p>
						<a href="#" className="btn btn-primary">
							Read More
						</a>
					</div>
				</div>
		</>
	);	
}

export default SuccessStoriesCard;