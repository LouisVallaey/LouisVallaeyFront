import React from "react";
import styled from "styled-components";
import theme from "../ui/theme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const ContentContainer = styled.div`
  margin: 0 auto;
  width: 75%;
  display: flex;
  height: 80vh;
  align-items: flex-end;
  @media only screen and (max-width: 1000px) {
    justify-content: center;
    height: 90vh;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 490px;
  @media only screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
`;

const CtaButton = styled(Link)`
  border: none;
  border-radius: 5px;
  padding: 7px 14px 7px 14px;
  font-family: "BROLIMO";
  font-size: 1.875rem;
  text-decoration: none;
  background-color: ${theme.palette.common.white};
  color: ${theme.palette.secondary.main};
  @media only screen and (max-width: 1000px) {
    font-size: 1.475rem;
    padding: 7px 34px 7px 34px;
  }
`;
const ImageContainer = styled.div`
  position: fixed;
  z-index: -1;
`;
const GatsbyImageContainer = styled(GatsbyImage)`
  height: 100vh;
  z-index: -1;
  @media only screen and (max-width: 1000px) {
    width: 200%;
    right: 410px;
  }
  @media only screen and (max-width: 500px) {
    width: 200%;
    right: 310px;
  }
`;

export default function Hero({ heroData }) {
  const heroImage = getImage(heroData.cover.file);
  return (
    <HeroContainer>
      <ImageContainer>
        <GatsbyImageContainer image={heroImage} alt={heroData.title} />
      </ImageContainer>
      <ContentContainer>
        <TitleContainer>
          <h1>{heroData.title}</h1>
          <CtaButton to={`/contact`} key={`contact`}>
            {heroData.cta !== null ? heroData.cta : "contacteer mij"}
          </CtaButton>
        </TitleContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
