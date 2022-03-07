import {ChakraProvider} from "@chakra-ui/react"

import { Navigation } from "./Components/Nav/Navigation"
import theme from './theme'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
export const App = () => (
  <ChakraProvider theme={theme}>
    <Navigation/>
    <About/>
    <Contact/>
  </ChakraProvider>
)



