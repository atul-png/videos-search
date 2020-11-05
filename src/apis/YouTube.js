import axios from 'axios'

const KEY='AIzaSyCcFBaYz9v6WYUM8mLXxTB7dZitCyF8lEs'

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
       part:'snippet',
       maxResults:5,
       key:KEY

    }





});