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
        <Text>Here I will explain how I started with my coding journey</Text> 
        <ParagraphTextContainer>
            <SubTitle>Why I started coding.</SubTitle>
            <SubText>
             I started coding from a young age and was already amazed by how coding works.
             And so I strive to become a 10x developer. Besides coding I also do fitness and long distance running.
            </SubText>
        </ParagraphTextContainer>
      </TextContainer>
    </MainContainer> 
  </>
  )
}

export default About

//STYLED SECTION 
const MainContainer = styled.div`
    background-color: red;
    text-align: center;
    margin-top: 5vh;
`;

const TextContainer = styled.div``;

const HeadTextContainer = styled.div`
     font-size: 3vh;
`;

const ParagraphTextContainer = styled.div``;

const SubTitle = styled.div``;

const SubText = styled.div``;