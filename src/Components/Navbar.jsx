import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Animator>
      <NavbarContainer>
       <Text as='p' style={{ color: 'white', display: 'inline-block',marginLeft: '10px' }}>Home</Text>
       <Text as='p' style={{ color: 'white', display: 'inline-block', marginLeft: '10px' }}>Contact</Text>
       <Text as='p' style={{ color: 'white', display: 'inline-block', marginLeft: '10px' }}>Portfolio</Text>
       <Text as='p' style={{ color: 'white', display: 'inline-block', marginLeft: '10px'}}>About</Text>
      </NavbarContainer>
    </Animator>
  )
}

export default Navbar

const NavbarContainer = styled.div`
     text-align: right;
     margin-right: 10px;
     cursor: pointer;
`;