import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function Slider(props) {

    let slider1 = {
        items: 1,
        dots: false
    }

    return (
        <>
            <section>

                <OwlCarousel className='owl-theme' loop {...slider1}>
                    {
                        props.sl.map((ele) => {
                            return (
                                <div class='item'>
                                    <div className="slider-box">
                                        <div className='img-box'>
                                            <div className='img'>
                                                <img src={ele} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>

            </section>
        </>
    );
}

export default Slider;