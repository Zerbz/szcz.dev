import {Heading, Flex, Button, Container, Box, VStack } from '@chakra-ui/react'
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
        <Container maxW='xl' centerContent>
            <Steps orientation="vertical" activeStep={activeStep} onClickStep={(e)=>{setStep(e)}} checkIcon={(activeStep) % 2 === 0 ? MdWork : IoMdSchool }> 
                {steps.map(({ label }, index) => (                   
                    <Step width="100%" label={label} key={label} icon={(index + 1) % 2 === 0 ? MdWork : IoMdSchool}>            
                        <Box pos='relative' right={(index + 1) % 2 === 0 ? "95%" : ""} height='45%'>             
                            <Waypoint onEnter={activeStep === steps.length - 1 ? ()=>{} : nextStep} onLeave={activeStep === 0 || activeStep === steps.length - 1  ? ()=>{} : ()=>{}} bottomOffset={(index + 1) % 2 === 0 ? index + 1 * 750 : "80%"} fireOnRapidScroll={false} /> 
                            <Experience/>    
                        </Box>   
                    </Step>
                ))}
            </Steps>
        </Container>
    </div>
  )
}

