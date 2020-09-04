import React from 'react';
import MemberCard from './MemberCard';
import MemberData from './MemberData';
import './member.css';

const Members = () => {
	return (
		<div id="member">
			<div className="my-5">
				<h2 className="text-center"> Verified Members </h2>
			</div>
			<div className="container-fluid mb-5">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							{
								MemberData.map((val, index) => {
									return <MemberCard key={index} imgsrc={val.imgsrc} title={val.title} />
								})
							}
						</div>
					</div>
				</div>
			</div>
			<div className="mb-3">
                <a href="/search" className="btn-members">View all Members</a>
            </div>
		</div>
	);
}

export default Members;