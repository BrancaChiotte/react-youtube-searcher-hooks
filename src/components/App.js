import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('mastering react');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: '50px' }}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;




// longer way
// const onVideoSelect = (video) => {
//   setSelectedVideo(video);
// };
//...
// <div className="five wide column">
//   <VideoDetail onVideoSelect={setSelectedVideo} videos={videos} />
// </div>



//short way
// cut the function and provid inline
//..
// <div className="five wide column">
//   <VideoDetail onVideoSelect={(video) => setSelectedVideo(video)} videos={videos}/>
// </div>


//more shorter way
// cut the function and provid inline
//..
// <div className="five wide column">
//   <VideoDetail onVideoSelect={setSelectedVideo} videos={videos}/>
// </div>

