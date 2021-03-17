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


const Headers = () => {
    return (
        <div>
        
        <Container fluid>
            
           <Navbar expand="lg">
           <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
           <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto Navbar-text">
                        <Nav.Link href="#home"><h5>หน้าแรก</h5></Nav.Link>
                        <Nav.Link href="#home"><h5>โครงการใหม่</h5></Nav.Link>
                        <Nav.Link href="#home"><h5>ที่อยู่อาศัย</h5></Nav.Link>
                        <Nav.Link href="#home"><h5>ที่ดิน</h5></Nav.Link>
                        <Nav.Link href="#home"><h5>งานบริการ</h5></Nav.Link>
                        <Nav.Link href="#home"><h5>ให้เช่า</h5></Nav.Link>
                    </Nav> 
            <Navbar.Brand className="ml-auto mr-auto " href="#home">React-Bootstrap</Navbar.Brand>
            <Nav className="ml-auto mr-auto">
         
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
                {/*             
            
               
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
            </Navbar>
                            <nav className="navbar navbar-inverse " role="navigation">
                <div className="container">
                   
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    
                    </div>
                    <a className="navbar-brand" href="#">Brand</a>
                   
                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                    
                    <ul className="nav navbar-nav navbar-left">
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Menu</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                <div className="row">
                <div className="container">
                    <div className="col-md-12">
                    <h2>Navbar Centered Logo</h2>
                    </div>
                </div>
                </div>
        </Container>

        

        <div className ="search-red">
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
