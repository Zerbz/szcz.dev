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
  } from '@chakra-ui/react';
  import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si';
  import { DownloadIcon } from '@chakra-ui/icons';
  
  export default function About() {
    return (
    <div id="About">
        <Box p={4}>
            <VStack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Meow</Heading>
            <Image
              borderRadius='full'
              boxSize='150px'
              src='/files/brenda.png'
              alt='Dan Abramov'
            />
            <HStack align={'top'}>
                    <Box color={'red.400'} px={15}>
                      <Link href="https://www.linkedin.com/in/mszcz/" isExternal>
                        <IconButton
                          aria-label="linkedin"
                          variant="ghost"
                          size="lg"
                          icon={<SiLinkedin size="28px" />}
                          _hover={{
                            bg: 'blue.500',
                            color: useColorModeValue('white', 'gray.700'),
                          }}
                          isRound
                        />
                      </Link>
                      <Link href="https://github.com/Zerbz" isExternal>
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          icon={<SiGithub size="28px" />}
                          _hover={{
                            bg: 'blue.500',
                            color: useColorModeValue('white', 'gray.700'),
                          }}
                          isRound
                        />
                      </Link>
                      <Link href="https://medium.com/@szcz" isExternal>
                        <IconButton
                          aria-label="medium"
                          variant="ghost"
                          size="lg"
                          icon={<SiMedium size="28px" />}
                          _hover={{
                            bg: 'blue.500',
                            color: useColorModeValue('white', 'gray.700'),
                          }}
                          isRound
                        />
                      </Link>
                    </Box>
                </HStack>
            <a href="/files/MattSzczerbaResumeWeb.pdf" target="_blank" download> <Button><DownloadIcon mr="5px"/>Resume</Button></a>
            <Container>
              I'm Brenda, and I'm cute, but I'm picky as shit. Meow Meow Meow Meow Meow
              Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow 
              Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow 
            </Container>
            </VStack>
    
            <Container maxW={'6xl'} mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                
            </SimpleGrid>
            </Container>
        </Box>
      </div>
    );
  }


  {/* {features.map((feature) => (
                <HStack key={feature.id} align={'top'}>
                    <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                    <Text fontWeight={600}>{feature.title}</Text>
                    <Text color={'gray.600'}>{feature.text}</Text>
                    </VStack>
                </HStack>
                ))} */}