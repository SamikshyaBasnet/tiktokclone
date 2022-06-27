
import './App.css';
import Video from './Video';
import { useEffect } from 'react';
import axios from "./axios"
import { useState } from 'react';

function App() {

  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data)

      return response;
    }
    fetchPosts();
  }, []);
  console.log("videons", videos);
  return (

    // React firebase hosting material ui flexbox 3rd party ticker 
    //node js express mongodb hosting on heroku mongoose

    <div className="app">
      <div className="app__videos">

        {videos.map(video => (
          <Video
            url={video.url}
            channel={video.channel}
            song={video.song}
            messages={video.messages}
            shares={video.shares}
            description={video.description}
            likes={video.likes}
          />
        ))};

      </div>
    </div>
  );
}

export default App;
