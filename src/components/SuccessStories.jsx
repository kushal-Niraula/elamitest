import React from 'react';
import SuccessStoriesCard from './SuccessStoriesCard';
import './successstories.css';
import SuccessStoriesData from './SuccessStoriesData';
import { RiWechatLine } from 'react-icons/ri';
import { IoMdPaperPlane } from 'react-icons/io';
import SemiNav from '../components/SemiNav';
import Foot from '../components/Foot';


const SuccessStories = () => {
    return (
		<div>
			<SemiNav/>
        <div id="success">
			<div className="successflex-container">
				<div className="successflex-item">
					<i><h5><RiWechatLine size="35" color="white"/> All Stories 
					<a href="/send-story" className="btn btn-light btn-sm float-right mt-0 ml-5" style={{paddingTop:2, borderRadius:25}}><IoMdPaperPlane size="25"/>SEND STORY</a>
					</h5></i>
				
				</div>
			</div>
			<div className="container-fluid mb-5">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							{
								SuccessStoriesData.map((val, index) => {
									return <SuccessStoriesCard  key={index} imgsrc={val.imgsrc} name={val.name} Address={val.Address} Desc={val.Desc}/>
								})
							}
						</div>
					</div>
				</div>
			</div>
		</div>
		<Foot/>
		</div>
    )
}
export default SuccessStories;

