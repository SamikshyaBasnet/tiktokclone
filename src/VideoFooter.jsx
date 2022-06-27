import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, song }) => {
    return (
        <div className='videoFooter'>
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className='videoFooter__icon' />
                    <p className='videoFooter_ticker'>{song}</p>
                    {/* <Ticker mode="smooth">
                        {({ i }) => (
                            <>
                                <h1>This is the Headline of element!</h1>
                                <img src="www.my-image-source.com/" alt="" />
                            </>
                        )}
                    </Ticker> */}
                </div>

            </div>
            <img
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
                className="videoFooter_record" />
        </div>
    )
}

export default VideoFooter