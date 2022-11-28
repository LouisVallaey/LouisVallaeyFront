import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import theme from "../ui/theme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

const HeroContainer = styled.div`
    position:relative;
    background-color:${theme.palette.common.white};
    width: 100%;
    height: 120vh;
    @media only screen and (max-width: 1000px){
       height: auto;
    }
`
const ContentContainer = styled.div`
    position:relative;
    margin: 0 auto;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120vh;
    @media only screen and (max-width: 1000px){
        height: auto;
        width: 80%;
    }
`
const TitleContainer = styled.div`
    text-align: left;
`
const BlogItemsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap:50px;
    @media only screen and (max-width: 1000px){
        flex-direction: column;
    }
    @media only screen and (max-width: 1000px){
        gap: 0px;
    }
`
const BlogItemContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    flex : 1;
    background-color:${theme.palette.secondary.main};
    h2{
        margin: 0px 50px 0px 50px;
        @media only screen and (max-width: 1450px){
            text-align: center;
            margin: 0px 0px 0px 0px;
        }
        @media only screen and (max-width: 1200px){
            font-size: 2rem;
        }       
    }
`
const BlogItemcontentContainer = styled.div`
    position: relative;
    display flex;
    flex : 1;
    flex-direction: column;
    h5{
         max-height: 110px;
         height: 110px;
        @media only screen and (max-width: 1000px){
            height: auto;
            text-align: center;
            margin: 50px 0 50px 0 ;

        }
    }

`
export default function Work({workContent,cta}){

    const useWindowSize = () => {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }
    const [width] = useWindowSize();

    const items = workContent.blog_items.slice(0,3).map((item,i)=>(
        <BlogItemcontentContainer key={i}>
            <BlogItemContainer to={`/album/${item.Slug.toLowerCase()}`} key={item.Slug}>
                <GatsbyImage image={getImage(item.tumbnail.file)} alt={item.Slug} />
            </BlogItemContainer>
            <h5>{item.pageDescription}</h5>
        </BlogItemcontentContainer>

    ))
 
    return(
        <HeroContainer>
            <ContentContainer>
                <TitleContainer>
                    <h4>Recent werk</h4>
                </TitleContainer>
                <BlogItemsContainer>
                    {items}
                    {items.length < 3 && width > 1000 ? (
                    <BlogItemcontentContainer>
                            <BlogItemContainer to={`/contact`} key={`contact`}>
                           <h2>{cta}!</h2>
                        </BlogItemContainer>
                        <h5> </h5>
                    </BlogItemcontentContainer>
                    ):(null)}
                </BlogItemsContainer>
            </ContentContainer>
        </HeroContainer>
    )
}