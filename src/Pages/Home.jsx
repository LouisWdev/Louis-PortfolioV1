import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';
import styled from 'styled-components';

const Home = () => {
  return (
    <Animator>
      <CenterContainer>
        <Text as='h1' style={{ color: 'white', textAlign: 'center'}}>
          Louis W.
        </Text>
        <Text as='h2' style={{ color: 'white', textAlign: 'center'}}>
          Welcome to my Portfolio
        </Text>
        <Text as='h3' style={{ color: 'white', textAlign: 'center'}}>
          Feel free to explore my website
        </Text>
        <ButtonsContainer>
          <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px' }}>Portfolio</Text>
          <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px' }}>Contact</Text>
          <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px' }}>About Me</Text>
        </ButtonsContainer>
      </CenterContainer>
    </Animator>
  )
}

export default Home;

const CenterContainer = styled.div`
  margin-top: 30vh;
`;

const ButtonsContainer = styled.div`
  text-align: center;
  cursor: pointer;
`;