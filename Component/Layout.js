import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
		<>
			<Navbar />
			<Head>
				<title>ELibrary</title>
			</Head>
			<main className="container">{children}</main>
			<Footer />
		</>
	);
}