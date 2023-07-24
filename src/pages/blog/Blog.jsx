import React, { useEffect, useState } from 'react'
import "./blog.scss";
import Footer from '../../components/footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { carouselList } from '../../dummyData';
import Articles from '../../components/articles/Articles';
import SearchIcon from '@mui/icons-material/Search';
import ViewArticle from '../../components/viewArticle/ViewArticle';
import { articleList } from '../../dummyData';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { motion, useAnimation, useScroll } from 'framer-motion';
import axios from 'axios';
import { useStateContext } from '../../context/ContextProvider';
import { formatDate } from '../../util/methods';
import Loading from '../../components/loading/Loading';

const Blog = () => {

    const [displayArticle, setDisplayArticle] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState([])
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [event, setEvent] = useState(0)
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [cats, setCats] = useState();
    
    const {screenSize} = useStateContext();

    const url = process.env.REACT_APP_BASE_URL

    // fetch all Posts
    useEffect(() => {
        const fetchPosts = async() => {
            setLoading(true);
            try {
                const res = await axios.get(`${url}posts?new=true`)
                setPosts(res.data)
                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false);
            }

        }
        fetchPosts()
    }, [event])
    
    // Fetch all Categories
    useEffect(() => {
        const fetchCats = async() => {
            setLoading(true)
            try {
                const res = await axios.get(`${url}categories`)
                setCats(res.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        fetchCats();
    }, [event])

    

    const handleNavSelect = (e) => {
        const list = document.querySelectorAll(".navItem");
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove("active")
        }
        e.target.classList.add("active")
        setCategory(e.target.innerHTML)
        setSearch("")
    }

   

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
        
        <div className='blog' id='blog'>

                <div className="header">
                    <h1 className='title'>Our Blog</h1>
                    <p className="desc">
                        Dont miss out on any of our updates
                    </p>
                </div>


            {
                loading ? <Loading />
                :

                posts && posts.length > 0 &&
                <div className="blogWrapper">

                        <div className="intro padding">
                            <div className="list">
                                {
                                    posts && posts.map((item, count) => (

                                        screenSize <= 900 ?

                                        screenSize <= 600 ?

                                        count <= 0 &&
                                        <motion.div key={item._id} className="listItem"

                                        initial = "offScreenUp"
                                        whileInView={"onScreenAll"}
                                        variants={variations}
                                        transition={{ ease: "easeInOut", duration:  ((count + 1)/0.5 + 0.2) * 0.2}}
                                        
                                        >
                                            <div className="imgContainer">
                                                <img src={item.image}
                                                alt="[business management] [software development]" />
                                            </div>

                                            <div className="info neqwww">
                                                <span className="category">{item.category}</span>
                                                <Link className="link title" to={`/blog/${item._id}`}>{item.title}</Link>
                                                <span className="date"><AccessTimeIcon className='icon'/>{formatDate(item.createdAt)}</span>
                                            </div>
                                        </motion.div>
                                        : 
                
                                        count <= 1 &&
                                        <motion.div key={item._id} className="listItem"

                                        initial = "offScreenUp"
                                        whileInView={"onScreenAll"}
                                        variants={variations}
                                        transition={{ ease: "easeInOut", duration:  ((count + 1)/0.5 + 0.2) * 0.2}}
                                        
                                        >
                                            <div className="imgContainer">
                                                <img src={item.image}
                                                alt="[business management] [software development]" />
                                            </div>

                                            <div className="info">
                                                <span className="category">{item.category}</span>
                                                <Link className="link title" to={`/blog/${item._id}`}>{item.title}</Link>
                                                <span className="date"><AccessTimeIcon className='icon'/>{formatDate(item.createdAt)}</span>
                                            </div>
                                        </motion.div>

                                        :
                                        count <= 2 &&
                                        <motion.div key={item._id} className="listItem"

                                        initial = "offScreenUp"
                                        whileInView={"onScreenAll"}
                                        variants={variations}
                                        transition={{ ease: "easeInOut", duration:  ((count + 1)/0.5 + 0.2) * 0.2}}
                                        
                                        >
                                            <div className="imgContainer">
                                                <img src={item.image}
                                                alt="[business management] [software development]" />
                                            </div>

                                            <div className="info">
                                                <span className="category">{item.category}</span>
                                                <Link className="link title" to={`/blog/${item._id}`}>{item.title}</Link>
                                                <span className="date"><AccessTimeIcon className='icon'/>{formatDate(item.createdAt)}</span>
                                            </div>
                                        </motion.div>
                                    ))
                                }
                                
                            </div>
                        </div>


                        <div className="articlesSection padding">

                            <div className="top">

                                <div className="navigation">
                                        <div className="heading">
                                            <h1 className="title">Latest Stories</h1>
                                            <span className="desc">Don't miss any news</span>
                                        </div>

                                        {
                                            cats && 
                                            <div className="nav">
                                                <ul>
                                                    <li onClick={handleNavSelect} className='navItem active'>All</li>
                                                    {
                                                        cats.map((item) => (
                                                            <li onClick={handleNavSelect} className='navItem' key={item._id}>
                                                                {item.title}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        }

                                        
                                </div>

                                <div className="search">
                                    <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" placeholder='search...' />
                                    <span className="button"><SearchIcon className='icon'/></span>
                                </div>
                            </div>

                            <div className="bottom">

                                <div className="left">

                                    <div className="articleList">
                                        {
                                            posts && posts.length > 0 && <Articles   filter={category} search={search} data={posts}
                                            searchFilter={search} 
                                            />
                                        }
                                    </div>
                                </div>

                                <div className="right">
                                


                                    <div className="pinnedStories">
                                        <h1 className="title" style={{fontSize: 22, marginBottom: 20}}>Pinned Stories</h1>
                                        {posts && posts.length > 0 && <Articles variant="sidebar" data={posts}/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            }

            
        </div>
  )
}

export default Blog