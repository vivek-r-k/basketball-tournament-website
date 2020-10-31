/** @format */

import React from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddPlayer(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Add Players
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form className='mb-3'>
					<Form.Row>
						<Col>
							<Form.Control placeholder='First name' />
						</Col>
						<Col>
							<Form.Control placeholder='Last name' />
						</Col>
						<Col>
							<Form.Control inputMode='numeric' placeholder='Age' />
						</Col>
						<Col>
							<Form.Control placeholder='Image URL' />
						</Col>
					</Form.Row>
				</Form>

				<Button variant='secondary' size='lg'>
					Add
				</Button>
			</Modal.Body>
		</Modal>
	);
}

export default AddPlayer;
