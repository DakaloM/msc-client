import React from 'react';
import "./article.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { formatDate } from '../../util/methods';



const Article = ({article, variant}) => {




    const variations = {

        offScreenLeft: {
          translateX: "-50%",
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
    <motion.div className={variant? 'article small' : 'article'}
        initial = {variant? "offScreenBottom" : "offScreenLeft"}
        whileInView={"onScreenAll"}
        variants={variations}
        transition={{ ease: "easeIn", duration:  0.5, bounce: 0.2}}
    
    >
       {
        variant ? 
            
                <div className="storyContainer small">
                    
                    <div className="rec small">
                        
                    </div>
                    
                    <div className="imageContainer small">
                        <img src={article.image} alt="software development (business)" />
                    </div>

                    <div className="info">
                        <span className="category small">{article.category}</span>
                        <Link to={`/blog/${article._id}`} className="title small link">{article.title.slice(0,20)}</Link>
                        {/* <span className="date">{formatDate(article.createdAt)}</span> */}
                        
                    </div>
                </div>
        :

        <div className="storyContainer normal">
            <div className="rec">
                
            </div>

        
            <div className="imageContainer normal">
                <img src={article.image} alt="software development (business)" />
            </div>

            <div className="info">
                <span className="category">{article.category}</span>
                <Link to={`/blog/${article._id}`} className="title link">{article.title}</Link>
                <span className="date"><AccessTimeIcon className='icon' />{formatDate(article.createdAt)}</span>
                <p className="desc">{article.story.slice(0, 70)}... 
                
                  <Link className='link' to={`/blog/${article._id}`}>read more</Link>
                </p>
                
            </div>
        </div>
       }
    </motion.div>
  )
}

export default Article