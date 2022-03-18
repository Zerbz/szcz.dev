import Diploma from "./Project"
import { HStack,VStack, Divider, Heading } from "@chakra-ui/react"

export default function Projects() {
    return (
        <div id="Projects">
            <VStack>
                <br/>
                <br/>
                <br/>
                <br/>
                <Divider
                width={{ sm: "70%", xl: "35%" }}
                mt="15px"
                mb="10px"
                bg="#f56565"
                padding="1px"
                />
                <Heading textAlign={'center'} size="2xl">Projects</Heading>
                <Divider
                width={{ sm: "70%", xl: "35%" }}
                mt="15px"
                mb="10px"
                bg="#f56565"
                padding="1px"
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <Diploma/>
                <HStack>
                    <Diploma/>
                    <Diploma/>
                </HStack>
            </VStack>
            <br/>
            <br/>
            <br/>
            <Divider w='5xl'/>
        </div>
    )}
