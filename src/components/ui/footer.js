import React from "react";
import styled from "styled-components";
import theme from "./theme";
import { Link } from "gatsby";
import logosecondary from "../../images/logoGreen.svg";
import logoprimary from "../../images/logoWhite.svg";

const FooterContainer = styled.div`
  background-color: ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
`;
const ContentContainer = styled.div`
margin: 0 auto ;
padding 100px 0 20px 0;
width: 65%;
display: flex;
justify-content:center;
align-items: center;
@media only screen and (max-width: 1000px){
  flex-direction : column
}
`;
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  h3 {
    color: ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
    @media only screen and (max-width: 1000px) {
      text-align: center;
    }
  }
  div {
    > * {
      color: ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
    }
    button {
      border: 2px solid ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
    }
  }
  @media only screen and (max-width: 1000px) {
    margin-bottom: 100px;
  }
`;
const RouteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  div {
    h4 {
      color: ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
    }
    a {
      color: ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
    }
    border-left: 2px solid ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
    &:last-child {
      border-right: 2px solid ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
    }
  }
`;
const RouteList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
const RouteLink = styled(Link)`
  text-decoration: none;
  font-family: "BROLIMO";
  font-size: 1.5rem;
  margin: 10px 0px 10px 0px;
`;
const RouteTitle = styled.h4`
  margin: 0px 0px 35px 0px;
  font-weight: 200;
`;
const CtaContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media only screen and (max-width: 1000px) {
    width: 80vw;
  }
  a {
    border: 2px solid ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
  }
`;
const CtaButton = styled(Link)`
  width: 100%;
  text-decoration: none;
  font-family: "BROLIMO";
  font-size: 1.875rem;
  text-align: center;
  border-radius: 90px;
  padding: 15px 24px 15px 24px;
  background-color: transparent;
`;

const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: ${(props) => (props.secondary ? theme.palette.primary.main : theme.palette.secondary.main)};
  }
`;
const Logo = styled.img`
  width: 80px;
  height: 80px;
  @media only screen and (max-width: 1000px) {
    margin-top: 20px;
    width: 40px;
    height: 40px;
  }
`;
const CreditLink = styled.a`
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  margin: 10px;
  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
export default function Footer({ cta, secondary, pages }) {
  return (
    <FooterContainer secondary={secondary}>
      <ContentContainer>
        <LeftContainer secondary={!secondary}>
          <h3>Elk verhaal is uniek en ik help graag mee om deze verhalen vast te leggen</h3>
          <CtaContainer secondary={!secondary}>
            <CtaButton to={`/contact`} key={`contact`}>
              {cta !== undefined ? cta : "Contacteer mij"}
            </CtaButton>
          </CtaContainer>
        </LeftContainer>
        <RouteContainer secondary={!secondary}>
          <RouteList>
            <RouteTitle>Fotografie</RouteTitle>
            {pages.slice(0, 2).map((page) => (
              <RouteLink component={Link} to={page.node.link || `/${page.node.name.toLowerCase()}`} key={page.node.id}>
                {page.node.name}
              </RouteLink>
            ))}
          </RouteList>
          <RouteList>
            <RouteTitle>About</RouteTitle>
            {pages.slice(2, 4).map((page) => (
              <RouteLink component={Link} to={page.node.link || `/${page.node.name.toLowerCase()}`} key={page.node.id}>
                {page.node.name === "About" ? "Wie ben ik" : page.node.name}
              </RouteLink>
            ))}
          </RouteList>
        </RouteContainer>
      </ContentContainer>
      <CreditContainer secondary={!secondary}>
        {secondary ? <Logo src={logosecondary} alt="logo"></Logo> : <Logo src={logoprimary} alt="logo"></Logo>}
        <CreditLink>
          launched by <b>hello.louisvallaey.be</b>
        </CreditLink>
      </CreditContainer>
    </FooterContainer>
  );
}
