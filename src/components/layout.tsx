import * as React from "react";
import { Link } from "gatsby";
import "./layout.css";

interface LayoutProps {
  pageTitle: any;
  children: any;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className="container">
      <title>{pageTitle}</title>
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
