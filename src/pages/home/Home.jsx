import React, { useEffect, useRef, useState } from 'react';
import "./home.scss";
import Hero from '../../components/hero/Hero';
import { products } from '../../data/data';
import {HashLink as Link} from 'react-router-hash-link'
import Image from '../../components/image/Image';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import Slider from '../../components/slider/Slider';
import { useStateContext } from '../../context/ContextProvider';
import axios from 'axios';
import Loading from '../../components/loading/Loading';

const Home = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const {screenSize, setScreenSize} = useStateContext();
  const [loading, setLoading] = useState(false)
  const [testimonies, setTestimonies] = useState([]);
  const url = process.env.REACT_APP_BASE_URL

  useEffect(() => {
    const fetchTests = async() => {
      setLoading(true)
        try {
          const res = await axios.get(`${url}testimonies`)
          setTestimonies(res.data)
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
    }
  
    fetchTests();
  }, [])
  



  return (
    <div className='home' id='home'>
      
      <Hero />

      <div className="intro padding">

        <div className="left">

          <span className="tag">What We Do</span>
          <h1 className="title">The service we offer is specifically designed to meet your needs.</h1>

          <div className="services">
            {
              products.map((item, count) => (
                count <= 3 && 
                <div className="item" key={item.id}>
                  {item.icon}

                  <div className="info">
                    <span className="title">{item.title}</span>
                    <p className="desc">{item.desc.slice(0, 75)}...</p>
                    <Link to="/services" className='link'>Learn More</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="imageSide">
            <Image 
                src={"/img/businessman.png"}
                width={"100%"} height={400} shaddow={false}
                objectFit={"contain"}
            />
        </div>
      </div>

      <div className="process padding">
        <div className="heading">
          <Image
            src={"/img/structure.png"}
            width={100} height={100}
          />
          <h1 className="title"> The complete Process</h1>
          <p className="desc">Here are 3 working steps to organize our business projects</p>
        </div>
        
        <div className="processContainer">

        
          <div className="left">
              <span className="title">How it Works?</span>
              <p className="desc">
                Find out everything you need to know and more about how we create our business process models.
              </p>

              <p className="text">
              Imagine a world where your ideas take flight and shape the digital landscape. At Multi Solutions Catalyst, we believe in the power of collaboration and innovation. We have created a dynamic ecosystem where ideas flow freely, empowering our clients to actively participate in the creative process. Through engaging brainstorming sessions, interactive workshops, and personalized feedback channels, we collect a wealth of unique ideas. But that's just the beginning.
              </p>
              <p className="text">
              We understand that data holds the key to unlocking the true potential of your ideas. That's why we meticulously analyze market trends, user behavior, and performance metrics to validate and refine your concepts.
              </p>

              

              <Link to='/services#methods' className="link">Learn More</Link>
          </div>

          <div className="right">
              <div className="list">

                <div className="listItem">
                  <span className="count">1</span>
                  <div className="info">
                    <span className="title">Collect Ideas</span>
                    <p className="desc">
                      Unleash your creative potential. We collect groundbreaking ideas through interactive collaboration, fueling innovation and driving digital transformation.
                    </p>
                  </div>
                </div>

                <div className="listItem second">
                  <span className="count">2</span>
                  <div className="info">
                    <span className="title">Data Analysis</span>
                    <p className="desc">
                      Data-driven precision. Our expert team analyzes insights to refine concepts and crafts exceptional products that exceed expectations. Let's bring your vision to life.
                    </p>
                  </div>
                </div>

                <div className="listItem last">
                  <span className="count">3</span>
                  <div className="info">
                    <span className="title">Finalize Product</span>
                    <p className="desc">
                      Through meticulous analysis and expert craftsmanship, we transform concepts into exceptional digital products, exceeding expectations and bringing your vision to life. Experience the power of innovation with us.
                    </p>
                  </div>
                </div>


              </div>
          </div>

        </div>
      </div>

      {/* <div className="stats padding">
          <div className="list">
              <div className="listItem">
                  <Image 
                    src={"/img/payment-icon.png"}
                    width={70} 
                  />
                  <span className="count">75</span>
                  <span className="text">Completed Projects</span>
              </div>

              <div className="listItem">
                  <Image 
                    src={"/img/payment-icon.png"}
                    width={70} 
                  />
                  <span className="count">50</span>
                  <span className="text">Satisfied Customers</span>
              </div>

              <div className="listItem">
                  <Image 
                    src={"/img/payment-icon.png"}
                    width={70} 
                  />
                  <span className="count">20</span>
                  <span className="text">Expert Employees</span>
              </div>

              <div className="listItem">
                  <Image 
                    src={"/img/payment-icon.png"}
                    width={70} 
                  />
                  <span className="count">30</span>
                  <span className="text">Testimonies</span>
                  
              </div>
          </div>
      </div> */}

      <div className="reasons padding" id='reasons'>
            <div className="left">
              <Image 
                  src={"/img/business-discussion.png"}
                  width={"100%"} height={400} shaddow={false}
                  objectFit={"contain"}
              />
            </div>

            <div className="right">
                <span className="tag">Why Choose Us</span>
                <h1 className="title">So here a few resons why our valued customers choose us</h1>

                <div className="list">
                    <div className="listItem">
                      <Image
                        src={"/img/creativity2.png"}
                        minWidth={70} height={50}  objectFit={"contain"}
                      />
                       <div className="info">
                          <span className="title">Creativity</span>
                          <p className="desc">
                            Our valued customers choose us for our unrivaled creativity, bringing their ideas to life in captivating ways.
                          </p>
                       </div>
                    </div>

                    <div className="listItem">
                      <Image
                        src={"/img/idea.png"}
                        minWidth={70} height={50} objectFit={"contain"}
                      />
                       <div className="info">
                          <span className="title">Innovative Thinking</span>
                          <p className="desc">
                            We stand out with our innovative thinking, constantly pushing boundaries to deliver cutting-edge solutions.
                          </p>
                       </div>
                    </div>

                    <div className="listItem">
                      <Image
                        src={"/img/solutions.png"}
                        minWidth={80} height={50} objectFit={"contain"}
                      />
                       <div className="info">
                          <span className="title">Rapid Solutions</span>
                          <p className="desc">
                            When challenges arise, our rapid problem-solving abilities ensure efficient solutions, saving time and resources.
                          </p>
                       </div>
                    </div>

                    <div className="listItem">
                      <Image
                        src={"/img/creativity.png"}
                        minWidth={80} height={50} objectFit={"contain"}
                      />
                       <div className="info">
                          <span className="title">Top-Notch Support</span>
                          <p className="desc">
                            Experience top-notch support from our dedicated team, ensuring your satisfaction every step of the way.
                          </p>
                       </div>
                    </div>
                </div>
            </div>
      </div>

      <div className="testimonies padding" id='testimonies'>
            <div className="testContainer">
                <span className="tag">Happy Customers</span>
                <h1 className="title">Don't take our word for it. See what customers are saying about us.</h1>

                {
                  loading ? <Loading /> :

                  testimonies && testimonies.length > 0 && <Slider user={false} data={testimonies}/>
                }
            </div>
      </div>
      
    </div>
  )
}

export default Home