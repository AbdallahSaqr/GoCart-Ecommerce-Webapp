import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const navigate = useNavigate();

	const handleChangeData = (e) => {
		const { id, type, value, checked } = e.target;
		setLoginData((prev) => ({
			...prev,
			[id]: type === "checkbox" ? checked : value,
		}));
	};

	const handleLogin = (e) => {
		e.preventDefault();

		navigate("/");

		setLoginData({
			email: "",
			password: "",
			rememberMe: false,
		});
	};

	return (
		<div className="d-flex justify-content-center align-items-center mt-5 ">
			<div
				className="container border border-primary rounded-4 p-5"
				style={{ maxWidth: "500px" }}
			>
				<h1 className="text-primary text-center mb-4">Login</h1>
				<form onSubmit={handleLogin}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							value={loginData.email}
							onChange={handleChangeData}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={loginData.password}
							onChange={handleChangeData}
							required
						/>
					</div>
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="rememberMe"
							checked={loginData.rememberMe}
							onChange={handleChangeData}
						/>
						<label className="form-check-label" htmlFor="rememberMe">
							Remember me
						</label>
					</div>
					<div className="text-center">
						<button type="submit" className="btn btn-primary w-100">
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
