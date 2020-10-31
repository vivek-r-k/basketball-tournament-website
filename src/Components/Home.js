/** @format */

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Img from '../Images/PSX_20201031_153240.jpg';
import Img2 from '../Images/PSX_20201031_152843.jpg';
import Img3 from '../Images/PSX_20201031_152405.jpg';

const home = () => {
	return (
		<Carousel className='h'>
			<Carousel.Item>
				<img className='d-block w-100' src={Img2} alt='First slide' />
				<Carousel.Caption>
					<h1 className='d-block w-100' style={{ color: 'black' }}>
						WELCOME
					</h1>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={Img} alt='Third slide' />

				<Carousel.Caption>
					<h1 style={{ color: 'black' }}>Big Tournament is Coming Soon</h1>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={Img3} alt='Third slide' />
			</Carousel.Item>
		</Carousel>
	);
};

export default home;
