import Layout from '../components/Layout';
import '../public/styles/css/main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
const MyApp = ({ Component, pageProps }) => {
	const [user, setUser] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
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
	useEffect(() => {
		getUser();
	}, [loggedIn]);
	return (
		<Layout loggedIn={loggedIn}>
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
