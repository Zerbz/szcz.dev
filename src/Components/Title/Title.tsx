import { HashLink } from 'react-router-hash-link';
import {
  Box,
  Heading,
  Container,
  Text,
  Divider,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Typist from 'react-typist';

const cursorProps = {
  show: true,
  blink: true,
  element: '_',
}

export default function Title() {
  const [visibility, setVisibility] = useState(0);

  function complete(){
    setVisibility(100);
  }

  return (
    <>
      <Container maxW={'4xl'} >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          >
          <Heading
            fontWeight={200}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            fontFamily={'heading'}
            lineHeight={'180%'}>
            <Typist cursor={cursorProps} onTypingDone={complete}>
              <Text as={'span'}>Matt </Text>
              <Text as={'span'} color={'red.400'}>Szcz</Text>.dev
              <Typist.Backspace count={4} delay={500} />
              <Text as={'span'}>erba</Text><br/>
              <Text as={'span'} color={'red.400'}>Full Stack</Text> Dev<Text as={'span'} color={'red.400'}>eloper</Text>
            </Typist>
          </Heading>
          <br/>
          <br/>  
          <Box opacity={visibility} left={'50%'} mt={{ sm: "50px", xl: "100px" }} className="animation">
            <div className="arrow">
              <HashLink smooth to={"#About"}>
                      <span/>
              </HashLink>          
            </div>
          </Box>
          </Stack>
          <Divider />   
          <br/>
          <br/>
          <br/>
      </Container>
    </>
  );
}
