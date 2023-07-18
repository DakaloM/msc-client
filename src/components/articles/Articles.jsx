import React, { useEffect, useState } from 'react'
import "./articles.scss";
import { carouselList } from '../../dummyData';
import Article from '../article/Article';
import Pagination from '../pagination/Pagination';


const Articles = ({variant, setArticle, filter, searchFilter, data}) => {
  
  const [displayList, setDisplayList] = useState([]);
  const [pinnedList, setPinnedList] = useState([]);
  const [pinTracker, setPinTracker] = useState(0);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);


  useEffect(() => {
      setPinnedList(data.filter(item => item.pinned === true))
  }, [data])

  useEffect(() => {
      setDisplayList(filter === "All" ? data : data.filter(item => item.category === filter))
  }, [filter])

  useEffect(() => {
      setDisplayList(searchFilter ? searchFilter === "" ? data : data.filter(item => item.title.toLowerCase().includes(searchFilter.toLowerCase())) : data)
  }, [searchFilter])



  // Get current Article
  const indexOfLastArticle = currentPage * perPage;
  const indexOfFirstArticle = indexOfLastArticle - perPage;
  const pageList = displayList && displayList.slice(indexOfFirstArticle, indexOfLastArticle);


  return (
    <div className={variant ? 'articles variant' : 'articles'}>
        {
           variant ? variant === "related" ? 

                 
                  displayList.length > 0 ? displayList.map((item, count) => (
                        
                    count < 6 && <Article key={item._id} article={item}  variant={variant} s/> 
                
                  ))  : <span className="noPost">No post Found</span>


                  :
                  pinnedList.length > 0 ? pinnedList.map((item, count) => (
                        
                    count < 4 && <Article key={item._id} article={item}  variant={variant} s/> 
                
                  )) : <span className="noPost">No post Found</span>

            :

           pageList.length > 0 ? pageList.map((item) => (
             <Article key={item._id} article={item} /> 
               
          
            ))
            :
            <span>No record found</span>
        }

        {!variant && displayList.length > perPage &&  <Pagination articlesPerPage={perPage} currentPage={currentPage} 
                    totalArticles={data.length}  setCurrentPage={setCurrentPage}/>}


        
    </div>
  )
}

export default Articles