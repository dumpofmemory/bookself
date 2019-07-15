import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import './header.component.scss';

const Header: React.SFC = (): JSX.Element => {
  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">BookSelf</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-toggle">Menu</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
