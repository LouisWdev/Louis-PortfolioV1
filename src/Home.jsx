import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Background>
       <Animator>
         <CenterContainer>
           <Text as='h1' style={{ color: 'white', textAlign: 'center', marginBottom: '5px'}}>
             Louis W.
           </Text>
           <Text as='h2' style={{ color: 'white', textAlign: 'center', marginBottom: '5px'}}>
             Welcome to my Portfolio
           </Text>
           <Text as='h3' style={{ color: 'white', textAlign: 'center'}}>
             Feel free to explore my website
           </Text>
           <ButtonsContainer>
             <Link to="Portfolio">
               <ButtonContainer><Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px' }}>Portfolio</Text></ButtonContainer>
             </Link>
             <Link to="Contact">
              <ButtonContainer><Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px' }}>Contact</Text></ButtonContainer>
             </Link>
             <Link to="About">
               <ButtonContainer><Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px' }}>About</Text></ButtonContainer>
             </Link>
           </ButtonsContainer>
         </CenterContainer>
       </Animator>
    </Background>
  )
}

export default Home;

const Background = styled.div`

`;

const CenterContainer = styled.div`
  margin-top: 35vh;
  font-size: 2.3vh;
`;

const ButtonsContainer = styled.div`
  margin-top: 5px;
  text-align: center;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
    width: 75px;
    font-weight: 350;
    font-size: 2vh;
    padding: 8px 5px 8px 15px;
    margin-top: 5px;
    margin-right: 15px;
    text-align: center;
    display: inline-block;
    transition: border 0.5s ease-in;
    border: 2px solid white;
    border-radius: 5px;
     
    &:hover {
      border: 2px solid red;
      border-radius: 5px;
      color: red;
    }
`;