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
    allStrapiPage: {
      edges: {
        0: { node: page },
      },
    },
  },
}) {
  const heroSection = () => {
    //When hero has a coverimage then we use standard Hero
    if (page.heroType[0].cover !== undefined) {
      return <Hero heroData={page.heroType[0]} />;
      //When there is no coverimage we use a HeroTextual
    } else if (page.heroType[0].cover === undefined) {
      if (page.heroType[0].content !== undefined) {
        return <HeroTextual heroData={page.heroType[0]} />;
      } else {
        return <HeroCta heroData={page} />;
      }
    }
  };

  return (
    <Layout cta={page.heroType[0].cta} secondary={page.invertedColor}>
      {heroSection()}
      {page.heroSecond !== null ? (
        <HeroSecond heroData={page.heroSecond} primary={page.invertedColor} />
      ) : null}
      {page.workContent !== null ? (
        <Work workContent={page.workContent} cta={page.heroType[0].cta} />
      ) : null}
    </Layout>
  );
}
export function Head({
  data: {
    allStrapiPage: {
      edges: {
        0: { node: page },
      },
    },
  },
}) {
  return (
    <>
      <title>{page.name} | Louis Vallaey</title>
      <meta name="description" content={page.seoMeta} />
      <meta name="robots" content="index, follow" />
    </>
  );
}

export const query = graphql`
  query GetAllPageDetails($id: String!) {
    allStrapiPage(filter: { id: { eq: $id } }) {
      edges {
        node {
          name
          Slug
          seoTitle
          seoMeta
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
