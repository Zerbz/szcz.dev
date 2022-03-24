import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Button,
    HStack,
    VStack,
    Image,
    Link,
    IconButton,
    useColorModeValue,
    Divider,
  } from '@chakra-ui/react';
  import { SiGithub, SiLinkedin, SiDevDotTo } from 'react-icons/si';
  import { DownloadIcon } from '@chakra-ui/icons';
  
  export default function About() {
    return (
    <div id="About">
        <Box>
            <VStack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Divider
                width={{ sm: "70%", xl: "35%" }}
                mt="15px"
                mb="10px"
                bg="#f56565"
                padding="1px"
                />
            <Heading textAlign={'center'} size="2xl">About</Heading>
            <Divider
            width={{ sm: "70%", xl: "35%" }}
              mt="15px"
              mb="10px"
              bg="#f56565"
              padding="1px"
            />
            <br/>
            <br/>
            <br/>
            <Image
              borderRadius='full'
              boxSize='150px'
              src='/files/brenda.png'
              alt='Brenda'
            />
            <HStack align={'top'}>
                    <Box color={'black.400'} px={15}>
                      <Link p={3} href="https://www.linkedin.com/in/mszcz/" isExternal>
                        <IconButton
                          aria-label="linkedin"
                          variant="ghost"
                          size="lg"
                          icon={<SiLinkedin size="28px" />}
                          _hover={{
                            bg: '#f56565',
                            color: useColorModeValue('white', 'black'),
                          }}
                          isRound
                        />
                      </Link>
                      <Link p={3} href="https://github.com/Zerbz" isExternal>
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          icon={<SiGithub size="28px" />}
                          _hover={{
                            bg: 'red.500',
                            color: useColorModeValue('white', 'black'),
                          }}
                          isRound
                        />
                      </Link>
                      <Link p={3} href="https://dev.to/szcz" isExternal>
                        <IconButton
                          aria-label="dev.to"
                          variant="ghost"
                          size="lg"
                          icon={<SiDevDotTo size="35px" />}
                          _hover={{
                            bg: 'red.500',
                            color: useColorModeValue('white', 'black'),
                          }}
                          isRound
                        />
                      </Link>
                    </Box>
                </HStack>
            <Link href="/files/MattSzczerbaResumeWeb.pdf" isExternal download><Button><DownloadIcon mr="5px"/>Resume</Button></Link>
            <Container>
              I'm Brenda, and I'm cute, but I'm picky as shit. Meow Meow Meow Meow Meow
              Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow 
              Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow 
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Divider/>
            </VStack>                    
        </Box>
      </div>
    );
  }