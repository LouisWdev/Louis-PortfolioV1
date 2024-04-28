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
        <>
         <Text></Text>
        </>
        <ParagraphTextContainer>

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