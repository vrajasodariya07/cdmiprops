import '../App.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { IoIosStar, IoIosStarHalf } from "react-icons/io";





function Course(demo) {
    return (
        <>
            <section>

                <div className='section1 section'>
                    <div className='container'>
                        <div className='section-box'>
                            <div className='heading'>
                                <h4>CREATIVE COURSE</h4>
                                <h1 className='sh-1'>OFFERED COURSES</h1>
                            </div>
                            <Row>
                                {
                                    demo.co.map((ele) => {
                                        return (
                                            <Col xs={4} className='py-3'>
                                                <Card>
                                                    <Card.Img variant="top" src={ele.image} />
                                                    <Card.Body>
                                                        <Card.Title>{ele.name}</Card.Title>
                                                        <Card.Text></Card.Text>
                                                    </Card.Body>
                                                    <div className='down-info'>
                                                            <div className='d-icon'>
                                                                <a><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></a>
                                                            </div>
                                                            <div className='d-btn'>
                                                                <button>Know more..!</button>
                                                            </div>
                                                        </div>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                            <div className='main-box'>

                                <div className='d-end'>
                                    <div className='d-end-btn'>
                                        <button>View All Courses  <FaLongArrowAltRight></FaLongArrowAltRight></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Course;


