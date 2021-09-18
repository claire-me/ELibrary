import Link from 'next/link'

export default function Navbar() {
    return (
			<div className="navbar">
				<Link href="/">
					<a>ELibrary</a>
				</Link>
				<Link href="#">
					<a>Login</a>
				</Link>
			</div>
		);
}

