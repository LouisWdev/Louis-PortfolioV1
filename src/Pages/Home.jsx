import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';

const Home = () => {
  return (
    <Animator>
      <Text as='p' style={{ color: '#ddd' }}>
         Welcome to my Portfolio Home page
      </Text>
    </Animator>
  )
}

export default Home