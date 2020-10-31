/** @format */

import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Sign In</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
					</Form.Group>

					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>

					<Button variant='primary' type='submit'>
						Sign In
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default SignIn;
