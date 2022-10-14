import { useEffect } from 'react';
import Router from 'next/router';

const Dashboard = ({ user, loggedIn, setLoggedIn }) => {
	// if user is not logged in, redirect to login
	useEffect(() => {
		console.log(user);
	}, []);

	return (
		<div className='dashboard-container'>
			<h3>Dashboard</h3>
			<h4>welcome, {user.username}</h4>
		</div>
	);
};

export default Dashboard;
