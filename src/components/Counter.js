import React, { Component } from 'react'
class Counter extends Component {

    constructor() {
        super()
        this.state = {
            mystate: true,
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }



    render() {
        return (<div>
            <div>count - {this.state.count}</div>
            <button onClick={() => this.increment()}>Increment</button>
            <br></br>
            <button onClick={() => this.decrement()}>Decrement</button>
        </div>)
    }
}

export default Counter;