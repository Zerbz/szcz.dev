import { Navigation } from "../Components/Nav/Navigation"
import {Heading, Container, Box, Divider, VStack, Text, Flex } from '@chakra-ui/react'
import Title from './Title/Title'
import About from '../Components/About/About'
import Timeline from '../Components/Timeline/Timeline'
import Projects from './Projects/Projects'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import { useMediaQuery } from "@chakra-ui/react";

export default function Home() {

    const [isMobile] = useMediaQuery("(max-width: 768px)")
    
    function Brokeit(){
        return (
            <Box id = "Timeline">
                <Flex pt={"5%"} />
                <Container maxW='xl'>
                <VStack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Divider width={isMobile ? "110%" : "80%"} mt="15px" mb="10px" bg="#f56565" padding="1px" />
                <Heading textAlign={'center'} size="3xl">Timeline</Heading>
                <Divider width={isMobile ? "110%" : "80%"} mt="15px" mb="10px" bg="#f56565" padding="1px" />
                <Text textAlign={'center'}>Woops, I broke the mobile timeline. If you're seeing this, I'm fixing it at this very moment. Checkout the desktop site instead!</Text>
                </VStack>
                </Container>
                <Flex pt={"8%"} />
                <Divider/>
            </Box>
        )
    }

    return (
        <Box>
            <Navigation/>
            <Title/>
            <About/>
            {isMobile ? <Brokeit/> : <Timeline/>}
            <Projects/>
            <Contact/>
            <Footer/>      
        </Box> 
    )
}