import React from "react";
import styled from "styled-components";
import theme from "../ui/theme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import logoGreen from "../../images/logoGreen.svg";

const HeroContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${(props) =>
    props.primary ? theme.palette.primary.main : theme.palette.secondary.main};

  @media only screen and (max-width: 1000px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const ColoredAccent = styled.div`
  position: absolute;
  right: 0px;
  bottom: 180px;
  width: 80px;
  height: 250px;
  background-color: ${(props) =>
    props.primary ? theme.palette.secondary.main : theme.palette.primary.main};

  @media only screen and (max-width: 1300px) {
    width: 40px;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
  padding-top: 15vh;
  min-height: 60vh;
  width: 70%;
  justify-content: ${(props) => (props.logo ? "flex-end" : "space-around")};
  flex-direction: ${(props) => (props.primary ? "row" : "row-reverse")};

  @media only screen and (max-width: 1300px) {
    padding-top: 0vh;
  }
  @media only screen and (max-width: 1000px) {
    padding-top: 0vh;
    min-height: 50vh;
    gap: 0px;
  }
`;

const TitleContainer = styled.div`
  width: ${(props) => (props.logo ? "800px" : "620px")};
  text-align: ${(props) => (props.primary ? "left" : "right")};
  margin-bottom: 150px;
  h3 {
    color: ${(props) =>
      props.primary
        ? theme.palette.primary.main
        : theme.palette.secondary.main};
  }

  @media only screen and (max-width: 1300px) {
    h3 {
      font-size: 2rem;
    }
    margin-bottom: 250px;
  }

  @media only screen and (max-width: 1000px) {
    h3 {
      font-size: 2.4rem;
    }
    text-align: center;
    margin-bottom: 0px;
  }
`;
const ImageContainer = styled.div``;
const VerticalImageContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
const HorizontalImageContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  width: 100%;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
const HorizontalImage = styled(GatsbyImage)`
  position: relative;
  top: -20vh;
  width: 35vw;
`;
const VerticalImage = styled(GatsbyImage)`
  width: 25vw;
`;
const LogoContainer = styled.div`
  position: absolute;
  left: -350px;
  bottom: 0;
  img {
    height: 55vh;
  }
  @media only screen and (max-width: 1500px) {
    display: none;
  }
`;

export default function HeroSecond({ heroData, primary }) {
  const getImages = () => {
    //only take first 2 images
    const images = heroData.images.slice(0, 2);
    //sort images on vertical or horizontal layout (important for styling)
    images.sort((a, b) =>
      a.file.childImageSharp.gatsbyImageData.height <
      b.file.childImageSharp.gatsbyImageData.height
        ? 1
        : -1
    );
    return (
      <>
        {
          //mapping array of images
          images.map((image, i) => {
            var imageData = getImage(image.file);
            if (imageData.height > imageData.width) {
              return (
                <VerticalImageContainer key={i}>
                  <VerticalImage image={imageData} alt={image.url} />
                </VerticalImageContainer>
              );
            } else {
              return (
                <HorizontalImageContainer key={i} primary={!primary}>
                  <HorizontalImage image={imageData} alt={image.url} />
                </HorizontalImageContainer>
              );
            }
          })
        }
      </>
    );
  };

  return (
    <HeroContainer primary={!primary}>
      <ColoredAccent primary={!primary} />
      <ContentContainer
        logo={!(heroData.displayLogo == null || false)}
        primary={!primary}
      >
        <ImageContainer>
          {heroData.displayLogo == null || false ? (
            getImages()
          ) : (
            <LogoContainer>
              <img src={logoGreen} alt="logo louis vallaey" />
            </LogoContainer>
          )}
        </ImageContainer>
        <TitleContainer
          primary={primary}
          logo={!(heroData.displayLogo == null || false)}
        >
          <h3>{heroData.content}</h3>
        </TitleContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
