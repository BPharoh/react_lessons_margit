import React, { Component } from 'react';
import Button from './UI/Button';

class Main extends  Component {
    state = {
        counter: 0,
        styles: { backgroundColor: 'white' },
    };

    
    addOneHandler = () => {
        this.setState({counter: this.state.counter +1});
    };

    addFiveHandler = () => {
        this.setState({counter: this.state.counter +5});
    };

    resetHandler = () => {
        this.setState({counter: this.state.counter = 0});
    };

    removeOneHandler = () => {
        if (this.state.counter < 0) {
            this.setState({counter: this.state.counter = 0});
        } else if (this.state.counter > 0) {
            this.setState({counter: this.state.counter - 1});
        } 
    };

    removeFiveHandler = () => {
        if (this.state.counter < 0) {
            this.setState({counter: this.state.counter = 0});
        } else if (this.state.counter > 0) {
            this.setState({counter: this.state.counter - 5});
        } 
    };


    render () {
        let circleClass = "";

        this.state.counter === 0
        ? (circleClass = "circle")
        : (this.state.counter % 2 === 0)
        ? (circleClass = "circle even")
        : (circleClass = "circle odd");
    return (
        <main>
            <div className='counter-display'>
            <h1 className={circleClass}>{this.state.counter}</h1>
            </div>
            <div className='btn-display'>
                <Button click={this.addFiveHandler}>+5</Button>
                <Button click={this.addOneHandler}>+1</Button>
                <Button click={this.resetHandler}>Reset</Button>
                <Button click={this.removeFiveHandler}>-5</Button>
                <Button click={this.removeOneHandler}>-1</Button>

            {/* <button onClick={this.addFiveHandler} className='btn'>Add Five</button>
            <button onClick={this.addOneHandler} className='btn'>Add One</button>
            <button onClick={this.resetHandler}   className='btn'>Reset</button>
            <button onClick={this.removeOneHandler} className='btn'>Remove One</button>
            <button onClick={this.removeFiveHandler} className='btn'>Remove Five</button>  */}
            </div>
        </main>
    );
    }
  };

  export default Main;