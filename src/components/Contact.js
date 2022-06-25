import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import '../css/contact.css'

function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact">
            <Container className="my-5 contact">
                <Row className="d-flex justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-8">
                        <Card className="h-100 p-5">
                            <Card.Header className="text-center h3 border-0">Contact Me</Card.Header>
                            <Card.Body>
                                <Form ref={form} onSubmit={sendEmail}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control name="first-name" type="name"/>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control name="last-name" type="name"/>
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control name="email" type="email"/>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control name="subject" type="subject"/>
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control name="message" as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact