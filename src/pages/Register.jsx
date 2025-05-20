import { useState } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../apis/config";

export default function Register() {
  const navigate = useNavigate();

  // State to manage registration form inputs
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: "",
    termsCheck: false,
  });

  // Password validation states
  const isAtLeast8 = registerData.password.length >= 8;
  const hasLower = /[a-z]/.test(registerData.password);
  const hasUpper = /[A-Z]/.test(registerData.password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(registerData.password);

  // State to manage registration errors
  const [registerErrors, setRegisterErrors] = useState({
    passwordError: null,
  });

  // State to manage success message display
  const [successMessage, setSuccessMessage] = useState("");

  const handleChangeData = (e) => {
    if (e.target.id === "firstName") {
      setRegisterData({
        ...registerData,
        firstName: e.target.value,
      });
    } else if (e.target.id === "lastName") {
      setRegisterData({
        ...registerData,
        lastName: e.target.value,
      });
    } else if (e.target.id === "email") {
      setRegisterData({
        ...registerData,
        email: e.target.value,
      });
    } else if (e.target.id === "password") {
      const newPassword = e.target.value;

      const isAtLeast8 = newPassword.length >= 8;
      const hasLower = /[a-z]/.test(newPassword);
      const hasUpper = /[A-Z]/.test(newPassword);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
      setRegisterData({
        ...registerData,
        password: newPassword,
      });
      setRegisterErrors({
        ...registerErrors,
        passwordError: !(isAtLeast8 && hasLower && hasUpper && hasSpecial),
      });
    } else if (e.target.id === "birthday") {
      setRegisterData({
        ...registerData,
        birthday: e.target.value,
      });
    } else if (e.target.id === "termsCheck") {
      setRegisterData({
        ...registerData,
        termsCheck: e.target.checked,
      });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerErrors.passwordError) {
      return;
    }

    axiosInstance
      .post("/users/add", registerData)
      .then((res) => {
        console.log(res.data);
        setSuccessMessage("User registered successfully, please login.");

        setRegisterData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          birthday: "",
          termsCheck: false,
        });

        setTimeout(() => {
          setSuccessMessage("");
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        console.error("Error registering user:", err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="container border border-primary rounded-4 p-5 shadow"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="text-primary text-center mb-4">Register</h1>
        <form className="row g-3" onSubmit={handleSubmit} autoComplete="off">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={registerData.firstName}
              onChange={handleChangeData}
              autoComplete="off"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={registerData.lastName}
              onChange={handleChangeData}
              autoComplete="off"
            />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={registerData.email}
              onChange={handleChangeData}
              autoComplete="off"
            />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${
                registerErrors.passwordError ? "border border-danger" : ""
              }`}
              id="password"
              value={registerData.password}
              onChange={handleChangeData}
              autoComplete="off"
              required
            />
            <ul className="mt-2 ps-3 small">
              <li className={isAtLeast8 ? "text-primary" : "text-danger"}>
                At least 8 characters
              </li>
              <li
                className={
                  hasLower && hasUpper ? "text-primary" : "text-danger"
                }
              >
                At least one lowercase and one uppercase letter
              </li>
              <li className={hasSpecial ? "text-primary" : "text-danger"}>
                At least one special character (e.g., !@#$)
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <label htmlFor="birthday" className="form-label">
              Birthday <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              required
              value={registerData.birthday}
              onChange={handleChangeData}
              autoComplete="off"
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsCheck"
                required
                checked={registerData.termsCheck}
                onChange={handleChangeData}
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I accept the terms and conditions{" "}
                <span className="text-danger">*</span>
              </label>
            </div>
          </div>

          {successMessage && (
            <div className="col-12">
              <p className="text-primary text-center">{successMessage}</p>
            </div>
          )}

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
