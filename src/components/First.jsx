import React from 'react';
import Header from './Header';
import About from './About';
import Member from './Member';
import Stories from './Stories';
import Contact from './Contact';
import Foot from './Foot';
import Search from './Search';
import Navbar from './Navbar';


const First = () => {
	return (
		<div> 
            <Navbar/>
			<Header />
			<About />
			<Member />
			<Stories />
			<Contact />
			<Search />
			<Foot />
		</div>
		);
}


export default First;