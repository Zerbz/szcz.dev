import {Box,Flex,HStack} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import { HashLink } from 'react-router-hash-link';

const Links = ['About', 'Timeline', 'Projects', 'Contact'];

export function Navigation() {
  return (
    <Box px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={"center"}>
        <HStack spacing={24} alignItems={'center'}>
          <HStack as={'nav'} spacing={12}>
            {Links.map((link,index) => (
              <Box key={index} _hover={{color:'#f56565'}}>
                <HashLink smooth to={"#" + link} key={link}>{link}</HashLink>
              </Box>               
            ))}
            <Flex alignItems={'center'}>
              <ColorModeSwitcher justifySelf="flex-end" />
            </Flex> 
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}