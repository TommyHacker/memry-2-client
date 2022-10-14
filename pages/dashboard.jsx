const Dashboard = ({ user }) => {
	return (
		<div className='dashboard-container'>
			<h3>Dashboard</h3>
			<h4>welcome, {user.username}</h4>
		</div>
	);
};

export default Dashboard;
