import { navigate } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = (props) => {
  React.useEffect(() => {
    navigate("/sl");
  });

  return (<div></div>);
};

export default IndexPage;
