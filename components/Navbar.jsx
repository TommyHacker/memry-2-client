import Link from 'next/link';

const Navbar = ({ loggedIn, setLoggedIn, setUser }) => {
	const logoutHandler = () => {
		if (!loggedIn) return;
		setLoggedIn(false);
		setUser(false);
	};
	return (
		<nav>
			<div className='nav-left'>logo</div>
			<div className='nav-right'>
				{!loggedIn && (
					<>
						<Link href='/login'>login</Link>
						<Link href='/register'>register</Link>
					</>
				)}
				{loggedIn && (
					<>
						<Link href='/dashboard'>Dashboard</Link>
						<a onClick={logoutHandler}>Logout</a>
					</>
				)}
			</div>
		</nav>
	);
};
export default Navbar;
