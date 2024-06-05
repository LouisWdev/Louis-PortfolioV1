import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <Animator>
      <NavbarContainer>
         <Link to="/"><TextContainer><Text>Home</Text></TextContainer></Link>
         <Link to="/Portfolio"><TextContainer><Text>Portfolio</Text></TextContainer></Link>
         <Link to="/Contact"><TextContainer><Text>Contact</Text></TextContainer></Link>
         <Link to="/About"><TextContainer><Text>About</Text></TextContainer></Link>
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
    width: 85px;
    font-size: 1rem;
    padding: 8px 12px 5px 5px;
    display: inline-block;
    transition: all 0.5s ease-in;
     
    &:hover {
      border-bottom: 2px solid white;
      border-right: 2px solid white;
    }
`;