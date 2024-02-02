import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Placement(props) {

    let slider2 = {
        items:6,
        dots:false,
        margin:30
    }


    return (
        <>
            <section>

                <div className='section6'>
                    <div className='container'>
                        <div className='place-box'>
                            <div className='p-head'>
                                <h4>STUDENT PLACEMENT</h4>
                                <h2>OUR RECRUITMENT PARTNERS</h2>
                            </div>
                            <Row>
                                <Col className='mb-5'>
                                    <OwlCarousel className='owl-theme' loop {...slider2}>
                                        {
                                            props.pl.map((ele) => {
                                                return (
                                                    <div className='item'>
                                                        <img src={ele} className='iga'></img>
                                                    </div>
                                                )
                                            })
                                        }
                                    </OwlCarousel>
                                </Col>
                            </Row>
                            <div className='p-course'>
                                <div className='pc-head'>
                                    <h2>Our Demanded Course -</h2>
                                    <div className='pc-info'>
                                        {
                                            props.con.map((ele) => {
                                                return(
                                                    <span>{ele}</span>
                                                )
                                            })
                                        }
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

export default Placement;