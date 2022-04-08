import { HashLink } from 'react-router-hash-link';
import { Box, Heading, Container, Text, Divider, Stack, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import Typist from 'react-typist';
import { useMediaQuery } from "@chakra-ui/react"

const cursorProps = {
  show: true,
  blink: true,
  element: '_',
}

export default function Title() {
  const [visibility, setVisibility] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)") 

  function complete(){
    setVisibility(100);
  }

  return (
    <Box>
      <Container maxW={'4xl'} >
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }} >
          <Box h={isMobile ? "100px" : "200px"}>
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
            </Box>
            <Flex pt={"8%"}/>  
            <Box opacity={visibility} mt={{ sm: "50px", xl: "100px" }} className="animation">
              <Box ml={isMobile ? "46.6%" : "49%"} className="arrow">
                <HashLink smooth to={"#About"}>
                        <span/>
                </HashLink>          
              </Box>
            </Box>
        </Stack>
      </Container>
      <Divider/> 
      <Flex pt={"8%"}/>  
    </Box>
  );
}
