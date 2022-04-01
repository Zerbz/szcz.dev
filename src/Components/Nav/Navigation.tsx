import {Box,Flex,HStack} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from "@chakra-ui/react"

const Links = ['About', 'Timeline', 'Projects', 'Contact'];

export function Navigation() {
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  return (
    <Box ml={"20px"} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={"center"}>
        <HStack spacing={isMobile ? 2 : 24} alignItems={'center'}>
          <HStack as={'nav'} spacing={isMobile ? 3 : 12}>
            {Links.map((link,index) => (
              <Box key={index} _hover={{color:'#f56565'}}>
                <HashLink smooth to={"#" + link} key={link}>{link}</HashLink>
              </Box>               
            ))}
            <ColorModeSwitcher _hover={{color:'#f56565'}} right={"10px"} justifySelf="flex-end" />      
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}