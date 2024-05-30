import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <>
    <Navbar />
    <PortfolioContainer>
      <PortfolioTitle>Welcome to the portfolio section</PortfolioTitle>
      <PortfolioTitleSub></PortfolioTitleSub>
    </PortfolioContainer>
    </>
    
  )
}

export default Portfolio

const PortfolioContainer = styled.div`
      margin-top: 35vh;
      margin-left: 43vw;
`;

const PortfolioTitle = styled.div`
      font-size: 3vh;
`;

const PortfolioTitleSub = styled.div``;