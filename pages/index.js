import Layout from '../Component/Layout'
import {data} from "../utilities/data";
import Image from 'next/image'
import Link from 'next/link'
const Home = () => {
	return (
		<Layout>
			<h1>Ebooks</h1>
			<div className="box">
				{data.products.map((product) => (
					<div className="boxes">
						<div className="card">
							<Image width={500} height={400} src={product.image} />
							<div className='colored'>
								<p className="title">{product.title}</p>
								<p className="author">-{product.author}</p>
								<div className="texts">
									<h3 className="priceTag">${product.price}</h3>
									<Link href="/">
										<a>
											<h3 className="specific">Add to cart</h3>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Home;
