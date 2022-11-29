import React from "react";
import Layout from "../components/ui/layout";
import { graphql } from "gatsby";
import Hero from "../components/page/hero";
import HeroTextual from "../components/page/heroTextual";
import HeroSecond from "../components/page/heroSecond";
import Work from "../components/page/work";
import HeroCta from "../components/page/heroCta";

export default function Page({
  data: {
    allStrapiPage: { edges: page },
  },
}) {
  const pagedetails = page[0].node;
  const heroSection = () => {
    //When hero has a coverimage then we use standard Hero
    if (pagedetails.heroType[0].cover !== undefined) {
      return <Hero heroData={pagedetails.heroType[0]} />;
      //When there is no coverimage we use a HeroTextual
    } else if (pagedetails.heroType[0].cover === undefined) {
      if (pagedetails.heroType[0].content !== undefined) {
        return <HeroTextual heroData={pagedetails.heroType[0]} />;
      } else {
        return <HeroCta heroData={pagedetails} />;
      }
    }
  };

  return (
    <Layout
      cta={pagedetails.heroType[0].cta}
      secondary={pagedetails.invertedColor}
    >
      {heroSection()}
      {pagedetails.heroSecond !== null ? (
        <HeroSecond
          heroData={pagedetails.heroSecond}
          primary={pagedetails.invertedColor}
        />
      ) : null}
      {pagedetails.workContent !== null ? (
        <Work
          workContent={pagedetails.workContent}
          cta={pagedetails.heroType[0].cta}
        />
      ) : null}
    </Layout>
  );
}

export const query = graphql`
  query GetAllPageDetails($id: String!) {
    allStrapiPage(filter: { id: { eq: $id } }) {
      edges {
        node {
          name
          Slug
          id
          invertedColor
          heroType {
            ... on StrapiComponentPageComponentsHero {
              id
              title
              cta
              cover {
                url
                file {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      width: 5760
                      quality: 80
                    )
                  }
                }
              }
            }
            ... on StrapiComponentPageComponentsHeroTextual {
              id
              title
              content
              cta
              image {
                url
                file {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      width: 5760
                      quality: 80
                    )
                  }
                }
              }
            }
          }
          heroSecond {
            content
            displayLogo
            id
            images {
              url
              file {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    width: 5760
                    quality: 80
                  )
                }
              }
            }
          }
          workContent {
            title
            link
            blog_items {
              Slug
              pageDescription
              tumbnail {
                url
                file {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      width: 5760
                      quality: 80
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
