import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <>
    <Navbar />
    <PortfolioContainer>
      <PortfolioTitle>Welcome to the portfolio section</PortfolioTitle>
      <PortfolioTitleSub>All of my developed projects</PortfolioTitleSub>
    </PortfolioContainer>
    </>
    
  )
}

export default Portfolio

const PortfolioContainer = styled.div`
      margin-top: 35vh;
      margin-left: 40vw;
      text-align: center;
`;

const PortfolioTitle = styled.div`
      font-size: 3vh;
      border-bottom: 2px solid white;
      width: 25vw;
      padding-bottom: 8px;
      margin-bottom: 5px;
`;

const PortfolioTitleSub = styled.div`
      margin-right: 35vw;
`;