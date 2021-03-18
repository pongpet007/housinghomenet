import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'next/app';

       

const Headers = () => {
    return (

        <div>
           

            <Container fluid>

                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="Navbar-text ml-auto mr-auto">
                            <Link href="#home"><Nav.Link ><h5>หน้าแรก</h5></Nav.Link></Link>
                            <Nav.Link href="#home"><h5>โครงการใหม่</h5></Nav.Link>
                            <Nav.Link href="#home"><h5>ที่อยู่อาศัย</h5></Nav.Link>
                            <Nav.Link href="#home"><h5>ที่ดิน</h5></Nav.Link>
                            <Nav.Link href="#home"><h5>งานบริการ</h5></Nav.Link>
                            <Nav.Link href="#home"><h5>ให้เช่า</h5></Nav.Link>
                        </Nav>
<<<<<<< HEAD
                        <Navbar.Brand className="ml-auto mr-auto " href="#home">React-Bootstrap</Navbar.Brand>
                        <Nav className="mr-auto font-28">

                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link     <i className="fas fa-user"></i></Nav.Link>
                            <NavDropdown title="เปลี่ยนภาษา" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><h5>Action</h5></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><h5>Another action</h5></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><h5>Something</h5></NavDropdown.Item>
=======
                        <Navbar.Brand className=" mr-auto showlogo" href="#home"> 
                        
                        <Image
                            src="/assets/images/logo-04.svg"
                            alt="logo"
                            width={118}
                            height={44}
                        />
                        </Navbar.Brand>
                       
                        <Nav className="mr-auto font-26">
                            <NavDropdown title="เปลี่ยนภาษา" id="basic-nav-dropdown" className="mr-3 ml-3">
                                <NavDropdown.Item href="#action/3.1"><h5>ไทย</h5></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><h5>English</h5></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="เข้าสู่ระบบ" id="basic-nav-dropdown"  className="mr-3 ml-3">
                                <NavDropdown.Item href="#action/3.1"><h5><i className="fas fa-user mr-2"></i>บัญชีของฉัน</h5></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><h5><i className="fas fa-key mr-1"></i>ลืมรหัสผ่าน</h5></NavDropdown.Item>
>>>>>>> d5f64d2ca7295d712e40b2451e220b2abb0cca08
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"><h5><i className="fas fa-user-circle mr-1"></i>ลงทะเบียน</h5></NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#home" className="favorate count-style mr-2 ml-2">
                                
                                <Image
                                    src="/assets/images/heart-06.svg"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                />
                                <h1>20</h1>
                                </Nav.Link>
                                
                          
                            <button className="post">
                                ประกาศขายฟรี !!</button>
                           
                        </Nav>                  
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default Headers
