import "./leftnav.css";
import "./header.css";
import { navigate } from "gatsby";
import { useState } from 'react';
import { Link } from "gatsby";
import React from "react";
import { graphql, StaticQuery } from "gatsby";

const LeftNav = (nodes) => {
  let classString = 'LeftNav';
  return (
    <div className={classString}>
      <div className="LeftNav__Header">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
      <span> APIs</span>

      </div>
      <StoplightLinks></StoplightLinks>
      </div>
  );
};

const StoplightLinks = (nodes) => {
  return (
    <StaticQuery
      query={graphql`
      query SearchGraphOne {
        stoplight {
          sl_sl_search_nodes(args: {workspaceid: 8751, search: "", snapshottype: "http_service", projectid: 20603, branch: "master"}) {
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
      `} render={data => (
        data.stoplight.sl_sl_search_nodes.map((item) =>
          <Link
            className="LeftNav__link"
            activeClassName="LeftNav__link--active"
            to={"/sl?api=https://bigcommerce.stoplight.io/api/v1/projects/" + item.workspace.slug + "/" + item.project_slug + "/nodes" + item.node_uri + "?branch=" + item.branch_slug + "&format=json"}
           >{item.branch_node_name}</Link>
      ))}
    />
      );
};

export default LeftNav;