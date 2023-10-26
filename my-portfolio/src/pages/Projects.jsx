import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Project3 from '../images/WhereIsRobbert.png'
import Project2 from '../images/Travel-Geek.png'
import Project1 from '../images/HybridTracker1.png'
import PasswordGen from '../images/Password_Generator.png'
import WeatherDashboard from '../images/weather.png'
import NoteTaker from '../images/NoteTaker.png'

export default function Projects() {

    return (
        <Row xs={1} md={2} className="g-4">
          {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
            <Col className='projects'>
              <Card className='project-card'>
                <Card.Img variant="top" src={Project3} />
                <Card.Body>
                  <Card.Title>Where's Robbert</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='project-card'>
                <Card.Img variant="top" src={Project2}  />
                <Card.Body>
                  <Card.Title>Travel Geek</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='project-card'>
                <Card.Img variant="top" src={Project1}  />
                <Card.Body>
                  <Card.Title>Hybrid Tracker</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='project-card'>
                <Card.Img variant="top" src={WeatherDashboard}  />
                <Card.Body>
                  <Card.Title>Weather Dashboard</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='project-card'>
                <Card.Img variant="top" src={PasswordGen}  />
                <Card.Body>
                  <Card.Title>Password Generator</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col>
              <Card className='project-card'>
                <Card.Img variant="top" src={NoteTaker}  />
                <Card.Body>
                  <Card.Title>NoteTaker</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          {/* ))} */}
        </Row>
      );
}