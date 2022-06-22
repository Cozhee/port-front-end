import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Brand href="#home">Cody Davis</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Projects</Nav.Link>
                            <Nav.Link href="#pricing">About me</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Sign In</Nav.Link>
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