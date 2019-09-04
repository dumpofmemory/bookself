import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Searchbar from '../search/searchbar.component';
import './header.component.scss';

const Header: React.SFC = (): JSX.Element => {
  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="logo">
          BookSelf
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-toggle" variant="outline-dark">
                Menu
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          {/* // TODO: Decide if Searchbar is gonna conain state or its gonna receive it as props from
          App container */}
          <Searchbar />
          {/* <Searchbar searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} /> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
