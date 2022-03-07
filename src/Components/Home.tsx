import { Container } from "@chakra-ui/react"
import { Navigation } from "../Components/Nav/Navigation"
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'

export default function Home() {
    return (
        <div>
            <Navigation/>
            <About/>
            <Contact/>
        </div> 
    )
}