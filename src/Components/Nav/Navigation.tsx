import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
  Grid
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMediaQuery } from "@chakra-ui/react"
import { HashLink } from 'react-router-hash-link';

const Links = ['About', 'Experience', 'Education', 'Contact'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#/' + children}>
//     {children}
//   </Link>
// );

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)") 
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={isMobile ? 'space-between' : 'flex-end'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <HashLink smooth to={"#" + link}>{link}</HashLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                 <HashLink smooth to={"#" + link}>{link}</HashLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}