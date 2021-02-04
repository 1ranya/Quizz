import React, { Component } from 'react'

export default class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div className="hero-body">
            <div className="container ">
                <div className="card chartCard">
                    <div className="card-content opacity">
                        <p className="title chartTitle has-text-centered">
                            BEFORE STARTING 
                        </p> 
                        <p className="trait"></p>
                        <br/>
                        <p className="subtitle has-text-centered chartSub">
                        <ion-icon name="pin-outline" size="small"></ion-icon>
                         Choose the type of questions : Timed or Not
                        </p>
                        <p className="subtitle has-text-centered chartSub">
                        <ion-icon name="pin-outline" size="small"></ion-icon> 
                         To pass the question, click on the area
                        </p>
                        <p className="subtitle has-text-centered chartSub">
                        <ion-icon name="pin-outline" size="small"></ion-icon> 
                         The questions are 10 seconds timed      
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
