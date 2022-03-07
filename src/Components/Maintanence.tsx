import { Button, Container } from "@chakra-ui/react"
import { DownloadIcon } from '@chakra-ui/icons'
import { Box,VStack, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from "../ColorModeSwitcher"

export default function Maintanence() {
    return (
        <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
                <VStack spacing={8}>     
                    <Container maxW='container.md'>Under development. Check back later.</Container>
                    <br></br>
                    <a href="/files/MattSzczerbaResumeWeb.pdf" target="_blank" download> <Button><DownloadIcon mr="5px"/>Resume</Button></a>
                </VStack>
            </Grid>
        </Box>
    )
}