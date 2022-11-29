import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeroContainer = styled.div`
  width: 100vw;
  height: 80vh;
`;
const ContentContainer = styled.div`
  margin: 0 auto;
  width: 75%;
  display: flex;
  height: 60vh;
  align-items: flex-end;
  @media only screen and (max-width: 1000px) {
    justify-content: center;
    height: 50vh;
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
  @media only screen and (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const ImageContainer = styled.div`
  position: fixed;
  z-index: -1;
`;
const Overlay = styled.div`
  background-color: #00000017;
  position: fixed;
  height: 80vh;
  width: 100vw;
`;
const GatsbyImageContainer = styled(GatsbyImage)`
  height: 80vh;
  z-index: -1;
  @media only screen and (max-width: 1000px) {
    img {
      width: 100%;
    }
  }
  img {
    object-position: bottom;
  }
`;

export default function AlbumHero({ heroData }) {
  const heroImage = getImage(heroData.image.file);
  return (
    <HeroContainer>
      <ImageContainer>
        <Overlay />
        <GatsbyImageContainer image={heroImage} alt={heroData.title} />
      </ImageContainer>
      <ContentContainer>
        <TitleContainer>
          <h1>{heroData.title}</h1>
        </TitleContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
