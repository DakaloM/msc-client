import React from 'react';
import "./viewArticle.scss";
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ViewArticle = ({setDisplay, article}) => {
  return (
    <div className='viewArticle'>
        <div className="container">
             <span onClick={() => setDisplay(false)} className='close'><CancelIcon  className='icon'/></span>

             <div className="storyContainer ">
                <div className="imgContainer">
                    <img src={article.img} alt="[business management] [software development]" />
                </div>

                <div className="info">
                    <span className="title">{article.title}</span>
                    <div className="stats">
                        <span className="category">{article.category}</span>
                        <span className="date"><AccessTimeIcon  className='icon'/>{article.date}</span>
                    </div>

                    <p className="story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <p className="story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="story">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                </div>
             </div>
        </div>
        
    </div>
  )
}

export default ViewArticle