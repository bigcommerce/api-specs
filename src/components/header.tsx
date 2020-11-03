import "./header.css";

import { Link } from "gatsby";
import React from "react";

const Header = () => {
  return (
    <header className="Header">
      <Link to="https://www.bigcommerce.com/" className="Header__link" target="_blank">
        <img src="https://s3.amazonaws.com/www1.bigcommerce.com/assets/mediakit/downloads/BigCommerce-logo-dark.png" />
      </Link>

      <Link
        to="/docs"
        className="Header__link"
        activeClassName="Header__link--active"
      >
        API Reference
      </Link>

      <Link
        to="/email-templates/"
        className="Header__link"
        activeClassName="Header__link--active"
      >
        Email Templates API Beta
      </Link>
    </header>
  );
};

export default Header;
