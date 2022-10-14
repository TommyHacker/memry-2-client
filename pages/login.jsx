import { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

const LoginPage = ({ loggedIn, setLoggedIn, setUser }) => {
	useEffect(() => {
		if (!loggedIn) return;
		Router.push('/dashboard');
	}, [loggedIn]);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

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
			console.log(response.data);
			setUsername('');
			setPassword('');
			const user = await response.data.data;
			setUser(user);
			setLoggedIn(true);
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
