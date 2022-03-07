import {ChakraProvider} from "@chakra-ui/react"
import Maintanence from './Components/Maintanence'
import Home from './Components/Home'

import theme from './theme'
export const App = () => (
  <ChakraProvider theme={theme}>
    {process.env.NODE_ENV == "production" ?  <Maintanence/> : <Home/>}
  </ChakraProvider>
)



