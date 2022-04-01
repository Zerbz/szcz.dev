import Project from "./Project"
import {VStack, Divider, Heading, Box, Flex} from "@chakra-ui/react"
import { useState, useEffect } from 'react';
import { useMediaQuery } from "@chakra-ui/react"

export default function Projects() {
  const [data, setData] = useState([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)") 

  const getData=()=>{
    fetch('/Data/Projects.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson.Projects)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <Box id="Projects">
      <VStack>
        <Flex pt={"5%"}/>
        <Divider width={isMobile ? "65%" : "30%"} mt="15px" mb="10px" bg="#f56565" padding="1px" />
        <Heading textAlign={'center'} size="2xl">Projects</Heading>
        <Divider width={isMobile ? "65%" : "30%"} mt="15px" mb="10px" bg="#f56565" padding="1px" />
        <Flex pt={"5%"}/>
      </VStack>
      <VStack align={"left"}>
        {data.map((project, index) => (      
          <Box key={index} p={'10px'}>
              <Project Data={project}/>
          </Box>                
        ))}   
      </VStack>   
      <Flex pt={"8%"}/>
      <Divider w={isMobile ? '' : '5xl'}/>
    </Box>
  )
}
