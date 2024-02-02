import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';

function Detail(props) {
    return (
        <div className="section3">
            <Container className='position-relative z-1'>
                <Row className=''>
                    {
                        props.dt.map((ele) => {
                            return (
                                <Col>
                                    <div className='a1 d-flex justify-content-center'>
                                        <div className='m-box white text-center'>
                                            <div className="img">
                                                <img src={ele.image}></img>
                                            </div>
                                            <div className='nmb'>
                                                <h2>{ele.no}</h2>
                                            </div>
                                            <div className="titl">
                                                <p>{ele.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
export default Detail;