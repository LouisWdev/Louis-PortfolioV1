import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <>
    <Navbar />
    <PortfolioContainer>
     <div>The Portfolio section will be here</div>
    </PortfolioContainer>
    </>
    
  )
}

export default Portfolio

const PortfolioContainer = styled.div`
      margin-top: 35vh;
      margin-left: 45vw;
`;