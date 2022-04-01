import { StepsStyleConfig } from 'chakra-ui-steps';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

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

// const CustomSteps = {
//   ...StepsStyleConfig,
//   variants:{
//     alternate:{
//       baseStyle: props => {
//         return {
//           ...StepsStyleConfig.baseStyle(props),
//           stepContainer:{
//             ...StepsStyleConfig.baseStyle(props).stepContainer,
//             position:'relative',
//             left:'148%'
//           },
//           connector:{
//             ...StepsStyleConfig.baseStyle(props).connector,
//             position:'relative',
//             left:'48%'
//           },
//         };
//       },
//     }
//   },
// };

// 3. extend the theme
const theme = extendTheme({ 
  config,
  styles:{
    global: (props)=> ({
      '.Typist .Cursor': {
        display: 'inline-block' 
      },
      '.Typist .Cursor--blinking': {
          opacity: 1,
          animation: 'blink 1s linear infinite' 
      },      
      '.arrow span': {
        display: 'flex',
        width: '20px',
        height: '20px',
        borderBottom: '5px solid #f56565',
        borderRight: '5px solid #f56565',
        animation: 'animate 2s infinite',
        marginLeft: '47.8%',
      },
      '@keyframes animate': {
        '0%': {
          opacity: 0,
          transform: 'rotate(45deg) translate(-10px, -10px)',
        },
        '50%': {
          opacity: 1,
        },
        '100%': {
          opacity: 0,
          transform: 'rotate(45deg) translate(20px, 20px)',
        },
      },
      '@keyframes blink': {
        '0%': {
          opacity: 1 },
        '50%': {
          opacity: 0 },
        '100%': {
          opacity: 1 } 
        },
        '::selection':{
          color: '#f56565'
        },
      body: {
        bg: mode("#F7FAFC", "#1E1E1E")(props),
        color: mode("black", "white")(props),
      },
    })
  },
  fonts: {
    heading: 'Bungee, sans-serif',
    body: 'Fira Code, sans-serif',
  },
  components:{
    Steps: CustomSteps,
  },
 })

export default theme