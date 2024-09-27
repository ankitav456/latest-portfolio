import { FunctionComponent } from "react";
import Link from "next/link"; 
import "./navbar.css";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="navbar-main-container">
      <div className="nav-content-container custom-theme">
        <div className="nav-logo">A</div>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
