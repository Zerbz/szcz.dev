import {Heading, Container, Box, Divider, VStack } from '@chakra-ui/react'
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
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  const { nextStep, prevStep, activeStep, setStep } = useSteps({
    initialStep: 0,
  })

  const [data, setData] = useState([]);

  const getData=()=>{
    fetch('/Data/Timeline.json',{
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
        setData(myJson.Timeline)
      });
  }
  useEffect(()=>{

    getData()

  },[])

  return (
    <div id = "Timeline">
        <br/>
        <br/>
        <br/>
        <Container maxW='xl'>
        <VStack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Divider
          width={{ sm: "80%", xl: "55%" }}
            mt="15px"
            mb="10px"
            bg="#f56565"
            padding="1px"
          />
          <Heading textAlign={'center'} size="3xl">Timeline</Heading>
          <Divider
          width={{ sm: "80%", xl: "55%" }}
            mt="15px"
            mb="10px"
            bg="#f56565"
            padding="1px"
          />
          <br/>
          <br/>
          <br/>
          <br/>
          <Steps orientation="vertical" activeStep={activeStep} onClickStep={(e)=>{setStep(e)}} checkIcon={isMobile ? GiClick : HiOutlineCursorClick} colorScheme={'red'}> 
              {data.map(({ title }, index) => (                   
                  <Step width="100%" label={title} key={title} icon={(index + 1) % 2 === 0 ? IoMdSchool : MdWork}>            
                      <Box pos='relative' right={(index + 1) % 2 === 0 ? "102%" : ""} height='45%'>             
                          <Waypoint onEnter={activeStep === data.length - 1 ? ()=>{} : nextStep} onLeave={activeStep === 0 || activeStep === data.length - 1  ? ()=>{} : ()=>{}} bottomOffset={(index + 1) % 2 === 0 ? index + 1 * 750 : "80%"} fireOnRapidScroll={false} /> 
                          <Experience Data={data[index]}/>    
                      </Box>   
                  </Step>
              ))}
          </Steps>
        </VStack>
        </Container>
        <br/>
        <br/>
        <br/>
        <Divider w='5xl'/>
    </div>
  )
}

