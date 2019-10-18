import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Dropdown from 'react-bootstrap/Dropdown';
// // import Searchbar from '../search/searchbar.component';
// import './header.component.scss';

// const Header = (): JSX.Element => (
//   <div className="Header">
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home" className="logo">
//         BookSelf
//       </Navbar.Brand>
//       {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />/ */}
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//           <Dropdown>
//             <Dropdown.Toggle id="dropdown-toggle" variant="outline-dark">
//               Menu
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item>Hello there!</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Nav>
//         {/* <Searchbar /> */}
//       </Navbar.Collapse>
//     </Navbar>

// import Dropdown from 'react-bootstrap/Dropdown';
// import Searchbar from '../search/searchbar.component';
import './header.component.scss';

const NavBar = (): JSX.Element => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home" className="logo">
      BookSelf
    </Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />/ */}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Favourites</Nav.Link>
        <Nav.Link href="#reading-list">Reading List</Nav.Link>
        <Nav.Link href="#collections">Collections</Nav.Link>
        {/* <Dropdown> */}
        {/* <Dropdown.Toggle id="dropdown-toggle" variant="outline-dark">
            Menu
          </Dropdown.Toggle> */}
        {/* <Dropdown.Menu> */}
        {/* <Dropdown.Item>🖤 Favourites</Dropdown.Item> */}
        {/* <Dropdown.Item>Reading List there!</Dropdown.Item>
            <Dropdown.Item>Collections</Dropdown.Item> */}
        {/* </Dropdown.Menu> */}
        {/* </Dropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const Header = (): JSX.Element => (
  <div className="Header">
    <NavBar />
    {/* <Searchbar /> */}
  </div>
);

export default Header;
