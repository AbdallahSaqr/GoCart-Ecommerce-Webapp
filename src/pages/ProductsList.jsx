import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axiosInstance from "../apis/config";
import Pages from "../components/Pages";

export default function ProductsList({ currentPage, setCurrentPage, limit }) {
	const [products, setProducts] = useState([]);
	const [totalProducts, setTotalProducts] = useState(0);

	useEffect(() => {
		const skip = (currentPage - 1) * limit;

		axiosInstance
			.get(`/products/`, {
				params: { limit, skip },
			})

			.then((res) => {
				setProducts(res.data.products);
				setTotalProducts(res.data.total);
			})
			.catch((err) => {
				console.error("Error fetching products:", err);
			});
	}, [currentPage, limit]);

	return (
		<>
			<div className="d-flex flex-wrap justify-content-center gap-1">
				{products.map((product) => (
					<ProductCard key={product.id} data={product} />
				))}
			</div>

			<Pages
				currentPage={currentPage}
				onPageChange={setCurrentPage}
				total={totalProducts}
				limit={limit}
			/>
		</>
	);
}
