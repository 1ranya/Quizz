import React, { Component } from 'react'
import Questions from "../Questions"

export default class Questionssection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            next: 0
        }

        //this.handleEvent = this.handleEvent.bind(this)
    }
    // changeQuestion = () =>{ 
    //     var next = this.state.next
    //     next++
    //     this.setState({next})
    // }
    // componentDidUpdate(prevProps){
    //     const next = this.props
    //     if(next != prevProps.next)
    //         console.log("update ", prevProps)
    // }
    static getDerivedStateFromProps(props, state) {
        if (props.next !== state.next) {
            return {
            next: props.next,
            };
        }
        // Return null if the state hasn't changed
        return null;
        }
    
        componentDidUpdate(prevProps, prevState) {
        if (this.props.next !== prevProps.next) {
            console.log("updated ", this.props.next)
        }
    }

    render(){
        const {next, changeQuestion} = this.props
        const questionsLength = Questions.length
        console.log("Questions ", next)
        return (                    
            <div className="hero-body">
                <div className="container has-text-centered" onClick={changeQuestion}>
                    <div className="card">
                        <div className="card-content">
                            {next < questionsLength ? 
                                <div>
                                <div className="title questionTitle">
                                    {Questions[next].action}
                                </div>
                                <div className="questionsSub">
                                    {Questions[next].question}
                                </div>
                                </div> :
                                <div className="cheersBlock">
                                    <p className="title cheersMessage">
                                        We are done it was amazing , right?
                                    </p>
                                    <img className="cheersImg" src="https://files1.theloop.com.au/1301375_cheersgif.gif?t=project-image"
                                        alt="Grapefruit slice atop a pile of other slices"
                                    />
                                </div> 
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
    )
    }
    
}
