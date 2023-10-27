import resume from "../images/vinita_navani_2022.pdf"
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import '../App.css';

export default function Resume() {
    return (
         <div style={{ textAlign: "center" }}>
            <div>
      <h1>
        Skills 
      </h1>
      <Stack className="skills" direction="horizontal" gap={2}>
      <h3>
        <Badge bg="secondary">Javascript</Badge>
      </h3>
      <h3>
        <Badge bg="secondary">Web APIs</Badge>
      </h3>
      <h3>
        <Badge bg="secondary">MySQL</Badge>
      </h3>
      <h3>
        <Badge bg="secondary">Node.js</Badge>
      </h3>
      <h3>
        <Badge bg="secondary">Express.js</Badge>
      </h3>
      <h3>
        <Badge bg="secondary">MongoDB</Badge>
      </h3>
      <h3>
        <Badge bg="secondary">GraphQL</Badge>
      </h3>
      </Stack>
    </div>
  
    
          <a className="downloadButton" href={resume} Download>
           Download Resume
          </a>
        </div> 
      );
}