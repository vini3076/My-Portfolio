import React from 'react';
import { Navbar, Nav, Container} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
    return (
        <>
             <Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Vinita Navani</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://twitter.com/vinitanavani"><FontAwesomeIcon
							icon={faTwitter}
							className="social-icon"
						/></Nav.Link>
            <Nav.Link href="https://github.com/vini3076"><FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/vinita-navani-a830bb4/"><FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
      );
};