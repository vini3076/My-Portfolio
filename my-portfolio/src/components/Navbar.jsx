
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";


export default function AppNavbar() {
    return (
        <>
             <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Vinita Navani</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
      );

}




