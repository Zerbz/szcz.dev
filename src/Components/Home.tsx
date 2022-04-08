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
    
    return (
        <Box>
            <Navigation/>
            <Title/>
            <About/>
            <Timeline/>
            <Projects/>
            <Contact/>
            <Footer/>      
        </Box> 
    )
}