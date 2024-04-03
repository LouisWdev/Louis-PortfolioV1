import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';
import styled from 'styled-components';

const Home = () => {
  return (
    <Animator>
      <CenterContainer>
        <Text as='h1' style={{ color: '#5728d6', textAlign: 'center'}}>
          Louis 
        </Text>
        <Text as='h1' style={{ color: '#5728d6', textAlign: 'center'}}>
          Welcome to my Portfolio
        </Text>
        <ButtonsContainer>
          <Text as='p' style={{ color: '#5728d6', display: 'inline-block', marginRight: '10px' }}>Portfolio</Text>
          <Text as='p' style={{ color: '#5728d6', display: 'inline-block', marginRight: '10px' }}>Contact</Text>
          <Text as='p' style={{ color: '#5728d6', display: 'inline-block', marginRight: '10px' }}>About Me</Text>
        </ButtonsContainer>
      </CenterContainer>
    </Animator>
  )
}

export default Home;

const CenterContainer = styled.div`
  margin-top: 40vh;
`;

const ButtonsContainer = styled.div`
  text-align: center;
  cursor: pointer;
`;