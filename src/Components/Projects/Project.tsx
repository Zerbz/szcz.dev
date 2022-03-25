import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
  Spacer,
  HStack,
  Image,
  Link,
  Tooltip
} from '@chakra-ui/react';
import { Collapse } from "@chakra-ui/transition"
import { useState } from 'react';
import { useMediaQuery } from "@chakra-ui/react"

export default function Project({Data}) {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const [open, setOpen] = useState(isMobile ? false : true); //Data.organization === "Environment & Climate Change Canada" ? true : false
  const bg = useColorModeValue('#f7fafc', '#232323')
  function toggleOpen(){
    open ?  setOpen(false) : setOpen(true);
  }

  return (
    <div id={Data.hashlink}>
       <Button onClick={toggleOpen}>{Data.organization} {open ? "-" : "+"}</Button>
        <Collapse in={open} animateOpacity>
          <HStack pt={'1%'} >
           <Wrap>
           {Data.projects.map((project, index) => (
             <WrapItem key={index}>       
               <Center>
               <Box
                 maxW={'350px'}
                 w={'full'}
                 boxShadow={'2xl'}
                 rounded={'md'}
                 p={6}
                 overflow={'hidden'}
                 bg={bg}>
                 <Box
                   h={project.img.b}
                   pos={'relative'}>
                 <Center>
                  <Link href={project.img.src} isExternal>
                    <Image mt={project.img.t} htmlWidth={project.img.w} htmlHeight={project.img.h} src={project.img.src} alt="Canada"/>
                  </Link>                     
                 </Center>
                 </Box>
                 <Stack>
                   <Heading
                     color={"#f56565"}
                     fontSize={'md'}
                     fontFamily={'body'}
                     textAlign={'left'}>
                     {project.title}
                   </Heading>
                   <Text fontFamily={'body'} textAlign={'left'}>
                     {project.description}
                   </Text>
                   <HStack>
                   <Link href={project.repo} isExternal> 
                    <Tooltip hasArrow label={project.repo === "" ? "Internal Repo" : ""} shouldWrapChildren mt='3'>
                      <Button isDisabled={project.repo === ""}>
                        Code
                      </Button>
                    </Tooltip>
                    </Link>
                    <Link href={project.url} isExternal>
                      <Tooltip hasArrow label={project.url === "" ? "Not publicly available" : ""} shouldWrapChildren mt='3'>
                        <Button isDisabled={project.url === ""}>
                          {project.urlType}
                        </Button>
                      </Tooltip>
                    </Link>                    
                   </HStack>   
                 </Stack>
               </Box>
               <Spacer />
              </Center>
             </WrapItem> 
            ))} 
           </Wrap>
          </HStack>
        </Collapse>
    </div> 
  );
}