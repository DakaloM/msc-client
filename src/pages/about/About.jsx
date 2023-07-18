import React, {useEffect, useState} from 'react';
import "./about.scss";
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import Image from '../../components/image/Image';
import User from '../../components/user/User';
import Slider from '../../components/slider/Slider';
import axios from 'axios';
import Loading from '../../components/loading/Loading';



const About = () => {
  const url = process.env.REACT_APP_BASE_URL
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState(false);

  useEffect(() => {
    const fetchUsers = async() => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}employees`);
        setEmployees(res.data)
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }
  
    fetchUsers()
  }, [])


  const variations = {

    offScreenLeft: {
      translateX: "-100%",
      opacity: 0
    },
    offScreenUp: {
      translateY: "-50%",
      opacity: 0
    },
    offScreenBottom: {
      translateY: "100%",
      opacity: 0
    },
    offScreenRight: {
      translateX: "100%",
      opacity: 0
    },
    offScreenRightHalf: {
      translateX: "50%",
      
      opacity: 0
    },
    offScreenStatic: {
      translateY: "20%",
      opacity: 0
    },
    onScreenAll: {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      opacity: 1
    },

    
 }
  return (
    <div className='about' id='about'>

      
      
      <div className="header">
          <h1 className='title'>Multi Solutions Catalyst</h1>
          
          <p className="desc">
             We turn complex ideas into simple solutions
          </p>
      </div>

      <div className="intro" id="ourStory">
          <div className="introWrapper">

              <img src="https://images.pexels.com/photos/3183127/pexels-photo-3183127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              
              alt="[business management] [software development]" />
              <div className="info">

                  <div className="container">

                    <p className="text">
                        At Multi Solutions Catalysts, we understand that every business has unique needs and challenges. That's why we offer a diverse lineup of solutions that can be tailored to meet the specific requirements of each client. Our team of experts has years of experience in developing and implementing technology solutions, and we are committed to delivering exceptional results for our clients.
                    </p>

                    <div className="items">
                      <span className="item">
                        <span className="text">
                            24/7
                        </span>
                        Support
                      </span>

                      <span className="item">
                        <span className="iconContainer">

                          <CategoryOutlinedIcon className='icon'/>
                        </span>
                        Reliable
                      </span>
                      <span className="item">
                        <span className="iconContainer">

                          <PsychologyOutlinedIcon className='icon'/>
                        </span>
                        
                        Creative
                      </span>
                    </div>

                  </div>
              </div>
          </div>
      </div>

      <div className="core pScreen">
          <div className="left">
              {/* <CampaignOutlinedIcon  className='icon'/> */}
              <Image 
                src={"/img/speaker.png"}
                width={100} height={100}
              />
              <h1 className="title" id='aboutCore'>Who Are We?</h1>
              <p className="desc">
                We are a technology company that believes in the power of creative strategy and problem solving.
              </p>
              <div className="coreItems">
                <div className="item first">
                  <span className="title">Mission</span>
                  <p className="itemText">
                      Our mission is to provide innovative and efficient solutions that solve our clients' most complex business challenges. We strive to exceed our clients' expectations through exceptional customer service, cutting-edge technology, and a results-oriented approach
                  </p>
                </div>

                <div className="item last">
                  <span className="title">Vission</span>
                  <p className="itemText">
                  Our vision is to be the leading solutions provider in our industry, recognized for our expertise, creativity, and commitment to delivering value to our clients. We aim to achieve this by continuously investing in our people, processes, and technology to stay ahead of the curve and provide unparalleled customer experience.
                  </p>
                </div>
              </div>
          </div>


          <div className="right">
            <Image 
              src={"https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              width={250} height={350} bRadius={10} mBottom={-100} mRight={-50} zIndex={10} shaddow={true}
            />
            <Image 
              src={"https://images.pexels.com/photos/7793730/pexels-photo-7793730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              width={250} height={350} bRadius={10} mTop={-100} mLeft={-50} shaddow={true}
            />
          </div>
      </div>

      <div className="team pScreen" id='team'>
        <h1 className="title">Our Dedicated Team?</h1>
        <p className="desc">Skill, Talent and dedication is what we all abour. Meet our telented team</p>

        <div className="teamList">
          {
            loading? <Loading />

            : employees && employees.length > 0 && <Slider user={true} data={employees}/>
          }
        </div>
      </div>
    </div>
  )
}

export default About