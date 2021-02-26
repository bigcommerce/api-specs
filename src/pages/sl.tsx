import { API } from "@stoplight/elements";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import queryString from 'query-string';
import { graphql } from "gatsby";

const StoplightProjectPage = (props) => {
  const search = typeof window !== "undefined" && window.location.search ? queryString.parse(window.location.search) : {}
  const api =  search.api ? `${search.api}` : 'https://bigcommerce.stoplight.io/api/v1/projects/bigcommerce/api-reference/nodes/reference/catalog.v3.yml?branch=master&deref=all&format=json'
  return (

    <Layout props={props}>
      <SEO title="API Reference Viewer" />

      <API
        apiDescriptionUrl={api}
        router={typeof window === "undefined" ? "memory" : "hash"}
      />
    </Layout>
  );
};

export default StoplightProjectPage;

export const query = graphql`
query SearchGraph($workspaceId: Int!, $projectId: Int, $search: String, $snapshotType: String, $branchSlug: String, $limit: Int ) {
  stoplight {
    sl_sl_search_nodes(args: {workspaceid: $workspaceId, search: $search, snapshottype: $snapshotType, projectid: $projectId, branch: $branchSlug}, order_by: {branch_node_name: asc}, limit: $limit) {
      ...SearchGraph_Item
    }
  }
}

fragment SearchGraph_Item on SL_sl_type_search_node_results {
  branch_node_name
  workspace {
    slug
  }
  highlighted_summary
  project_slug
  project_icon_name
  branch_slug
  node_uri
  snapshot_spec
}
`
