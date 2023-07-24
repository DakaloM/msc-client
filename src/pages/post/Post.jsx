import React, { useEffect, useState } from 'react';
import "./post.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Article from '../../components/article/Article';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Articles from '../../components/articles/Articles';
import { formatDate } from '../../util/methods';
import Loading from '../../components/loading/Loading';

const Post = () => {

    const [post, setPost] = useState();
    const [posts, setPosts] = useState();
    const [list, setList] = useState();
    const [loading, setLoading] = useState(false);
    

    const postId = useParams().id
    const url = process.env.REACT_APP_BASE_URL

    // Fetch Post
    useEffect(() => {
        const fetchPost = async() => {
            setLoading(true)
            try {
                const res = await axios.get(`${url}posts/${postId}`);
                setPost(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
            
        }
        fetchPost();
    }, [postId])

    // Fetch all Posts
    useEffect(() => {
        const fetchPost = async() => {
            setLoading(true)
            try {
                const res = await axios.get(`${url}posts?category=${post.category}`);
                setPosts(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
            
        }
        post && fetchPost();
    }, [post])
    // Fetch all Posts
    useEffect(() => {
        
        const fetchPost = async() => {
            setLoading(true)
            try {
                const res = await axios.get(`${url}posts`);
                setList(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
            
        }
        fetchPost();
    }, [post])

   
    
    
    

    // Filtering
    useEffect(() => {
        
    }, [])

  return (
        loading? <Loading />
        :

        <div className='post padding'>

            {
                post && 
                <div className="left">
                    <div className="storyContainer">

                        <h2 className="title">{post.title}</h2>
                        <span className="category">{post.category}</span>
                        <div className="imgContainer">
                            <img src={post.image} alt="[business management] [software development]" />
                        </div>

                        <div className="meta">
                            <span className="author">By: Admin</span>
                            <span className="date"> <AccessTimeIcon className='icon'/>{formatDate(post.createdAt)}</span>
                        </div>

                        <div className="story">

                            {
                                post.story && post.story.split('\n').map((item, count) => (

                                    count === 2 ? 
                                    <div className="innerTad" key={item  + Math.random().toString(36)}>
                                        <p className="text">
                                            {item}
                                        </p>
                                    </div>
                                    :
                                    item.length < 70 ?
                                    <span className="storyTitle" key={item  + Math.random().toString(36)}>{item}</span>
                                    :
                                    
                                    <p key={item  + Math.random().toString(36)}>{item}</p>
                                    
                                ))
                            }
                         
                            

                            
                        </div>

                    </div>
                </div>
            }

            <div className="right">
                <h1 className="title">Related Articles</h1>

                <div className="postList">
                   {posts &&  <Articles variant="related" data={posts} filter="All" searchFilter={""}/>}
                </div>


                <h1 className="title">Pinned Stories</h1>

                <div className="postList">
                   {list &&  <Articles variant="related" filter="All" searchFilter={""}
                    data={list.filter((item) => item.pinned === true)}
                   />}
                </div>
            </div>
        </div>
  )
}

export default Post