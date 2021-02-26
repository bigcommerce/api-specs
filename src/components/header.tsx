import "./header.css";

import { Link } from "gatsby";
import React from "react";
import { graphql } from "gatsby";

const Header = (props) => {
  return (
    <header className="Header">
      <Link
        to="/docs/"
        className="Header__link"
        activeClassName="Header__link--active"
      >
        Docs
      </Link>
    </header>
  );
};

const StoplightLinks = (props) => {

  const base = "/sl?api=https://bigcommerce.stoplight.io/api/v1/projects/";

  return (
    props.props.props.map((item) =>
      <Link
        className="Header__link"
        activeClassName="Header__link--active"
        to={base + item.workspace.slug + "/" + item.project_slug + "/nodes" + item.node_uri + "?branch=" + item.branch_slug + "&format=json"}
      >{item.branch_node_name}</Link>
    )  )
};

export default Header;
