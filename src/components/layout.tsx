import "./layout.css";
import React from "react";
import queryString from 'query-string';
import LeftNav from "./leftnav";
import { graphql, Link } from "gatsby";

require("@stoplight/elements/styles/elements.min.css");

const Layout = ({children, props}) => {
  const search = typeof window !== "undefined" && window.location.search ? queryString.parse(window.location.search) : {}
  const show =  search.show ? `${search.show}` : 'all';
  let classString = 'Layout';
  switch (search.show) {
    case 'requestRunner':
      classString += ' ShowOnlyRequestRunner'
  }
  return (
    <div className={classString}>
      <LeftNav props={props}></LeftNav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
