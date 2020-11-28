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
        this.setState((prvState)=>({
            count:prvState.count+1
        }))
    }

    incrementfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

    decrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            }, () => { 
                console.log(this.state.count);
            })
        }
    }



    render() {
        return (<div>
            <div>count - {this.state.count}</div>
            <button onClick={() => this.incrementfive()}>Increment</button>
            <br></br>
            <button onClick={() => this.decrement()}>Decrement</button>
        </div>)
    }
}

export default Counter;