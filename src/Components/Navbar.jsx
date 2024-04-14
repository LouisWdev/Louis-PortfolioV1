import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';
import styled from 'styled-components';

const Navbar = () => {

  return (
    <Animator>
      <NavbarContainer>
      {/* Home button */}
       <TextContainer>
       <Text as='p' 
        style={{ 
         color: 'white', 
         display: 'inline-block', 
         marginLeft: '15px',
         }}>
        Home
       </Text>
       </TextContainer>

       {/* Contact button */}
       <TextContainer>
       <Text as='p' 
       style={{ 
        color: 'white', 
        display: 'inline-block', 
        marginLeft: '15px' 
       }}>
        Contact
      </Text>
       </TextContainer>

       {/* About button */}
       <TextContainer>
       <Text as='p' 
       style={{ 
        color: 'white', 
        display: 'inline-block', 
        marginLeft: '15px' }}>
          Portfolio
       </Text>
       </TextContainer>
       {/* About button */}
       <TextContainer>
       <Text as='p' style={{ 
        color: 'white', 
        display: 'inline-block', 
        marginLeft: '15px'
      }}>
        About
      </Text>
      </TextContainer>
      </NavbarContainer>
    </Animator>
  )
}

export default Navbar

const NavbarContainer = styled.div`
     text-align: right;
     margin-right: 30px;
     cursor: pointer;
`;

const TextContainer = styled.div`
    width: 75px;
    font-size: 2vh;
    padding-left: 20px;
    padding-right: 40px;
    display: inline-block;
    transition: all 0.5s ease-in;
     
    &:hover {
      border-bottom: 2px solid white;
      border-right: 2px solid white;
    }
`;