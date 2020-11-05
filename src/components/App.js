import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import YouTube from '../apis/YouTube'
import VideosList from './VideosList'
import VideoDetails from './VideoDetails'

class App extends Component{
    state={Videos:[] ,selectedVideo:null}
    
    componentDidMount(){
        this.onSearchSubmit('buildings')
    }
    
    
    onSearchSubmit = async (term)=>{
      const response = await YouTube.get('/search',{
       params:{
           q:term
           }

      });
      
       this.setState ({Videos:response.data.items,
                        selectedVideo:response.data.items[0]
                        });
     
    };

    onSelectedVideo=(Video)=>{
        this.setState ({selectedVideo:Video});
    }
    
    
    render(){
        return (
            <div className="ui container">
             <SearchBar onSubmit={this.onSearchSubmit}/>
              <div className="ui grid">
              <div className="ui row">
              <div className="eleven wide column">
              <VideoDetails
              selectedVideo={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
               <VideosList
               Videos={this.state.Videos} 
               onSelectedVideo={this.onSelectedVideo}
            />
            </div>
            </div>
            </div>
            </div>
        ) 
    }
}

export default App;