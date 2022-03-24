import Project from "./Project"
import {VStack, Divider, Heading, Box} from "@chakra-ui/react"
import { useState, useEffect } from 'react';

export default function Projects() {
    const [data, setData] = useState([]);

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
        <div id="Projects">
            <VStack>
                <br/>
                <br/>
                <br/>
                <br/>
                <Divider
                width={{ sm: "70%", xl: "35%" }}
                mt="15px"
                mb="10px"
                bg="#f56565"
                padding="1px"
                />
                <Heading textAlign={'center'} size="2xl">Projects</Heading>
                <Divider
                width={{ sm: "70%", xl: "35%" }}
                mt="15px"
                mb="10px"
                bg="#f56565"
                padding="1px"
                />
                <br/>
                <br/>
                <br/>
                <br/>
            </VStack>
            <VStack align={"left"}>
              {data.map((project, index) => (      
                <Box key={index} p={'10px'}>
                   <Project Data={project}/>
                </Box>                
              ))}   
            </VStack>   
            <br/>
            <br/>
            <br/>
            <Divider w='5xl'/>
        </div>
    )}
