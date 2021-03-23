import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Col, Nav, Row } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

const Headers = () => {
    return (
        <div>
            <div className="bg-white-2 fixed-top">
            <div className="custom-container ">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="Navbar-text mr-auto">
                            <Link href="#home"><Nav.Link className="border-menu"><h5>หน้าแรก</h5></Nav.Link></Link>
                            <Nav.Link href="#home" className="border-menu"><h5 >โครงการใหม่</h5></Nav.Link>
                            <Nav.Link href="#home" className="border-menu"><h5>ที่อยู่อาศัย</h5></Nav.Link>
                            <Nav.Link href="#home" className="border-menu"><h5>ที่ดิน</h5></Nav.Link>
                            <Nav.Link href="#home" className="border-menu"><h5>งานบริการ</h5></Nav.Link>
                            <Nav.Link href="#home" className="border-menu"><h5>ให้เช่า</h5></Nav.Link>
                        </Nav>
                        <Navbar.Brand className=" mr-auto showlogo" href="#home">

                            <Image
                                src="/assets/images/logo-04.svg"
                                alt="logo"
                                width={118}
                                height={44}
                            />
                        </Navbar.Brand>

                        <Nav className="font-26">
                            <NavDropdown title="เปลี่ยนภาษา" id="basic-nav-dropdown" className="mr-3 ml-3">
                                <NavDropdown.Item href="#action/3.1"><h5>
                                    <Image
                                        src="/assets/images/th.svg"
                                        alt="thai"
                                        width={40}
                                        height={17}
                                    />
                                    ไทย
                                    </h5>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <h5>
                                        <Image
                                            src="/assets/images/en.svg"
                                            alt="thai"
                                            width={40}
                                            height={17}
                                        />
                                        English
                                    </h5>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="เข้าสู่ระบบ" id="basic-nav-dropdown" className="mr-3 ml-3">
                                <NavDropdown.Item href="#action/3.1"><h5>บัญชีของฉัน</h5></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><h5>ลืมรหัสผ่าน</h5></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"><h5>ลงทะเบียน</h5></NavDropdown.Item>
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
                </div>
            </div>
            
            <div className="red pb-3 pt-3">
                <div className="custom-container form-header">
                    <Col xs lg="2"> 
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="font-label">ต้องการ</Form.Label>
                        <Form.Control as="select" className="form-header">
                            <option>กรุณาเลือก</option>
                            <option>ซื้อ</option>
                            <option>ขาย</option>
                            <option>เช่า</option>
                        </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col> 
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="font-label">สินทรัพย์</Form.Label>
                        <Form.Control as="select" className="form-header">
                            <option>กรุณาเลือก</option>
                            <option>ที่ดิน</option>
                            <option>คอนโด</option>
                            <option>ทาวน์โฮม</option>
                            <option>บ้านเดี่ยว</option>
                            <option>บ้านแฝด</option>
                        </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col> 
                        <Form.Group>
                        <Form.Label className="font-label">สินทรัพย์</Form.Label>
                        <Form.Control placeholder="ทำเล, โครงการ, คอนโด, เขต" className="form-header"/>
                        </Form.Group>
                    </Col>
                    <Col xs lg="1">
                    <button className="btn-search-subimit">ค้นหา</button>
                    </Col>
                   
                </div>
                <div className="custom-container form-header">
                    
                     <Col className="pb-2">
                        
                        <Accordion defaultActiveKey="0">
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <h5 className="font-search-more">ค้นหาเพิ่มเติม +</h5>
                                </Accordion.Toggle>
                                <container>
                                    
                                    <Accordion.Collapse eventKey="1">
                                        <Form.Group className= "form-serach-more">
                                             <Col lg={2}>
                                                <Row className="pdr">
                                                <Form.Label className="font-label">ห้องนอน</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>ทั้งหมด</option>
                                                </Form.Control>
                                                </Row>
                                             </Col>
                                             <Col lg={2}>
                                                <Row className="pdr">
                                                <Form.Label className="font-label">ห้องน้ำ</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>ทั้งหมด</option>
                                                </Form.Control>
                                                </Row>
                                             </Col>
                                             <Col>
                                                <Row className="pdr" >
                                                <Form.Label className="font-label">จังหวัด</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>กรุงเทพมหานคร</option>
                                                    <option>กระบี่</option>
                                                    <option>ระยอง</option>
                                                    <option>ชลบุรี</option>
                                                    <option>สมุทรปราการ</option>
                                                </Form.Control>
                                                </Row>
                                             </Col>
                                             <Col>
                                                <Row className="pdr">
                                                <Form.Label className="font-label">เขต/อำเภอ</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>กรุณาเลือก</option>
                                                    <option>อ่อนนุช</option>
                                                    <option>บางกะปิ</option>
                                                    <option>สะพานสูง</option>
                                                    <option>ลาดกระบัง</option>
                                                </Form.Control>
                                                </Row>
                                             </Col>

                                             <Col>
                                                <Row>
                                                <Form.Label className="font-label">แขวง/ตำบล</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>กรุณาเลือก</option>
                                                    <option>อ่อนนุช</option>
                                                    <option>บางกะปิ</option>
                                                    <option>สะพานสูง</option>
                                                    <option>ลาดกระบัง</option>
                                                </Form.Control>
                                                </Row>
                                             </Col>
                                        </Form.Group>
                                        
                                    </Accordion.Collapse>

                                    <Accordion.Collapse eventKey="1">
                                        <Form.Group className= "form-serach-more" controlId="formBasicRange">
                                             <Col>
                                                <Row className="pdr">
                                                <Form.Label className="font-label">เฟอร์นิเจอร์</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>มี</option>
                                                    <option>ไม่มี</option>
                                                    
                                                </Form.Control>
                                                </Row>
                                             </Col>
                                             <Col>
                                                <Row className="pdr">
                                                <Form.Label className="font-label">ประกาศเมื่อ</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>วันนี้</option>
                                                    <option>สัปดาห์ที่ผ่าน</option>
                                                    <option>เดือนที่ผ่านมา</option>
                                                    <option>ปีที่ผ่านมา</option>
                                                    <option>ทั้งหมด</option>
                                                </Form.Control>
                                                </Row>
                                             </Col>

                                             <Col>
                                                <Row>
                                                <Form.Label className="font-label">ราคา</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>1ล้าน-3ล้าน</option>
                                                    <option>3ล้าน-6ล้าน</option>
                                                    <option>10ล้าน-20ล้าน</option>
                                                    <option>ทั้งหมด</option>
                                                </Form.Control>
                                                </Row>
                                             </Col>

                                            
                                        </Form.Group>
                                        
                                    </Accordion.Collapse>
                                    
                                </container>
                               
                                
                        </Accordion>
                     </Col>
                     
                </div>
            </div>
        </div>
    )
}

export default Headers
