import './VideoItem.css'

import React from 'react'


const VideoItem =({Video,onSelectedVideo})=>{
     return(
         <div onClick={()=>onSelectedVideo(Video)} className="video-item item" >
           
             <img className="ui image" src={Video.snippet.thumbnails.medium.url}/> 
            <div className="content">
               <div className="header"> {Video.snippet.title}
               </div>
            </div>
            
            
         </div>
     )
 }


export default VideoItem;