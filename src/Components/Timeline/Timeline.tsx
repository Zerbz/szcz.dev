import {Heading, Container, Box, Divider, VStack } from '@chakra-ui/react'
import { Step, Steps, useSteps } from "chakra-ui-steps"
import Experience from "../Experience/Experience"
import {Waypoint as Waypoint} from 'react-waypoint';
import { MdWork } from 'react-icons/md'; 
import { IoMdSchool } from 'react-icons/io'; 


const steps = [{ label: "Exp 1" }, { label: "Exp 2" }, { label: "Exp 3" }, { label: "Exp 4" }, { label: "Exp 5" }, { label: "Exp 6" }]

export default function Timeline() {
  const { nextStep, prevStep, activeStep, setStep } = useSteps({
    initialStep: 0,
  })

  return (
    <div id = "Timeline">
        <br/>
        <br/>
        <br/>
        <Container maxW='xl' centerContent>
   
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
          <Steps orientation="vertical" activeStep={activeStep} onClickStep={(e)=>{setStep(e)}} checkIcon={(activeStep) % 2 === 0 ? MdWork : IoMdSchool } colorScheme={'red'}> 
              {steps.map(({ label }, index) => (                   
                  <Step width="100%" label={label} key={label} icon={(index + 1) % 2 === 0 ? MdWork : IoMdSchool}>            
                      <Box pos='relative' right={(index + 1) % 2 === 0 ? "102%" : ""} height='45%'>             
                          <Waypoint onEnter={activeStep === steps.length - 1 ? ()=>{} : nextStep} onLeave={activeStep === 0 || activeStep === steps.length - 1  ? ()=>{} : ()=>{}} bottomOffset={(index + 1) % 2 === 0 ? index + 1 * 750 : "80%"} fireOnRapidScroll={false} /> 
                          <Experience/>    
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

