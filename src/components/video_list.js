import React,{Component} from 'react';
import VideioListItem from './video_list_item'
const VideioList = (props)=>{
  var videiosList =  props.videos.map((video)=>{
        return <VideioListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag} />
      })
  
  return(
    <ul className="list-group col-md-4">{videiosList}</ul>
  )
}

export default VideioList;
