import { Navbar, Container, Nav } from 'react-bootstrap'
import '../css/intro.css'

function Header() {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Projects</Nav.Link>
                            <Nav.Link href="#pricing">About me</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>Sign In</Nav.Link>
                            <Nav.Link>
                                Sign Out
                            </Nav.Link>
                            <Nav.Link>
                                Profile
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;