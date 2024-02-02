import '../App.css';
import { Col, Container, Row, Card } from "react-bootstrap";

function Read(props) {
    return (
        <>
            <section className='read'>

                <div className='section5 section'>
                    <Container>
                        <div className=''>
                            <div className='w-info'>
                                <div className='w-head'>
                                    <h4>READ OUR DIFFERENCE</h4>
                                    <h2>WHY CHOOSE CREATIVE</h2>
                                </div>
                            </div>
                            <Row className='text-center justify-content-center align-items-center'>
                                {
                                    props.rd.map((ele) => {
                                        return (
                                            <Col lg={4} className='py-3'>
                                                <Card >
                                                    <Card.Img variant="top" src={ele.image} style={{backgroundColor: ele.color }}/>
                                                    <Card.Body>
                                                        <Card.Title>{ele.title}</Card.Title>
                                                        <Card.Text>{ele.info}</Card.Text>
                                            
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                        </Container>
                </div>

            </section>
        </>
    );
}

export default Read;