
import '../App.css';
import Image from '../images/Vinita.jpg'
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
    return (
<div>
    
        <div className='App-header'>
        <h1 className="h3-text">About Me</h1>
        <div className='myImage-Header'>
        <img className='myImage' src={Image}/>
    </div>
             
        <h4 className="h4-text">I am currently a Quality Assurance Manager at a Enterprise SAAS software company in the Bay Area. I am an aspiring software developer learning full-stack software development.</h4></div>
        </div>
     /*    <CardGroup>
        <Card border="light">
            
      <Card.Body>
      <Card.Title>About Me</Card.Title>
      <Card.Text>I am currently a Quality Assurance Manager at a Enterprise SAAS
            software company in the Bay Area. I am an aspiring software
            developer learning full-stack software development.</Card.Text></Card.Body>
    </Card>
    <Card border="light">
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </CardGroup> */
    /*     <section class="intro" id="about-me">
       {/*  <img src="./assets/images/Vinita.jpeg" alt="Vinita Navani photo" /> *//* }
        <div class="about-me-info">
          <h2>About Me</h2>
          <p>
            I am currently a Quality Assurance Manager at a Enterprise SAAS
            software company in the Bay Area. I am an aspiring software
            developer learning full-stack software development.
            <br />
            <br />
            Please browse my recent projects below and feel free to contact me.
          </p>
        </div>
      </section> */ 
    )
}

