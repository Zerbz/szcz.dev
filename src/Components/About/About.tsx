import {
    Box,
    Container,
    Heading,
    Tooltip,
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
  import { useMediaQuery } from "@chakra-ui/react";
  
  export default function About() {
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
    return (
    <div id="About">
        <Box>
            <VStack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Divider
                width={isMobile ? "50%" : "35%"}
                mt="15px"
                mb="10px"
                bg="#f56565"
                padding="1px"
                />
            <Heading textAlign={'center'} size="2xl">About</Heading>
            <Divider
              width={isMobile ? "50%" : "35%"}
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
              objectFit='cover'
              boxSize='150px'
              src='/files/ellie.png'
              alt='Ellie'
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
                      <Tooltip hasArrow label={"First article coming soon!"} shouldWrapChildren mt='3'>
                        <Link p={3} href="https://dev.to/szcz" isExternal>
                          <IconButton
                            aria-label="dev.to"
                            disabled = {true}
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
                      </Tooltip>
                    </Box>
                </HStack>
            <Link href="/files/MattSzczerbaResumeWeb.pdf" isExternal download><Button><DownloadIcon mr="5px"/>Resume</Button></Link>
            </VStack>    
            </Box>
            <Container fontSize={"xl"} pt={"3%"} maxW={'3xl'}  textAlign={'left'}>
              Hello! Thanks for stopping by! My name's Matt and I'm a full stack developer currently living in Kitchener Ontario. As cliche
              as it probably sounds, I love tackling difficult problems and creating apps that set the bar higher. I guess I enjoy disruption.....
              oh the cat? Yah I'll shut up, her name's Ellie and she's unbelievably sweet.
            </Container>
            <br/>
            <br/>

            <br/>
            <br/>
            <Divider/>                

      </div>
    );
  }