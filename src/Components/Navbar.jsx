import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Animator>
      <NavbarContainer>
       <Text as='p' style={{ color: 'white', display: 'inline-block', marginLeft: '15px' }}>Home</Text>
       <Text as='p' style={{ color: 'white', display: 'inline-block', marginLeft: '15px' }}>Contact</Text>
       <Text as='p' style={{ color: 'white', display: 'inline-block', marginLeft: '15px' }}>Portfolio</Text>
       <Text as='p' style={{ color: 'white', display: 'inline-block', marginLeft: '15px'}}>About</Text>
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