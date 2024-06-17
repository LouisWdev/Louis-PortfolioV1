//REACT
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ARWES 
import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';



const Home = () => {

  return (
       <Animator duration={{ enter: 2.5, exit: 1.5 }}>
           <Text as='h1' style={{textAlign: 'center', marginBottom: '5px', marginTop: '30vh'}}>
             Louis W.
           </Text>
           <Text as='h2' style={{textAlign: 'center', marginBottom: '5px', marginTop: '1vh'}}>
             Welcome to my Portfolio
           </Text>
           <Text as='h3' style={{textAlign: 'center', marginTop: '5px'}}>
             Feel free to explore my website
           </Text>

            <div style={{marginTop: '15px'}}>
             <Link to="Portfolio">
                  <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px', marginLeft: '43.3vw' }}>Portfolio</Text>
             </Link>
             <Link to="Contact">
                  <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px', marginLeft: '1.5vw'}}>Contact</Text>
             </Link>
             <Link to="About">
                  <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px', marginLeft: '1.5vw'}}>About</Text>
             </Link>
            </div>

       </Animator>
  )
}

export default Home;
