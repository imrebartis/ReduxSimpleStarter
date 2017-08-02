import React from 'react';

// ({video}) is identical to declaring inside of VideoListItem
// const video = props.video; (= the argument has a property called video,
// please declare a new variable called video
const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
//   console.log(video);

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;