import Navbar from './Navbar';

const Layout = ({ children, loggedIn, setLoggedIn, setUser }) => {
	return (
		<div className='app-container'>
			<Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} />
			{children}
		</div>
	);
};

export default Layout;
