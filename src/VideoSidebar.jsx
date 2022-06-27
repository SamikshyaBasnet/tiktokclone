import React from 'react'
import './VideoSidebar.css';
import { FavoriteBorderOutlined, FavoriteOutlined, Message, Share } from "@material-ui/icons";
import { useState } from 'react';


const VideoSidebar = ({ likes, shares, messages }) => {
    const [liked, setLiked] = useState(false)
    return (
        <div className='videoSidebar'>
            <div className="videoSidebar__button">
                {liked ? (<FavoriteOutlined fontSize="large"
                    onClick={(e) => setLiked(false)}
                />)
                    : (
                        <FavoriteBorderOutlined fontSize='large'
                            onClick={(e) => setLiked(true)}
                        />
                    )}
                <p>{liked ? likes : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <Message fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <Share fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar