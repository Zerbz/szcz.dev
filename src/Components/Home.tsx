import { Navigation } from "../Components/Nav/Navigation"
import Title from './Title/Title'
import About from '../Components/About/About'
import Timeline from '../Components/Timeline/Timeline'
import Education from '../Components/Education/Education'
import Contact from '../Components/Contact/Contact'

export default function Home() {
    return (
        <div>
            <Navigation/>
            <Title/>
            <About/>
            <Timeline/>
            <Education/>
            <Contact/>      
        </div> 
    )
}