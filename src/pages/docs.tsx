import { StoplightProject } from "@stoplight/elements";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const StoplightProjectPage = () => {
  return (
    <Layout>
      <SEO title="BigCommerce API Reference" />

      <StoplightProject
        workspaceSlug="bigcommerce"
        projectSlug="api-reference"
        basePath="api-specs/docs/"
        router={typeof window === 'undefined' ? "memory" : "history"}
      />
    </Layout>
  );
};

export default StoplightProjectPage;
