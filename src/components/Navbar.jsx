import React from 'react';
import Bio from './Bio';
function Navbar() {
  let floatRight = {
    float: 'right'
  }
  let buttonStyles = {
    padding: '10px 10px 10px 10px',
    backgroundColor: 'white',
    width: '100px'  }
  let searchbarStyles = {
    height: '30px',
    marginRight: '40px',
    paddingLeft: '15px',
    width: '200px'
  }
  let borderRadius = {
    borderRadius: '15px 15px 15px 15px',
    border: '2px solid #34abef'
  }

  async function post() {
  
    let formData = new FormData();           
    formData.append("content", fileupload.files[0]);
    console.log(formData);
    await fetch('https://myapp.appprogint.workers.dev/posts', {
      method: "POST", 
      body: formData
    });    
    alert('The file has been uploaded successfully.');
    //window.open("http://www.your-site.com/images/picture.jpg", "Window Title", "width=700, height=750");
  }

  return (
    <div>
      <nav>
      <input id="fileupload" type="file" name="fileupload" />
        <button style={buttonStyles} onClick={post}>POST</button>
        <button style={buttonStyles}>Notifications</button>
        <button style={buttonStyles}>Messages</button>
        <div style={floatRight}>
          <input style={Object.assign({}, searchbarStyles, borderRadius)} type="text" placeholder="Search"/>
          <button style={Object.assign({}, buttonStyles, borderRadius)}>Something</button>
        </div>
      </nav>
      <hr/>
    </div>
  );
}

export default Navbar;