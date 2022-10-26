import React, { Component } from 'react';

class Main extends  Component {
    state = {
        counter: 100,
    };

    addOneHandler = () => {
        this.setState({counter: this.state.counter + 1});
    };
    render () {
    return (
        <main>
            <div className='counter-display'>
            <h1 className='counter'>{this.state.counter}</h1>
            </div>
            <div className='btn-display'>
            <button className='btn'>Add Five</button>
            <button onClick={this.addOneHandler} className='btn'>Add One</button>
            <button className='btn'>Reset</button>
            <button className='btn'>Remove One</button>
            <button className='btn'>Remove Five</button>
            </div>
        </main>
    );
    }
  };

  export default Main;