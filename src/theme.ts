import { StepsStyleConfig } from 'chakra-ui-steps';

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const CustomSteps = {
  ...StepsStyleConfig,
  baseStyle: props => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      stepContainer:{
        ...StepsStyleConfig.baseStyle(props).stepContainer,
        position:'relative',
        left:'48%'
      },
      connector:{
        ...StepsStyleConfig.baseStyle(props).connector,
        position:'relative',
        left:'48%'
      },
    };
  },
};

// 3. extend the theme
const theme = extendTheme({ 
  config,
  components:{
    Steps: CustomSteps,
    Box: {
      variants:{
        alternate:{
          position:'relative',
          right:'135%',
        }
      }
    }
  },
 })

export default theme