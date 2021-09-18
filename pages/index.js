import Layout from '../Component/Layout'
import data from "../utilities/data";
import Image from 'next/image'
const Home = () => {
	return (
		<Layout>
			<div>
				{data.products.map((product) => (
					<div>
						<div>
							<h1>Elibrary</h1>
							<h2>{product.title}</h2>
							<p>{product.body}</p>
							<button>Add to cart</button>
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Home;
