import { Button, Container } from "@chakra-ui/react"
import { DownloadIcon } from '@chakra-ui/icons'
import {Link as RouteLink } from "react-router-dom";

export const Maintanence = () => (
    <div>
        <Container maxW='container.md'>Under development. Check back later.</Container>
        <br></br>
        <RouteLink to="/files/MattSzczerbaResume.pdf" target="_blank" download><DownloadIcon mr="5px"/>Resume</RouteLink>
    </div> 
)