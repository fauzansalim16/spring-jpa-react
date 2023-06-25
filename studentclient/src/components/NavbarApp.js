import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarApp() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Student Form</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarApp;
