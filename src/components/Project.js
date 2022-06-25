import { Card, Container, Row, Col } from 'react-bootstrap'
import img from '../images/tp1.png'
import img2 from '../images/tp2.png'
import img3 from '../images/tp3.png'
import {RiExternalLinkLine} from 'react-icons/ri'

function Project() {

    return (
        <Container>

            <h1 className="text-center text-white mb-5">Projects</h1>
            <Row className="g-5">
                <Col className="col-12 col-md-6 col-lg-4 justify-content-center">
                    <Card>
                        <Card.Img variant="top" src={img} />
                    </Card>
                    <p className="project-title mb-2 mt-2">Tech Perspective <a className="project-link" href="#home" target="_blank"><RiExternalLinkLine className="mb-1" size={25}/></a></p>
                    <small className="project-desc">Built to gather data on inclusive for students in the tech industry</small>
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 justify-content-center">
                    <Card>
                        <Card.Img variant="top" src={img2} />
                    </Card>
                    <p className="project-title mb-2 mt-2">Tech Perspective</p>
                    <small className="project-desc">Built to gather data on inclusive for students in the tech industry</small>
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 justify-content-center">
                    <Card>
                        <Card.Img variant="top" src={img3} />
                    </Card>
                    <p className="project-title mb-2 mt-2">Tech Perspective</p>
                    <small className="project-desc">Built to gather data on inclusive for students in the tech industry</small>
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 justify-content-center">
                    <Card>
                        <Card.Img variant="top" src={img} />
                    </Card>
                    <p className="project-title mb-2 mt-2">Tech Perspective</p>
                    <small className="project-desc">Built to gather data on inclusive for students in the tech industry</small>
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 justify-content-center">
                    <Card>
                        <Card.Img variant="top" src={img} />
                    </Card>
                    <p className="project-title mb-2 mt-2">Tech Perspective</p>
                    <small className="project-desc">Built to gather data on inclusive for students in the tech industry</small>
                </Col>
            </Row>
        </Container>

    )
}

export default Project