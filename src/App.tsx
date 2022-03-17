import {ChakraProvider, Container as ChakraContainer} from "@chakra-ui/react"
import Maintanence from './Components/Maintanence'
import Home from './Components/Home'
import theme from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <ChakraContainer
      maxW='6xl'
      paddingX={8}>
      {process.env.NODE_ENV == "production" ?  <Maintanence/> : <Home/>}
    </ChakraContainer>
  </ChakraProvider>
)



