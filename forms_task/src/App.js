import { Component } from 'react';
import './App.css';
import Form from './Form';
import View from './View';
import Popup from './Popup';

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone_number: "",
    role: "",
    message: "",
    showpopup: false
  }

  getValues = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  getSubmit = (e) => {
    this.setState({
      showpopup: true
    });
  };




  render () {
   

    return (
      <div>
      <Form onChange={this.getValues} onClick={this.getSubmit}/>
      <View 
      firstname={this.state.firstname}
      lastname={this.state.lastname}
      phone_number={this.state.phone_number}
      role={this.state.role}
      message={this.state.message}
      />

      <Popup  
      showpopup={this.state.showpopup}
      />
     </div>
    );
  };
};

export default App;
