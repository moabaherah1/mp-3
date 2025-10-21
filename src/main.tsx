// Mohammed Abaherah
// Main.tsx
// October 20, 2025

import { styled } from 'styled-components';

const MainWrapper = styled.main`
  width: 70%;
  height: auto;
  overflow: hidden;
  text-align: left;

  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

const IntroDiv = styled.div`
  display: flex;
  padding-top: 3%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 5%;
  }
`;

const IntroText = styled.p`
  padding: 4% 5% 10% 10%;
  letter-spacing: 0.5px;
  line-height: 1.5;

  @media screen and (max-width: 1024px) {
    padding: 0;
    width: 70%;
    margin: 0 auto;
  }
`;

const Img = styled.img`
  max-width: 45%;
  float: left;
  margin: auto;

  @media screen and (max-width: 1024px) {
    float: none;
    display: block;
    margin: 0 auto 20px auto;
    max-width: 80%;
  }
`;

interface MainProps {
    heading: string;
    text: string;
    imgSrc?: string;
    altText?: string;
}

export function Main({ heading, text, imgSrc, altText }: MainProps) {
    return (
        <MainWrapper>
            <h3>{heading}</h3>
            <IntroDiv>
                {imgSrc && <Img src={imgSrc} alt={altText || ''} />}
                <IntroText>{text}</IntroText>
            </IntroDiv>
        </MainWrapper>
    );
}
