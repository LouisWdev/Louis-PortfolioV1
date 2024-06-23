//REACT
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ARWES 



const Home = () => {

  return (
     <MainTextContainer>
           <TextContainer style={{fontSize: '5vh'}}>
             Louis W.
           </TextContainer>
           <TextContainer style={{fontSize: '3.5vh'}}>
             Welcome to my Portfolio
           </TextContainer>
           <TextContainer>
             Feel free to explore my website
           </TextContainer>

            <div style={{marginTop: '15px'}}>
             <Link to="Portfolio">
                  <ButtonContainer style={{marginLeft: '42vw'}}>Portfolio</ButtonContainer>
             </Link>
             <Link to="Contact">
                  <ButtonContainer>Contact</ButtonContainer>
             </Link>
             <Link to="About">
                  <ButtonContainer>About</ButtonContainer>
             </Link>
            </div>
     </MainTextContainer>
  )
}

export default Home;

const MainTextContainer = styled.div`
      margin-top: 35vh;
`;

const TextContainer = styled.div`
   text-align: center;
   margin-bottom: 5px;
   margin-top: 1vh;
`;

const ButtonContainer = styled.div`
     display: inline-block;
     margin-left: 1vw;
     border: solid white 2px;
     padding: 1.5vh 1vw;
     border-radius: 5px;
     transition: 1.5s border;

     &:hover {
        border: solid blue 3px;
     }
`;