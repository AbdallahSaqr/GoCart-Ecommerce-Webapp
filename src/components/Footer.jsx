import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="border-top py-3 mt-4">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <span className="text-muted fw-semibold">
          © 2025 GoCart Company, Inc
        </span>

        <ul className="nav list-unstyled d-flex mb-0">
          <li className="ms-3">
            <NavLink to="/" className="text-muted">
              <img
                src={facebookIcon}
                alt="Facebook"
                width="24"
                height="24"
              />
            </NavLink>
          </li>
           <li className="ms-3">
            <NavLink to="/" className="text-muted">
              <img
                src={instagramIcon}
                alt="Instagram"
                width="24"
                height="24"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
