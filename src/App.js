/** @format */

import React from 'react';
import Bar from './Components/Nav';
import Faq from './Components/FAQSection';
import VideoSection from './Components/VideoSection';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Team from './Components/TeamSection';
import Footer from './Components/Footer';
import Contact from './Components/ContactSection';

function App() {
	return (
		<div>
			<Bar />
			<Home />
			<AboutUs />
			<Team />
			<VideoSection />
			<Faq />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
