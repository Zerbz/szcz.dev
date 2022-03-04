import {
  ChakraProvider,
  Box,
  VStack,
  Grid
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Maintanence } from "./Components/Maintanence"
import { Home } from "./Components/Home"
import theme from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>     
            {process.env.NODE_ENV == "production" ?  <Maintanence/> : <Home/>}
          </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)



