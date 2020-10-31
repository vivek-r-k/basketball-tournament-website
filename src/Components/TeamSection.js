/** @format */

import React, { useState } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import AddPlayer from '../Components/AddPlayer';

const Team = () => {
	const [modalShow, setModalShow] = useState(false);

	return (
		<div className='team'>
			<h1 className='text-center'>Team Section</h1>
			<CardDeck className='mt-3 ml-3 mr-3 mb-3'>
				<Card className='cardp' border='dark'>
					<Card.Img
						height={409}
						variant='top'
						src='https://www.edristi.in/wp-content/uploads/2017/07/Indian-basketball-player-Vishesh-to-sign-with-Australias-NBL.jpg'
					/>
					<Card.Body className='bg-info'>
						<Card.Title className='text-center'>
							Vishesh Bhriguvanshi
						</Card.Title>
						<Card.Text className='text-center'>Age: 29</Card.Text>
					</Card.Body>
				</Card>
				<Card className='cardp' border='dark'>
					<Card.Img
						height={409}
						variant='top'
						src='https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_80//fetchdata15/images/73/c2/e7/73c2e7dcfd4e17f51a07442b9604752d.jpg'
					/>
					<Card.Body className='bg-info'>
						<Card.Title className='text-center'>Amjyot Singh</Card.Title>
						<Card.Text className='text-center'>Age: 28</Card.Text>
					</Card.Body>
				</Card>
				<Card className='cardp' border='dark'>
					<Card.Img
						height={409}
						variant='top'
						src='https://images.news18.com/ibnlive/uploads/2020/07/1596076550_bwb-global-2018-photo-2.jpg'
					/>
					<Card.Body className='bg-info'>
						<Card.Title className='text-center'>Princepal Singh</Card.Title>
						<Card.Text className='text-center'>Age: 19</Card.Text>
					</Card.Body>
				</Card>
				<Card className='cardp' border='dark'>
					<Card.Img
						height={409}
						variant='top'
						src='https://i.pinimg.com/736x/b9/93/eb/b993eb9d72c91a3d843943c5641c2fb2.jpg'
					/>
					<Card.Body className='bg-info'>
						<Card.Title className='text-center'>LeBron James</Card.Title>
						<Card.Text className='text-center'>Age: 35 </Card.Text>
					</Card.Body>
				</Card>
				<Card className='cardp' border='dark'>
					<Card.Img
						height={409}
						variant='top'
						src='https://upload.wikimedia.org/wikipedia/commons/3/36/Stephen_Curry_dribbling_2016_%28cropped%29.jpg'
					/>
					<Card.Body className='bg-info'>
						<Card.Title className='text-center'>Stephen Curry</Card.Title>
						<Card.Text className='text-center'>Age: 32 </Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
			<Button
				className='ml-5 mb-3'
				variant='primary'
				onClick={() => setModalShow(true)}
			>
				Add More Players
			</Button>

			<AddPlayer show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	);
};

export default Team;
