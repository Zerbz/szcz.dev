import {ChakraProvider, Container as ChakraContainer} from "@chakra-ui/react"
import Maintanence from './Components/Maintanence'
import Home from './Components/Home'
import theme from './theme'
import mobiletheme from './mobiletheme'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/700.css'
import '@fontsource/bungee/400.css'
import { useMediaQuery } from "@chakra-ui/react";

export const App = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)") 

  return(
    <ChakraProvider theme={isMobile ? mobiletheme : theme} >
      <ChakraContainer
        maxW='6xl'
        paddingX={8}>
        {process.env.NODE_ENV == "production" ?  <Home/> : <Home/>}
      </ChakraContainer>
    </ChakraProvider>
  )
}



