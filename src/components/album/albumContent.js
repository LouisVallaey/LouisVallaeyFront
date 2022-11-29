import React from "react";
import styled from "styled-components";
import theme from "../ui/theme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeroContainer = styled.div`
  position: relative;
  background-color: ${theme.palette.common.white};
  width: 100%;
  z-index: -1;
  @media only screen and (max-width: 1000px) {
    height: auto;
  }
`;
const ContentContainer = styled.div`
  width: 80%;
  margin: 0px 10% 0px 10%;
  padding: 10vh 0 10vh 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
const GatsbyImageContainer = styled(GatsbyImage)`
  flex-grow: 1;
  img {
    height: 26vw;
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;

    @media only screen and (max-width: 1500px) {
      height: 36vw;
    }

    @media only screen and (max-width: 700px) {
      height: auto;
      width: 100%;
    }
  }
`;

export default function AlbumContent({ albumContent }) {
  const images = Array.from(albumContent.Album)
    .reverse()
    .map((image) => (
      <GatsbyImageContainer
        image={getImage(image.file)}
        alt={image.url}
        key={image.url}
      />
    ));

  return (
    <HeroContainer>
      <ContentContainer>{images}</ContentContainer>
    </HeroContainer>
  );
}
