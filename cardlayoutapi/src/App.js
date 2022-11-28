import React,{useState} from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Loading.... </h1>
        </div>
      );
    return (    
      items.map((item) => (
      <div className="container is-fluid" style={{ height: "75vh" }}>
          <div className="notification">
            <div className="card">
            <div className="card-content">
              <div className="media" style={{ alignItems: "center" }}>
                <div
                  className="media-left"
                  style={{
                    borderRight: "2px solid rgba(10, 10, 10, 0.2)"
                  }}
                >
                  <figure>
                    <img
                      src={item.avatar_url}
                    />
                  </figure>
                </div>
                <div>
                  <p>
                    ID: {item.id}{" "}
                  </p>
                  <p>
                    NAME: {item.login}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      ))
    );
  }
  componentDidMount() {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      }); 
  } 
}

export default App;
