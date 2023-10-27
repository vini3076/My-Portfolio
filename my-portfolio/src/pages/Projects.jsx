import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Project3 from '../images/WhereIsRobbert.png'
import Project2 from '../images/Travel-Geek.png'
import Project1 from '../images/HybridTracker1.png'
import PasswordGen from '../images/Password_Generator.png'
import WeatherDashboard from '../images/weather.png'
import NoteTaker from '../images/NoteTaker.png'
import '../App.css';

export default function Projects() {

    return (
        <Row xs={1} md={2} className="g-4">
          {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
            <Col className='projects'>
            <a href= "https://where-is-robbert-6b2227092c3e.herokuapp.com/">
              <Card className='project-card'>
                <Card.Img variant="top" src={Project3} />
                <Card.Body>
                  <Card.Title>Where's Robbert</Card.Title>
                  <Card.Text>
                  Single-page web app to assist Digital Nomads with figuring out their next spot at campgrounds. Information provided will include Nearest City, Description of the location (do they have hot showers? Is it wheelchair accessible? Do they have RV hookups? Do they allow cats? Does the local ranger’s station have a strong WiFi signal?), and an image to represent the findings.
                  </Card.Text>
                  <Card.Link href="https://where-is-robbert-6b2227092c3e.herokuapp.com/">Deployed Application</Card.Link>
                  <Card.Link href="https://github.com/vini3076/prj3-WhereisRobbert">Github Repo</Card.Link>
                </Card.Body>
              </Card>
              </a>
            </Col>

            <Col>
            <a href="https://travelgeekalicia-bd545f74fdfc.herokuapp.com/">
              <Card className='project-card'>
                <Card.Img variant="top" src={Project2}  />
                <Card.Body>
                  <Card.Title>Travel Geek</Card.Title>
                  <Card.Text>
                  Welcome to Travel-Geek! This application was born from the necessity of having a convenient tool to effectively manage various aspects of your travel experience. With Travel-Geek, you can effortlessly track your personal travel budget, monitor car rental expenses, manage airplane ticket costs, and keep tabs on your food expenditures – all in one place. Say goodbye to travel budgeting stress and let Travel-Geek simplify your journey.
                  </Card.Text>
                  <Card.Link href="https://travelgeekalicia-bd545f74fdfc.herokuapp.com/">Deployed Application</Card.Link>
                  <Card.Link href="https://github.com/SquirrelsAtARave/Travel-Geek">Github Repo</Card.Link>
                </Card.Body>
              </Card>
              </a>
            </Col>

            <Col>
            <a href="https://ahermez.github.io/hybrid-tracker-project-1/">
              <Card className='project-card'>
                <Card.Img variant="top" src={Project1}  />
                <Card.Body>
                  <Card.Title>Hybrid Tracker</Card.Title>
                  <Card.Text>
                  Hybrid-Tracker is a web application for in-office attendance tracking and planning and is equipped with a clickable month’s calendar, federal holiday API feed, and a weather report API for the current and following four days. The user clicks on weekdays worked in-office, to which the application responds by updating the calculation of both number of days worked in-office, and the percentage thereof. Hybrid-Tracker utilizes the user’s local storage in order that when the page is reloaded, it will display the most recent updates made to the user’s record.
                  </Card.Text>
                  <Card.Link href="https://ahermez.github.io/hybrid-tracker-project-1/">Deployed Application</Card.Link>
                  <Card.Link href="https://github.com/ahermez/hybrid-tracker-project-1">Github Repo</Card.Link>
                  
                </Card.Body>
              </Card>
              </a>
            </Col>

            <Col>
            <a href="https://vini3076.github.io/Challenge3_Password_Generator/">
              <Card className='project-card'>
                <Card.Img variant="top" src={PasswordGen}  />
                <Card.Body>
                  <Card.Title>Password Generator</Card.Title>
                  <Card.Text>
                  Built a password generator which asks the user for inputs and generates a random password according to the user's requirements.
                  </Card.Text>
                  <Card.Link href="https://vini3076.github.io/Challenge3_Password_Generator/">Deployed Application</Card.Link>
                  <Card.Link href="https://github.com/vini3076/Challenge3_Password_Generator">Github Repo</Card.Link>
                </Card.Body>
              </Card>
              </a>
            </Col>
            
            <Col>
            <a href="https://vini3076.github.io/weather-dashboard/">
              <Card className='project-card'>
                <Card.Img variant="top" src={WeatherDashboard}  />
                <Card.Body>
                  <Card.Title>Weather Dashboard</Card.Title>
                  <Card.Text>
                  This application is a Weather Dashboard which displays the current and five day forecast. It also saves the history of the last 8 cities you have looked up with easy button access. This application utilizes the Open Weather Map API.
                  </Card.Text>
                  <Card.Link href="https://vini3076.github.io/weather-dashboard/">Deployed Application</Card.Link>
                  <Card.Link href="https://github.com/vini3076/weather-dashboard">Github Repo</Card.Link>
                </Card.Body>
              </Card>
              </a>
            </Col>

         

            
            <Col>
            <a href="https://note-taker-vn-6ebf1fab3cae.herokuapp.com/notes">
              <Card className='project-card'>
                <Card.Img variant="top" src={NoteTaker}  />
                <Card.Body>
                  <Card.Title>Note Taker</Card.Title>
                  <Card.Text>
                  This application is a note taking app. You can add and delete notes. This application used express.js and helped me solidify my understanding of routes.
                  </Card.Text>
                  <Card.Link href="https://note-taker-vn-6ebf1fab3cae.herokuapp.com/notes">Deployed Application</Card.Link>
                  <Card.Link href="https://github.com/vini3076/Note-Taker">Github Repo</Card.Link>
                </Card.Body>
              </Card>
              </a>
            </Col>
          {/* ))} */}
        </Row>
      );
}