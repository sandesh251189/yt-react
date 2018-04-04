import React,{Component} from 'react';

const VideioListItem = (props)=>{
const video=props.video;
const onVideoSelect=props.onVideoSelect;
const imageUrl=props.video.snippet.thumbnails.default.url;

  return(
    <li onClick={() => onVideoSelect(video)}  className="list-group-item">

      <div className="media">
   <div className="media-left">
    <img src={imageUrl} />
   </div>
   <div className="media-body">
     <h6 className="media-heading">{props.video.snippet.title}</h6>

   </div>
 </div>
    </li>
  )
}

export default VideioListItem;
