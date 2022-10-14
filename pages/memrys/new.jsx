import axios from 'axios';
import { useState } from 'react';

const NewMemry = () => {
	const [title, setTitle] = useState(false);
	const [story, setStory] = useState(false);
	const [privacy, setPrivacy] = useState(false);
	const [imageUrl, setImageUrl] = useState(false);
	const [latitude, setLatitude] = useState(false);
	const [longitude, setLongitude] = useState(false);

	const handleTitle = (e) => {
		setTitle(e.target.value);
	};
	const handleStory = (e) => {
		setStory(e.target.value);
	};
	const handlePrivacy = (e) => {
		setPrivacy(e.target.checked);
		console.log(privacy);
	};
	const handleImageUrl = (e) => {
		setImageUrl(e.target.value);
	};
	const handleLatitude = (e) => {
		setLatitude(e.target.value);
	};
	const handleLongitude = (e) => {
		setLongitude(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'http://localhost:4000/memrys',
				{ title, story, privacy, imageUrl, longitude, latitude },
				{ withCredentials: true }
			);
			const res = await response.data;
			console.log(res);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className='new-memry-container'>
			<h1>new memry</h1>

			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='title'
					placeholder='title'
					onChange={handleTitle}
				/>
				<input
					type='text'
					name='story'
					placeholder='story'
					onChange={handleStory}
				/>
				<input
					type='checkbox'
					name='private'
					id='private'
					onChange={handlePrivacy}
				/>
				<input
					type='file'
					name='image-url'
					id='image-url'
					onChange={handleImageUrl}
				/>
				<input
					type='text'
					name='latitude'
					placeholder='latitude'
					onChange={handleLatitude}
				/>
				<input
					type='text'
					name='longitude'
					placeholder='longitude'
					onChange={handleLongitude}
				/>
				<input type='submit' value='create memry' />
			</form>
		</div>
	);
};

export default NewMemry;
