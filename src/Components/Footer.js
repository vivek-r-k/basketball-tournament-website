/** @format */

import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Footer = () => {
	return (
		<Container
			fluid
			tag='footer'
			className='footy text-center text-uppercase  p-3'
		>
			Go fight for it team! <FaCopyright />
		</Container>
	);
};

export default Footer;
