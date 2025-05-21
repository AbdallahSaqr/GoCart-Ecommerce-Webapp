import { NavLink } from "react-router";
import basketIcon from "../assets/basket.svg";
import cartIcon from "../assets/cart.svg";
import { useSelector } from "react-redux";
import accountIcon from "../assets/person-circle.svg";
import settingsIcon from "../assets/gear-fill.svg";

export default function Header({ onHomeClick }) {
	const cartValue = useSelector((state) => state.cart.totalQuantity);

	return (
		<header className="border-bottom mb-4">
			<div className="container d-flex flex-wrap justify-content-between align-items-center py-3">
				<div className="d-flex flex-grow-1 flex-md-grow-0  align-items-center justify-content-between gap-3">
					<div className="d-flex align-items-center text-decoration-none">
						<img
							src={basketIcon}
							alt="Shopify Logo"
							width="40"
							height="32"
							className="me-2"
						/>
						<h1 className="text-primary mb-0">GoCart</h1>
					</div>

					<nav>
						<ul className="nav">
							<li className="nav-item">
								<NavLink
									to="/"
									onClick={onHomeClick}
									className={({ isActive }) =>
										`nav-link ${
											isActive ? "active text-white bg-primary rounded-3" : ""
										}`
									}
									aria-current="page"
								>
									Home
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
				<nav className="mt-2 mt-md-0 flex-grow-1 flex-md-grow-0">
					<ul className="nav  align-items-center justify-content-between gap-2 mb-0">
						<li className="nav-item position-relative">
							<NavLink
								to="/Cart"
								className={({ isActive }) =>
									`nav-link ${
										isActive ? "active text-white bg-primary rounded-3" : ""
									}`
								}
							>
								<img src={cartIcon} alt="Cart" width="24" height="24" /> Cart
								{cartValue > 0 && (
									<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
										{cartValue}
									</span>
								)}
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to="/settings"
								className={({ isActive }) =>
									`nav-link ${
										isActive ? "active text-white bg-primary rounded-3" : ""
									}`
								}
							>
								<img src={settingsIcon} alt="Settings" width="24" height="24" />{" "}
								Settings
							</NavLink>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img src={accountIcon} alt="Account" width="24" height="24" />{" "}
								Account
							</a>
							<ul className="dropdown-menu dropdown-menu-end text-center border border-primary">
								<li>
									<NavLink
										to="/register"
										className="dropdown-item"
										onClick={() => {
											window.location.href = "/register";
										}}
									>
										Register
									</NavLink>
								</li>
								<hr className="dropdown-divider border-secondary" />
								<li>
									<NavLink
										to="/login"
										className="dropdown-item "
										onClick={() => {
											window.location.href = "/login";
										}}
									>
										Login
									</NavLink>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
