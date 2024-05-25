import Navbar from "../Components/Navbar";

import { Text } from "@arwes/react";
import styled from "styled-components";


const About = () => {
  return (
  <>
  <Navbar />
    <MainContainer>
      <TextContainer>
        <HeadTextContainer>
         <Text>Welcome to my about page</Text>
        </HeadTextContainer>
        <Text>Here I will explain how I started withA my coding journey</Text> 
        <ParagraphTextContainer>
            <SubTitle>Why I started coding.</SubTitle>
            <SubText>
             I started coding from a young age and was already amazed by how coding works.
             And so I strive to become a 10x developer. Besides coding I also do fitness and long distance running.
            </SubText>
        </ParagraphTextContainer>

        <ParagraphTextContainer>
            <SubTitle>Next generation.</SubTitle>
            <SubText>
            Throughout my journey of learning how to code I have learned how to use different technologies.<br /> 
            And now I have a good understanding of these powerful last generation technologies<br />
            Some of these you may know like NextJS, React, etc. These frameworks are an essential part of what a business needs to succeed in the modern sphere of IT.
            </SubText>
        </ParagraphTextContainer>

        <ParagraphTextContainer>
            <SubTitle>Crypto</SubTitle>
            <SubText>
            The decentralized crypto market has been on the rise and lots of people and businesses are using it and yet there are people that are missing out, as for me<br />
          I have been studying this market ever since it has been becoming mainstream and have been working on projects that have to do with this trend.<br />
            </SubText>
        </ParagraphTextContainer>

        <ParagraphTextContainer>
            <SubTitle>AI</SubTitle>
            <SubText>
            From a young age I have had a passion and interest in sci fi and I fell in love with the genre, 
            And I have been waiting for the chance to learn about AI and now that it has been<br />
            becoming popular I have been having a keen interest in AI technology and I see it as an essential part in humanity's strive towards the future so I am expecting to be working on some AI projects. 
            </SubText>
        </ParagraphTextContainer>
      </TextContainer>
    </MainContainer> 
  </>
  )
}

export default About
const MainContainer = styled.div`
    background-color: red;
    text-align: center;
    margin-top: 5vh;
`;

const TextContainer = styled.div``;

const HeadTextContainer = styled.div`
     font-size: 3vh;
`;

const ParagraphTextContainer = styled.div`
    margin-top: 3vh;
`;

const SubTitle = styled.div`
    font-size: 2.5vh;
    margin-bottom: 0.5vh;
`;

const SubText = styled.div`
     margin-left: 35vw;
     width: 30vw;
`;