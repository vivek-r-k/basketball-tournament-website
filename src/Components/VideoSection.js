/** @format */

import React from 'react';
import ReactPlayer from 'react-player';
import '../index.css';

const videoSection = () => {
	return (
		<div className='video mt-3 mb-3'>
			<h1 className='text-center'>Watch Here to be updated</h1>
			<ReactPlayer
				url='https://www.youtube.com/watch?v=hqvGOPB0KmQ&t=291s'
				className='player mb-3'
			/>
		</div>
	);
};

export default videoSection;
