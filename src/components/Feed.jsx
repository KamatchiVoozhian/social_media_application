import SearchFeed from './SearchFeed';
import Post from './Post';
import axios from 'axios'
import React,{useEffect,useState} from 'react'

function Feed() {
  let container = {
    width: '100%',
    height: '50%' ,

  }
 
  

  var favoritemovie = sessionStorage.getItem("result");
  const values = JSON.parse(favoritemovie);

 console.log(values);
  return (
   
    <div style={container}>
    {values.map((user) => (
       <Post
       img={user.content}
       name={user.username}
       text={user.caption}/>
      ))}
      
    </div>
  );

}
export default Feed;