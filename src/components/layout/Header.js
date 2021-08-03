import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/home'>.JS</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/services'>Services</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
