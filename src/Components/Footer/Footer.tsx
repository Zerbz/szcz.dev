import { Box, Container, Stack, Text, useColorModeValue, Link, IconButton } from '@chakra-ui/react';
import { SiDevDotTo, SiGithub, SiLinkedin } from 'react-icons/si';
  
export default function Footer() {
  return (
    <Box >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text fontSize={"xl"} color={"#f56565"}>Matt Szczerba, 2022.</Text>
        <Stack direction={'row'} spacing={6}>
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
            />
          </Link>
          <Link p={3} href="https://github.com/szczz" isExternal>
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              icon={<SiGithub size="28px" />}
              _hover={{
                bg: 'red.500',
                color: useColorModeValue('white', 'black'),
              }}
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
            />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}