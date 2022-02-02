import React from 'react';

let result_demo = "";

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
        let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
 // headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
    'Accept': 'application/json',
 //'Access-Control-Allow-Origin': 'http://localhost:8080'
}, 
};
      fetch("https://myapp.appprogint.workers.dev/posts",requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
           
        //    console.log(JSON.stringify(result))
            
            sessionStorage.setItem("result", JSON.stringify(result));
           // console.log(window.result_demo);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  
  
  export default MyComponent;