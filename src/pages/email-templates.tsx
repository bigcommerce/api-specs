import { StoplightProject } from "@stoplight/elements";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const StoplightProjectPage = () => {
  return (
    <Layout>
      <SEO title="BigCommerce Email Templates API Beta" />

      <StoplightProject
        workspaceSlug="bigcommerce"
        projectSlug="api-beta-transactional-emails"
        branchSlug="master"
        basePath="api-specs/email-templates/"
        router={typeof window === 'undefined' ? "memory" : "history"}
      />
    </Layout>
  );
};

export default StoplightProjectPage;
