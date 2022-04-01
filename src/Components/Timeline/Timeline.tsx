import {Heading, Container, Box, Divider, VStack, Flex } from '@chakra-ui/react'
import { Step, Steps, useSteps } from "chakra-ui-steps"
import Experience from "../Experience/Experience"
import {Waypoint as Waypoint} from 'react-waypoint';
import { MdWork } from 'react-icons/md'; 
import { IoMdSchool } from 'react-icons/io'; 
import { HiOutlineCursorClick } from 'react-icons/hi'; 
import { GiClick } from 'react-icons/gi'; 
import { useState, useEffect } from 'react';
import { useMediaQuery } from "@chakra-ui/react"

export default function Timeline() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isStandard] = useMediaQuery("(max-width: 2559px)");

  const { nextStep, activeStep, setStep } = useSteps({
    initialStep: 0,
  })

  const [data, setData] = useState([]);
  const [scrollModifier, setScrollModifier] = useState(2);
  const [scrollVal, setScrollVal] = useState(625);

  const getData=()=>{
    fetch('/Data/Timeline.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
      return response.json();
    }).then(function(myJson) {
      setData(myJson.Timeline)
    });
  }

  useEffect(()=>{
    if(isStandard){
      setScrollModifier(1)
      setScrollVal(725)
    }
    getData()
  },[])

  return (
    <Box id="Timeline">
      <Flex pt={"5%"} />
      <Container maxW='xl'>
        <VStack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Divider width={isMobile ? "110%" : "80%"} mt="15px" mb="10px" bg="#f56565" padding="1px"/>
          <Heading textAlign={'center'} size="3xl">Timeline</Heading>
          <Divider width={isMobile ? "110%" : "80%"} mt="15px" mb="10px" bg="#f56565" padding="1px"/>
          <Flex pt={"8%"} />
          <Steps orientation="vertical" activeStep={activeStep} onClickStep={(e)=>{setStep(e)}} checkIcon={isMobile ? GiClick : HiOutlineCursorClick} colorScheme={'red'}> 
              {data.map(({ title }, index) => (                   
                  <Step width="100%" label={title} key={title} icon={(index + 1) % 2 === 0 ? IoMdSchool : MdWork}>            
                      <Box pos='relative' right={(index + 1) % 2 === 0 ? "102%" : ""} height='45%'>             
                          <Waypoint onEnter={activeStep === data.length - 1 ? ()=>{} : nextStep} bottomOffset={(index + 1) % 2 === 0 ? index + scrollModifier * scrollVal : "90%"} fireOnRapidScroll={false} /> 
                          <Experience Data={data[index]}/>    
                      </Box>   
                  </Step>
              ))}
          </Steps>
          </VStack>
      </Container>
      <Flex pt={"8%"} />
      <Divider w='5xl'/>
    </Box>
  )
}

