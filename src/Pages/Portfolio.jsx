import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <>
    <Navbar />
    <PortfolioContainer>
     <div>Welcome to the portfolio section</div>
    </PortfolioContainer>
    </>
    
  )
}

export default Portfolio

const PortfolioContainer = styled.div`
      margin-top: 35vh;
      margin-left: 43vw;
`;