/** @format */

import React from 'react';
import { Container } from 'reactstrap';
import { FaPhone, FaAddressCard } from 'react-icons/fa';
import '../index.css';

const Contact = () => {
	return (
		<div className='contact'>
			<h1 className='text-center'>Contact</h1>
			<Container fluid>
				<dl class='row'>
					<dt class='col'>
						Phone <FaPhone />
					</dt>
					<dd class='col-sm-9'>555-5555-555 </dd>

					<dt class='col-sm-3'>
						Address <FaAddressCard />
					</dt>
					<dd class='col-sm-9'>
						<p>
							LCO BasketBall ground, No. 55, fictious home, fictional road,
							fictional lake, India
						</p>
					</dd>
				</dl>
			</Container>
		</div>
	);
};

export default Contact;
