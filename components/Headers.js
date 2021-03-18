import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
       

const Headers = () => {
    return (

        <div>
             <head>
                <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
                <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
                <script defer src="/your-path-to-fontawesome/js/fontawesome.js"></script>
            </head>

            <div className="width-header">

                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="Navbar-text">
                            <Nav.Link href="#home"><h5>หน้าแรก</h5></Nav.Link>
                            <Nav.Link href="#home"><h5>โครงการใหม่</h5></Nav.Link>
                            <Nav.Link href="#home"><h5>ที่อยู่อาศัย</h5></Nav.Link>
                            <Nav.Link href="#home"><h5>ที่ดิน</h5></Nav.Link>
                            <Nav.Link href="#home"><h5>งานบริการ</h5></Nav.Link>
                            <Nav.Link href="#home"><h5>ให้เช่า</h5></Nav.Link>
                        </Nav>
                        <Navbar.Brand className="ml-auto mr-auto " href="#home">React-Bootstrap</Navbar.Brand>
                        <Nav className="mr-auto font-28">

                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link     <i className="fas fa-user"></i></Nav.Link>
                            <NavDropdown title="เปลี่ยนภาษา" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><h5>Action</h5></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><h5>Another action</h5></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><h5>Something</h5></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"><h5>Separated link</h5></NavDropdown.Item>
                            </NavDropdown>
                            <Button variant="outline-success">Search</Button>
                       

                        </Nav>
                        {/*             
            
               
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>



            <div className="search-red">
                <Container className="red">
                    <Row>
                        <Col>
                            <h1>หัวข้อ</h1>

                        </Col>
                    </Row>


                </Container>
            </div>
            <div className="width-header">
                <Container className="red">
                    <Row>
                        <Col>
                            <h1>หัวข้อ</h1>

                        </Col>
                    </Row>


                </Container>
            </div>

        </div>
    )
}

export default Headers
