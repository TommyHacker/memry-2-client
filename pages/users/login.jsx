import { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

const LoginPage = ({ loggedIn, setLoggedIn, setUser, user }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		if (!loggedIn) return;
		Router.push('/dashboard');
	}, [user]);

	const handleUsername = (e) => {
		setUsername(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const loginHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'http://localhost:4000/users/login',
				{
					username,
					password,
				},
				{ withCredentials: true }
			);
			if (!response.data.success) {
				console.log('something went wrong during login.');
				return;
			}
			if (response.data.success) {
				setUsername('');
				setPassword('');
				setLoggedIn(true);
				Router.push('/users/dashboard');
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className='login-container'>
			<form onSubmit={loginHandler}>
				<input onChange={handleUsername} type='text' name='username' />
				<input onChange={handlePassword} type='password' name='password' />
				<input type='submit' value='login' />
			</form>
		</div>
	);
};

export default LoginPage;
