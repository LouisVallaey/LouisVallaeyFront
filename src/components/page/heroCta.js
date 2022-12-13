import React from "react";
import styled from "styled-components";
import theme from "../ui/theme";
import RectanglePrimary from "../../images/RectanglePrimary.svg";
import LogoWhite from "../../images/logoWhite.svg";

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
  }
  h2 {
    padding-bottom: 40px;
  }
  a {
    margin: 12px 0px 12px 0px;
    text-decoration: none;
    font-family: "BROLIMO";
    font-size: 2rem;
    font-weight: 200;
    color: ${theme.palette.primary.main};
    @media only screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
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
const LogoContainer = styled.img`
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
export default function HeroCta({ heroData }) {
  return (
    <HeroContainer>
      <ContentContainer>
        <TextContainer>
          <h2>Lets Connect!</h2>
          <a href="mailto: info@louisvallaey.be">email : info@louisvallaey.be</a>
          <a href="tel:0472098791"> tel : 0472 09 87 91</a>
        </TextContainer>
        <VisualContainer>
          <LogoContainer src={LogoWhite} alt="portrait image" />
          <HeroDetail src={RectanglePrimary} alt="backgroundDetail" />
        </VisualContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
