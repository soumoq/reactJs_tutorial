import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }
    }
    
    click(){
        this.setState({
            message:'good bye'
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>

                <button onClick={this.click.bind(this)}>
                    click
                </button>

            </div>
        )
    }
}

export default EventBind
