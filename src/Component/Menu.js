import '../App.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaWhatsapp, FaChevronDown, FaLongArrowAltRight, FaLinkedinIn, FaHandPointRight } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdMailOutline } from "react-icons/md";
import { MdVerified } from "react-icons/md";

import myimg from '../images/1.svg';


function Menu(props) {



    return (
        <>
            <section>

                <div className="header">
                    <div className="container">
                        <div className="top-header">
                            <div className="left">
                                <a><font className="mail"><MdMailOutline></MdMailOutline></font> Info@cdmi.in</a>
                                <a><font className="mail"><MdVerified ></MdVerified></font>Verify certificate</a>
                            </div>
                            <div className="center">
                                <a>HAVE ANY QUESTION? +91 90333 16003</a>
                            </div>
                            <div className="right">
                                <a><FaFacebookF></FaFacebookF></a>
                                <a><FaTwitter></FaTwitter></a>
                                <a><FaGooglePlusG></FaGooglePlusG></a>
                                <a><FaInstagram></FaInstagram></a>
                                <a><CiYoutube></CiYoutube></a>
                                <a><FaWhatsapp></FaWhatsapp></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="manu">
                    <div className='container'>
                        <div className="box-manu align-items-center">
                            <div className="left">
                                <img src={myimg} className='imag'></img>
                            </div>
                            <div className='right'>
                                <div className='options'>
                                    <ul className='main-manu m-0'>
                                        {
                                            props.me.map((ele)=>{
                                                return(
                                                        <li>{ele}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Menu;