import resume from "../images/vinita_navani_2022.pdf"
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function Resume() {
    return (
         <div style={{ textAlign: "center" }}>
            <div>
      <h1>
        Skills 
      </h1>
      <Stack direction="horizontal" gap={2} style={{ textAlign: "center" }}>
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
      </Stack>
    </div>
  
    
          <a className="downloadButton" href={resume} Download>
            download{" "}
          </a>
        </div> 
      );
}