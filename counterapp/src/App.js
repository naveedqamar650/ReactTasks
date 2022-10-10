import { Component } from 'react';
import './App.css'
class main extends Component {
  constructor(props) {
    super(props)
    this.state = {

      name: "COUNTER APP",
      number: 0
    }

  }
  render() {
    return (
      <div>
        <div className='Heading' >
          <h2>{this.state.name}</h2>
          </div>
        <div>
        <p>{this.state.number}</p>
        <div>
        </div>
        <div>
       <button onClick={() => this.AddNumber()} >
        Increment
       </button>
       <button onClick={() => this.SubNumber()} >
        Decrement
       </button>
       <button onClick={() => this.ResetNumber()} >
        Reset
       </button>
       </div>
        </div>  
      </div>
    );
  }

  AddNumber() {
    this.setState({
      number: this.state.number + 1

    })

  }
  SubNumber() {
    this.setState({
      number: this.state.number - 1

    })

  }
  ResetNumber() {
    this.setState({
      number: this.state.number = 0

    })

  }
}

export default main
