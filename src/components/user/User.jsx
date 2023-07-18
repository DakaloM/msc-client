import React from 'react';
import "./user.scss";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

const User = ({name, role, about,fbUrl, twitterUrl, image}) => {
  return (
    <div className="user">
        <div className="imgContainer">
        <img src={image} alt="[business management] [software development]" />
        </div>

        <div className="info">
            <span className="name">{name? name: "dakalo Mbulaheni"}</span>
            <span className="role">{role? role : " Manager"}</span>
            <p className="userAbout">{about? about + "..." :  "I love turning complex ideas into simple soilutions"}</p>

            <div className="socialIcons">
                <Link className="link" to={fbUrl? fbUrl: "/"}>< TwitterIcon  className='icon twitter'/></Link>
                <Link className="link" to={twitterUrl? twitterUrl: "/"}>< FacebookIcon  className='icon facebook'/></Link>
            </div>
        </div>

    </div>
  )
}

export default User