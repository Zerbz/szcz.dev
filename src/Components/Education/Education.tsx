import Diploma from "./Diploma"
import { HStack,VStack } from "@chakra-ui/react"

export default function Education() {
    return (
        <div id="Education">
            <VStack>
                <Diploma/>
                <HStack>
                    <Diploma/>
                    <Diploma/>
                </HStack>
            </VStack>
        </div>
    )}
