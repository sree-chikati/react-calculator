import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import Result from './Result';
import KeyPad from "./KeyPad";
import Footer from './Footer'

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <Title />
                <div className="banner">
                    <div>
                        <h1>Simple Calculator created using React</h1>
                        <p>Remeber to press "C" to clear the output entering a new equation.</p>
                        <Result result={this.state.result}/>
                        <KeyPad onClick={this.onClick}/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
