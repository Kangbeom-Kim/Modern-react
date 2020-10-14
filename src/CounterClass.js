import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };

        this.onPlusNum = this.onPlusNum.bind(this);
        this.onMinusNum = this.onMinusNum.bind(this);
    }
    onPlusNum() { // JS정식 문법은 아니지만, CRA에서는 바로 사용할 수 있게 되어있다.
        this.setState(state => ({
           counter: state.counter + 1
        }));
    }
    onMinusNum() { 
        this.setState(state => ({
            counter: state.counter - 1
        }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.onPlusNum}>+1</button>
                <button onClick={this.onMinusNum}>-1</button>
            </div>
        );
    }
}

export default CounterClass;