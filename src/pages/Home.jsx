
import '../App.css';
import Image from '../images/Vinita.jpg'
//import { Link as RouterLink } from "react-router-dom";

export default function Home() {
    return (
<div>
    
        <div className='App-header'>
        <h1 className="h3-text">About Me</h1>
        <div className='myImage-Header'>
        <img className='myImage' src={Image} alt=""/>
    </div>
             
        <h4 className="h4-text">I am currently a Quality Assurance Manager at a Enterprise SAAS software company in the Bay Area. I recently completed the UC Berkeley Full Stack Development Bootcamp and would like to continue to apply, learn and grow my newly learnt skills in diverse and challenging projects.</h4></div>
        </div>
    
    )
}

