import React from 'react';
import './stories.css';
import image from '../assets/kb.jpeg';
import {Link} from 'react-scroll';

const Stories = () => {
	return (
		<div id="stories">
			<div className="container">
				<div className="col-md-12 col-center ">
					<h2>Success Stories</h2>
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="item carousel-item active">
								<div className="img-box"><img src={image} alt="sss"/></div>
								<p className="testimonial">
									Something is added here. Story of the success married couple. 
									The story will be like this:Lorem Ipsum is simply dummy text of the printing 
									and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
									text ever since the 1500s, when an unknown printer took a galley of type and 
									scrambled it to make a type specimen book.
								</p>
								<p className="overview"><b>Nabin Basnet and Pratikshya Adhikari</b>, Itahari-4</p>
							</div>

							<div className="item carousel-item">
								<div className="img-box"><img src={image} alt="sss"/></div>
								<p className="testimonial">
									Something is added here. Story of the success married couple. 
									The story will be like this:Lorem Ipsum is simply dummy text of the printing 
									and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
									text ever since the 1500s, when an unknown printer took a galley of type and 
									scrambled it to make a type specimen book.
								</p>
								<p className="overview"><b>Nabin Basnet and Pratikshya Adhikari</b>, Itahari-4</p>
							</div>

							<div className="item carousel-item">
								<div className="img-box"><img src={image} alt="sss"/></div>
								<p className="testimonial">
									Something is added here. Story of the success married couple. 
									The story will be like this:Lorem Ipsum is simply dummy text of the printing 
									and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
									text ever since the 1500s, when an unknown printer took a galley of type and 
									scrambled it to make a type specimen book.
								</p>
								<p className="overview"><b>Nabin Basnet and Pratikshya Adhikari</b>, Itahari-4</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-3">
					<a href="/success" className="btn-members">Success Stories</a>
				</div>
			</div>
		</div>
	);
}

export default Stories;