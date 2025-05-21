import { useSelector, useDispatch } from "react-redux";
import {
	removeItem,
	clearCart,
	decreaseQuantity,
	increaseQuantity,
} from "../slices/cart";

export default function Cart() {
	const cartItems = useSelector((state) => state.cart.items);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const totalPrice = useSelector((state) => state.cart.totalPrice);
	const dispatch = useDispatch();
	const displayTotalPrice =
		totalPrice < 0.01 && totalPrice > -0.01 ? 0 : totalPrice;

	const handleRemoveItem = (id) => {
		dispatch(removeItem(id));
	};
	const handleDecreaseQuantity = (id) => {
		dispatch(decreaseQuantity(id));
	};
	const handleIncreaseQuantity = (id) => {
		dispatch(increaseQuantity(id));
	};
	return (
		<div className="container d-flex flex-column min-vh-100 py-4">
			<div className="mb-4">
				<h1>Cart Items</h1>
				<hr className="border border-primary mt-0" />

				{cartItems.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					cartItems.map((product) => (
						<div
							key={product.id}
							className="card mb-3 w-100 border border-primary rounded-3"
						>
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={product.thumbnail}
										className="img-fluid rounded-start"
										alt={product.title}
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body position-relative">
										<h5 className="card-title">{product.title}</h5>
										<span className="fw-bold text-primary text-end">
											${product.price}
										</span>
										<p className="card-text">{product.description}</p>
										<p className="card-text">
											<small
												className={
													product.availabilityStatus === "In Stock"
														? "text-success"
														: "text-danger"
												}
											>
												{product.availabilityStatus}
											</small>
										</p>
										<div className="d-flex align-items-center">
											<input
												type="button"
												value="-"
												className="btn btn-secondary rounded-5 me-2"
												onClick={() => handleDecreaseQuantity(product.id)}
											/>
											<span className="fw-bold">{product.quantity}</span>
											<input
												type="button"
												value="+"
												className="btn btn-secondary rounded-5 ms-2"
												onClick={() => handleIncreaseQuantity(product.id)}
											/>
										</div>

										<input
											type="button"
											value="Remove"
											className="btn btn-warning rounded-5 position-absolute bottom-0 end-0 m-3"
											onClick={() => handleRemoveItem(product.id)}
										/>
									</div>
								</div>
							</div>
						</div>
					))
				)}
			</div>

			<div className="ms-3 mt-auto text-center text-md-start">
				<p className="fw-bold mb-1 text-primary">
					Total Quantity: {totalQuantity}
				</p>
				<div className="">
					<h4 className="text-primary my-3 me-2">
						Total Price: {displayTotalPrice.toFixed(2)}$
					</h4>
				</div>
			</div>

			<div className="d-flex justify-content-end mt-auto">
				<input
					type="button"
					value="Proceed to Checkout"
					className="btn btn-primary rounded-5 me-3 mx-2"
				/>
				<input
					type="button"
					value="Reset Cart"
					className="btn btn-danger rounded-5 me-3 mx-2"
					onClick={() => dispatch(clearCart())}
				/>
			</div>
		</div>
	);
}
