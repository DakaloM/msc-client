import React from 'react';
import "./services.scss";
import { products, steps } from '../../data/data';
import Image from '../../components/image/Image';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { HashLink as Link } from 'react-router-hash-link';

const Services = () => {
  return (
    <div className="service" id='services'>
            <div className="header">
                <h1 className='title'>Our Services</h1>
                <p className="desc">
                    We are a creative company that focuses on establishing long term relationships with cliets.
                </p>
            </div>
            
            <div className="intro">
                <div className="introWrapper">

                    <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="[business management] [software development]" />
                    <div className="info">
                        <span className="item">
                            < GroupsOutlinedIcon className='icon before'/>
                            Expert Team
                            <KeyboardArrowRightOutlinedIcon className='icon'/>  
                        </span>
                        <span className="item">
                            <PsychologyOutlinedIcon className='icon before'/>
                            Simple solutions
                            <KeyboardArrowRightOutlinedIcon className='icon'/>
                        </span>
                        
                        <span className="item">
                            <LocalMallOutlinedIcon className='icon before'/>
                            Satisfied Customers
                            <KeyboardArrowRightOutlinedIcon className='icon'/>
                        </span>
                        <span className="item" id='products'>
                            <CategoryOutlinedIcon className='icon before'/>
                            Great Products
                            
                        </span>
                    </div>
                </div>
            </div>
            <div className="wrapper" id='products'>

                <div className="products">
                    <div className="left">
                        <h1 className="title">What We Do?</h1>

                        <div className="list">
                            {
                                products.map((product) => (
                                    <div className="listItem" key={product.id}>
                                        {product.icon}
                                        <div className="info">
                                            <h3 className="itemTitle">{product.title}</h3>
                                            <p className="desc">{product.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="right">
                        <div className="top">
                            <div className="item one">
                                <Image 
                                    src={"https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                                    width={120} height={130} bRadius={5} shaddow={true}
                                />
                            </div>
                            <div className="item two">
                                <Image 
                                    src={"https://images.pexels.com/photos/7841457/pexels-photo-7841457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                                    width={230} height={180} bRadius={5} shaddow={true}
                                />
                            </div>

                        </div>

                        <div className="bottom">
                            <div className="item two">
                                <Image 
                                    src={"https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                                    width={250} height={140} bRadius={5} shaddow={true}
                                />
                            </div>
                            <div className="item " >
                                <Image 
                                    src={"https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                                    width={140} height={160} bRadius={5} shaddow={true}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                
            </div>
             <div className="methods" id='methods'>
                <h1 className="title">How We Do It?</h1>
                <p className="desc">
                    To put it simple, We craete simple solutions from your complex ideas. We understand every business is
                    unique so we provide solutions tailored specifically for your business
                </p>

                <div className="steps">
                    {
                        steps.map(step => (
                            <div className="step"  key={step.id}>
                                <span className="count">{step.count}</span>
                                <span className="stepTitle">{step.title}</span>
                                <p className="desc">{step.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="serviceContact">
                <div className="left">
                    <Image
                        src="/img/content-creator.png" width={"100%"} height={400} objectFit={"contain"}
                    />
                </div>

                <div className="right">
                    <h1 className="title">Lets create something together</h1>
                    <p className="desc">
                        Dont leave your dream projects as dreams, let us show you how to turm them into a reality 
                    </p>

                    <ul className='solutionList'>
                        <li>Custom software development</li>
                        <li>Web application development</li>
                        <li>Mobile App development</li>
                        <li>Software Maintenancet</li>
                        <li>Infrastructure design and development</li>
                        <li>Cloud computingt</li>
                        <li>Cyber security</li>
                        <li>Project planning and execution</li>
                        <li>Business strategy formulation</li>
                        <li>Business expansion and management</li>
                        <li>Digital marketing</li>
                        <li>Business compliance</li>
                        <li>Legal compliance</li>
                        <li>Labour management</li>
                    </ul>

                    <Link to="/contact#core" className='link'>Contact us</Link>
                </div>
            </div>
      </div>
  )
}

export default Services