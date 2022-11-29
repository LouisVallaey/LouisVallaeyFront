import React from "react";
import styled from "styled-components";
import theme from "../ui/theme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RectanglePrimary from "../../images/RectanglePrimary.svg";

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.palette.secondary.main};
  @media only screen and (max-width: 1000px) {
    background-color: #325a49b8;
  }
`;
const ContentContainer = styled.div`
  margin: 0 auto;
  width: 75%;
  display: flex;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  @media only screen and (max-width: 1500px) {
    width: 95%;
  }
  @media only screen and (max-width: 1000px) {
    align-items: flex-end;
    width: 100%;
  }
`;
const TextContainer = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
  @media only screen and (max-width: 1000px) {
    width: 80%;
    margin-bottom: 50px;
  }
`;
const VisualContainer = styled.div`
  margin-top: 450px;
  position: relative;
  @media only screen and (max-width: 1000px) {
    position: fixed;
    z-index: -1;
  }
`;
const HeroDetail = styled.img`
  right: -160px;
  top: -180px;
  position: absolute;
  z-index: 1;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
const GatsbyImageContainer = styled(GatsbyImage)`
  width: 550px;
  z-index: 2;
  @media only screen and (max-width: 1500px) {
    width: 40vw;
  }
  @media only screen and (max-width: 1000px) {
    height: 100vh;
    width: 100vw;
  }
`;
export default function HeroTextual({ heroData }) {
  const heroImage = getImage(heroData.image.file);
  return (
    <HeroContainer>
      <ContentContainer>
        <TextContainer>
          <h2>{heroData.title}</h2>
          <h3>{heroData.content}</h3>
        </TextContainer>
        <VisualContainer>
          <GatsbyImageContainer image={heroImage} alt="portrait image" />
          <HeroDetail src={RectanglePrimary} alt="backgroundDetail" />
        </VisualContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
