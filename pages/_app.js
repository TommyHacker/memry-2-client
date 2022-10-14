import Layout from '../components/Layout';
import '../public/styles/css/main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { hasCookie, deleteCookie } from 'cookies-next';

const MyApp = ({ Component, pageProps }) => {
	const [user, setUser] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [accessToken, setAccessToken] = useState(hasCookie('accesstoken'));

	const getUser = async () => {
		try {
			const res = await axios.get('http://localhost:4000/users/', {
				withCredentials: true,
			});
			if (res.data.success) {
				const user = await res.data.data;
				setUser(user);
				setLoggedIn(true);
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	// if accesstoken cookie, fetch user data
	useEffect(() => {
		if (!accessToken) {
			setLoggedIn(false);
			setUser(false);
		}
		getUser();
	}, [accessToken]);

	return (
		<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser}>
			<Component
				user={user}
				setUser={setUser}
				setLoggedIn={setLoggedIn}
				loggedIn={loggedIn}
				{...pageProps}
			/>
		</Layout>
	);
};

export default MyApp;
