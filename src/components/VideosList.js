import React from 'react'
import VideoItem from './VideoItem'
const VideosList=({Videos,onSelectedVideo})=>{
  const renderdList = Videos.map((Video)=>{

     return (
         <div>
             <VideoItem Video={Video} onSelectedVideo={onSelectedVideo}/>
         </div>
     )
    }
  )
  return <div className='ui relaxed divided list'>{renderdList}</div>
  }


      
  


  export default VideosList