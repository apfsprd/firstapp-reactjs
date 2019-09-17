import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';

// STATE
// class Timer extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       time : props.start
//     }
//   }

  // Lifecycle
//   componentDidMount() {
//     this.addInterval = setInterval( () => this.increase(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.addinterval)
//   }

//   increase() {
//     this.setState((state, props) => ({
//       time : parseInt(state.time) + 1
//     }));
//   }

//   render() {
//     return (
//       <div> {this.state.time} Detik </div>
//     )
//   }

// }

// function Clicker() {
//   function handleClick(e) {
//     alert('Berhasil diklik!')
//     e.preventDefault()
//   }

//   return (
//     <a href="#" onClick={handleClick}> Klik disini! </a>
//   )

// }

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      todoItem : '',
      items : []
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, this.state.todoItem],
      todoItem : ''
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItem : event.target.value
    })
  }

  // constructor(props) {
  //   super(props) 
  //   this.state = {
  //     items : []
  //     isLoading : True
  //   }
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(data => this.setState({items: data, isLoading : False}))
  // }
  
  render() {
    const {items, isLoading} = this.state

    if(isLoading) {
      return <p>Loading . . .</p>
    }

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <Timer start="0"/> */}
      //     <Clicker/>
      //   </header>
      // </div>
      
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange}/>
          <button>Add</button>
        </form>

        <List items = {this.state.items}/>
      </div>

      // <div>
      //   <ul>
      //     {items.map((item, index) => 
      //       <li key={index}> {item.name} </li>)}
      //   </ul>
      // </div>
    );
  }
}

export default App;
