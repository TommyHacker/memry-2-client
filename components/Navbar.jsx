import Link from 'next/link';

const Navbar = ({ loggedIn }) => {
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
					</>
				)}
			</div>
		</nav>
	);
};
export default Navbar;
