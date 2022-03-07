import { Button, Container } from "@chakra-ui/react"
import { DownloadIcon } from '@chakra-ui/icons'

export const Maintanence = () => (
    <div>
        <Container maxW='container.md'>Under development. Check back later.</Container>
        <br></br>
       <a href="/files/MattSzczerbaResumeWeb.pdf" target="_blank" download> <Button><DownloadIcon mr="5px"/>Resume</Button></a>
    </div> 
)