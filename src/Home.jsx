//REACT
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ARWES 
import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';



const Home = () => {
  const [active] = useState(true);

  return (
       <Animator active={active} duration={{ enter: 2.5, exit: 1.5 }}>
           <Text as='h1' style={{textAlign: 'center', marginBottom: '5px'}}>
             Louis W.
           </Text>
           <Text as='h2' style={{textAlign: 'center', marginBottom: '5px'}}>
             Welcome to my Portfolio
           </Text>
           <Text as='h3' style={{textAlign: 'center'}}>
             Feel free to explore my website
           </Text>
             <Link to="Portfolio">
               <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px' }}>Portfolio</Text>
             </Link>
             <Link to="Contact">
              <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px' }}>Contact</Text>
             </Link>
             <Link to="About">
               <Text as='p' style={{ color: 'white', display: 'inline-block', marginRight: '15px' }}>About</Text>
             </Link>
       </Animator>
  )
}

export default Home;