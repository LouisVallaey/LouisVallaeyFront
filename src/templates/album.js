import React from "react";
import Layout from "../components/ui/layout";
import { graphql } from "gatsby";
import AlbumHero from "../components/album/albumHero";
import AlbumContent from "../components/album/albumContent";

export default function Album({ pageContext, data: { allStrapiBlogItem: { edges: { 0: { node: album } } } } }) {
    return (
        <Layout>
        <AlbumHero heroData={album.heroTextual}/>
        <AlbumContent albumContent={album}></AlbumContent>
        </Layout>

    )
}

export const query = graphql`
    query GetAllBlogItemDetails($id: String!) {
    allStrapiBlogItem(filter: {id: {eq: $id}}) {
        edges {
        node {
            Slug
            id
            title
            Album {
            url
            file {
                childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 5760, quality: 80)
                }
            }
            }
            heroTextual {
            title
            image {
                file {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, width: 2048, quality: 80)
                }
                }
            }
        }
        }
        }
    }
    }
`