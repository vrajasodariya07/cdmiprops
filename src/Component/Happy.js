import '../App.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaWhatsapp, FaChevronDown, FaLongArrowAltRight, FaLinkedinIn, FaHandPointRight } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdMailOutline } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { IoIosStar, IoIosStarHalf, IoIosArrowRoundForward } from "react-icons/io";
import myimg from '../images/1.svg';
import mylogo from '../images/28.svg';
import { FaBuildingColumns } from "react-icons/fa6";

function Happy() {
    return (
        <>
            <section>

            <div className='section4 section'>
                <div className='container'>
                    <div className='h-std'>
                        <div className='h-info'>
                            <div className='h-head'>
                                <h4>HAPPY STUDENTS</h4>
                                <h2>ALUMNI SPEAK</h2>
                            </div>
                            <div className='ih-img'>
                                <img src={require(`../images/21.png`)}></img>
                            </div>
                            <div className='h-data'>
                                <p>I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.</p>
                            </div>
                            <div className='h-profile'>
                                <div className='pro-img'>
                                    <img src={require(`../images/12.jpg`)}></img>
                                </div>
                                <div className='pro-info'>
                                    <h3>KOLADIYA MANSI</h3>
                                    <span className='color'>UI/UX Designer </span><span> @ Patoliya infotech</span>
                                </div>
                            </div>
                        </div>
                        <div className='h-img'>
                            <div className='himg-box'>
                                <img src={require(`../images/13.webp`)}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </section>
        </>
    );
}

export default Happy;