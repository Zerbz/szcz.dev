import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Spacer,
  Image,
  Tooltip,
  Icon,
  Wrap,
  WrapItem,
  Button,
} from '@chakra-ui/react';
import {
  SiCsharp,
  SiDotNet,
  SiVueDotJs,
  SiDocker,
  SiElasticstack,
  SiMicrosoftsqlserver,
  SiAzurepipelines,
  SiAzuredevops,
  SiPython,
  SiNodeDotJs,
  SiReact,
  SiFlask,
  SiPostgresql,
  SiLaravel,
  SiJava,
  SiSwift,
  SiJest,
} from "react-icons/si";
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from "@chakra-ui/react";

const ECCC = [SiCsharp,SiDotNet,SiVueDotJs, SiDocker, SiElasticstack, SiMicrosoftsqlserver, SiAzurepipelines, SiAzuredevops];
const Icarus = [SiReact,SiPython,SiNodeDotJs, SiFlask, SiPostgresql, SiJest]
const Mohawk = [SiPython,SiCsharp, SiDotNet, SiJava, SiReact, SiVueDotJs, SiSwift, SiLaravel,SiNodeDotJs]

export default function Experience({Data}) {
  const [icons, setIcons] = useState(ECCC);
  const bg = useColorModeValue('#f7fafc', '#232323')
  const icarusSrc = useColorModeValue('/files/icarus.png','/files/icarus-light.png')
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  useEffect(()=>{
    setIcons(getIcons(Data.title));
  },[])

  function getIcons(title){
    switch(title){
      case "Environment & Climate Change Canada":
        return ECCC;
      case "Icarus Medical":
        return Icarus;
      case "Mohawk College":
        return Mohawk;
      default:
        return [];
    }
  }

  return (
    <Center>
      <Box
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        bg={bg}>
        <Box h={Data.img.b} pos={'relative'}>
          <Center>
            <Image mt={Data.img.t} htmlWidth={Data.img.w} htmlHeight={Data.img.h} src={Data.title === "Icarus Medical" ? icarusSrc : Data.img.src} alt="Canada"/>
          </Center>
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'md'}
            fontFamily={'body'}
            textAlign={'left'}>
            {Data.title}
          </Heading>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'md'}
            fontFamily={'body'}
            textAlign={'left'}>
            {Data.detail}
          </Heading>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'md'}
            fontFamily={'body'}
            textAlign={'left'}>
            {Data.dates}
          </Heading>
          <Box p={2} pt={25} >
          <Center>
            <Wrap fontSize={'3xl'}>
              {Data.tools.map((tool, index) => (
                <WrapItem key={index}>
                <Tooltip label={tool.tooltip} fontSize="xl">
                  <span>
                    <Icon as={icons[index]} />
                  </span>
                </Tooltip>
              </WrapItem>
              ))}
            </Wrap>
          </Center>
          </Box>
          <Text fontFamily={'body'} textAlign={'left'}>
            {Data.description}
          </Text>
          <HashLink hidden={Data.projects === "#mac"} smooth to={Data.projects} key={Data.projects}>        
              <Button  w={isMobile ? '150px' : '350px'}>
               Projects 
              </Button>
          </HashLink>
        </Stack>
      </Box>
      <Spacer />
    </Center>
  );
}