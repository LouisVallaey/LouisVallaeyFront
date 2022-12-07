import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Footer from "./footer";
import Navigation from "./navigation";

const Layout = ({ children, cta, secondary }) => {
  const data = useStaticQuery(graphql`
    query GetAllStrapiPage {
      allStrapiPage(sort: { publishedAt: ASC }) {
        edges {
          node {
            Slug
            name
            id
          }
        }
      }
    }
  `);

  return (
    <>
      <Navigation pages={data.allStrapiPage.edges} />
      {children}
      <Footer
        cta={cta}
        secondary={secondary}
        pages={data.allStrapiPage.edges}
      />
    </>
  );
};
export default Layout;
