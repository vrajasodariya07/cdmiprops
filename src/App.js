import './App.css';

import Menu from './Component/Menu';
import Slider from './Component/Slider';
import Course from './Component/Course';
import About from './Component/About';
import Detail from './Component/Detail';
import Happy from './Component/Happy';
import Read from './Component/Read';
import Placement from './Component/Placement';
import Footer from './Component/Footer';


let menu = ["HOME","COURSES","ACTIVITES","BLOG","KNOW US","GET IN TOUCH","STUDENT ZONE"];


let slider = [
    require(`./images/img1.webp`),
    require(`./images/img2.webp`),
    require(`./images/img3.jpg`),
    require(`./images/img4.webp`),
    require(`./images/img5.webp`),
    require(`./images/img6.webp`),
]


let img_obj = [
    {
        name: "Development Courses",
        image: require(`./images/3.webp`)
    },
    {
        name: "Design Courses",
        image: require(`./images/4.webp`)
    },
    {
        name: "Programming IT",
        image: require(`./images/5.webp`)
    },
    {
        name: "Trendy Courses",
        image: require(`./images/6.webp`)
    },
    {
        name: "Civil-Mech. Engineering",
        image: require(`./images/7.webp`)
    },
    {
        name: "Business Development",
        image: require(`./images/8.webp`)
    }
]

let detail = [
    {
        image:require(`./images/bg1.png`),
        no:"18000+",
        name:"HAPPY STUDENTS"
    },
    {
        image:require(`./images/bg2.png`),
        no:"10+",
        name:"CERTIFICATION APPROVAL"
    },
    {
        image:require(`./images/bg3.png`),
        no:"100+",
        name:"CERTIFIED TEACHERS"
    },
    {
        image:require(`./images/bg4.png`),
        no:"12000+",
        name:"STUDENTS PLACED"
    }
]


let read=[
    {
        image:require(`./images/22.png`), 
        color:"#f6475f",
        title:"Industry experts as Trainers",
        info:"Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
    },
    {
        image:require(`./images/23.png`),
        color:"#ffbc06",
        title:"Latest Curriculum",
        info:"We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."
    },
    {
        image:require(`./images/24.png`),
        color:"#b3d369",
        title:"Latest technology",
        info:"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
    },
    {
        image:require(`./images/27.png`),
        color:"#554da7",
        title:"Interview Assistance",
        info:"At the end of each training,our training instructor will go through the possible technical questions you may be asked."
    },
    {
        image:require(`./images/25.png`),
        color:"#4382ff",
        title:"Free Upgradation",
        info:"We will be provided free upgradation for any newer version of the course you have."
    },
    {
        image:require(`./images/26.png`),
        color:"#f94fa4",
        title:"Lifetime Support",
        info:"We will provide you lifetime support on all the courses you learned from us."
    }
]

let place=[
    require(`./images/CLOUDUS-TECHNOLOGIES.png`),
    require(`./images/Hard-n-soft-consultancy.png`),
    require(`./images/Inficial-Infotech.png`),
    require(`./images/Reveralto-Infotech.png`),
    require(`./images/MJ-INFOTECH.png`),
    require(`./images/Jbcoder-Technolab.png`),
    require(`./images/infius.png`),
    require(`./images/smart-infosys1.png`),
    require(`./images/webiots.jpg`),
]

let pla_con = ["Php institute in Katargam","Wordpress training course","Blender 3D Design Course","Laravel Training institute In Katargam","solidworks Training In mota varachha","Best Wordpress Training Institute","Andriod Training In surat","Laravel Training institute in Mota Varachha","Google Sketchup Civil Training Course","Maya Animation Courser","Ios App Training Institute In surat","Wordpress Training Institute in Mota Varachha","Advance Wordpress Training Institute In Surat","Web Development Training In varachha","Codeigniter Training Course"]



function App() {
    return (
        <div className="">


            <Menu me={menu}></Menu>
            <Slider sl={slider}></Slider>
            <Course co={img_obj}></Course>

            {/* {
                    img_obj.map((ele,ind) => {
                        return(
                            <Course img={ele.image} name={ele.name}></Course>
                        )
                    })
            } */}

            <About></About>
            <Detail dt={detail}></Detail>
            <Happy></Happy>
            <Read rd={read}></Read>
            <Placement pl={place} con={pla_con}></Placement>
            <Footer></Footer>
           
        </div>
    )
}
export default App;