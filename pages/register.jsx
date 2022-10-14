import { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';

const RegisterPage = ({ loggedIn }) => {
	useEffect(() => {
		if (!loggedIn) return;
		Router.replace('/dashboard');
	}, [loggedIn]);

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleUsername = (e) => {
		setUsername(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const registerHandler = async (e) => {
		e.preventDefault();
		const response = await axios.post('http://localhost:4000/users/register', {
			username,
			email,
			password,
		});
		console.log(response.data);
		setUsername('');
		setEmail('');
		setPassword('');
	};

	return (
		<div className='login-container'>
			<form onSubmit={registerHandler}>
				<input onChange={handleUsername} type='text' name='username' />
				<input onChange={handleEmail} type='email' name='email' />
				<input onChange={handlePassword} type='password' name='password' />
				<input type='submit' value='register' />
			</form>
		</div>
	);
};

export default RegisterPage;
