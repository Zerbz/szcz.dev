import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,

} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMediaQuery } from "@chakra-ui/react"
import { HashLink } from 'react-router-hash-link';

const Links = ['About', 'Timeline', 'Projects', 'Contact'];

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)") 
  return (
    <>
      {/* <Box bg={useColorModeValue('gray.1500', 'gray.1500')} px={4}></Box> */}
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={isMobile ? 'space-between' : 'center'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={24} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={12}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <HashLink smooth to={"#" + link} key={link}>{link}</HashLink>
              ))}
              <Flex alignItems={'center'}>
                <ColorModeSwitcher justifySelf="flex-end" />
              </Flex> 
            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                 <HashLink smooth to={"#" + link}>{link}</HashLink>
              ))}
            </Stack>
            <Flex alignItems={'center'}>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Flex> 
          </Box>
        ) : null}
      </Box>
    </>
  );
}