import React, { useRef, useState } from 'react'
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({ url, channel, song, description, likes, shares, messages }) => {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoPlaying = () => {
        //if video is playing stop it
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
        //else play it
    }
    return (
        <div className='video'>
            <video
                loop
                ref={videoRef}
                className='video__player'
                src={url}
                id="autoplay"
                typeof='video/mp4'
                onClick={handleVideoPlaying}
            >
            </video>
            <VideoFooter channel={channel} song={song}
                description={description}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video