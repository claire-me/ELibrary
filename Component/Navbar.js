import Link from 'next/link'

export default function Navbar() {
    return (
			<div className="navbar">
				<Link href="/">
					<a className="nav-title">ELibrary</a>
				</Link>
				<div className='nav-links'>
					<Link href="#">
						<a className="nav-link">Cart</a>
					</Link>
					<Link href="#">
						<a className="nav-link">Login</a>
					</Link>
				</div>
			</div>
		);
}

