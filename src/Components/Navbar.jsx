import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Animator>
      <NavbarContainer>
       <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '10px' }}>Home</Text>
      </NavbarContainer>
    </Animator>
  )
}

export default Navbar

const NavbarContainer = styled.div`
     text-align: right;
`;