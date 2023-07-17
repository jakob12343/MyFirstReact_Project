import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Search from './Search';
import './Navigator.css';
import { useContext } from 'react';
import ShoppingContext from './Context';

function NavScrollExample() {
  const {UserMode,Cart}=useContext(ShoppingContext)

  const Mode = () => {
    if (UserMode === "seller") {
      return <Nav.Link href="/AddItem" className="text-dark">Add Item</Nav.Link>
    } else if (UserMode === "client") {
      return (
        <>
          <Nav.Link href="/Favorites" className="text-dark">Favorites</Nav.Link>
          <Nav.Link href="/Cart" className="text-dark">Your Cart <Badge variant="dark">{Cart.length}</Badge></Nav.Link>
        </>
      );
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
      <Container fluid className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="/" className="text-dark">Car List</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {Mode()}
            </Nav>
          </Navbar.Collapse>
        </div>
        <Search />
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
