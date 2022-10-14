import Navbar from './Navbar';

const Layout = ({ children, loggedIn }) => {
	return (
		<div className='app-container'>
			<Navbar loggedIn={loggedIn} />
			{children}
		</div>
	);
};

export default Layout;
