import React from 'react';
import VideoCard from './VideoCard'; // Certifique-se de que o caminho está correto
import Api from '../Api';

Api.getVideos().then(videos => console.log(videos));


const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
