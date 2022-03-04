import { Button, Container } from "@chakra-ui/react"
import { DownloadIcon } from '@chakra-ui/icons'
import {Link as RouteLink } from "react-router-dom";

export const Maintanence = () => (
    <div>
        <Container maxW='container.md'>Under development. Check back later.</Container>
        <br></br>
        <Button><a href='/files/Matt Szczerba - Resume.pdf' download><DownloadIcon mr="5px"/>Resume</a></Button>
    </div> 
)