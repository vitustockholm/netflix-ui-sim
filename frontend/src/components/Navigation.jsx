import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/' className='logo'>
          finsweet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />

        <Nav className='mr-auto my-2 my-lg-0' style={{ maxHeight: '100px' }}>
          <Nav.Link href='#action1' className='link'>
            a
          </Nav.Link>
          <Nav.Link href='#action2' className='link'>
            s us
          </Nav.Link>
          <Nav.Link href='#action2' className='link'>
            c
          </Nav.Link>
          <Nav.Link href='#action2' className='link'>
            d
          </Nav.Link>
          <Nav.Link href='/' className='link'>
            e
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
