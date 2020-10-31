/** @format */

import React, { useState } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from '../Images/sports-logo-transparent.png';
import SignUp from '../Components/Signup';
import SignIn from '../Components/SignIn';

const Example = () => {
	const [modalShow, setModalShow] = useState(false);
	const [modalShow2, setModalShow2] = useState(false);
	return (
		<div className='head'>
			<Navbar expand='lg'>
				<Navbar.Brand href='#home' className='header'>
					LCO Basketball tournoment <Image src={Img} className='mr-auto' />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-sm-2'>
						<Nav.Link variant='primary' onClick={() => setModalShow(true)}>
							SignUp
						</Nav.Link>
						<SignUp show={modalShow} onHide={() => setModalShow(false)} />
					</Nav>

					<Nav className='mr-sm-2'>
						<Nav.Link variant='primary' onClick={() => setModalShow2(true)}>
							SignIn
						</Nav.Link>
						<SignIn show={modalShow2} onHide={() => setModalShow2(false)} />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Example;
