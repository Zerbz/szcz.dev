import { Navigation } from "../Components/Nav/Navigation"
import Title from './Title/Title'
import About from '../Components/About/About'
import Timeline from '../Components/Timeline/Timeline'
import Projects from './Projects/Projects'
import Contact from '../Components/Contact/Contact'

export default function Home() {
    return (
        <div>
            <Navigation/>
            <Title/>
            <About/>
            <Timeline/>
            <Projects/>
            <Contact/>      
        </div> 
    )
}