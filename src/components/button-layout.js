import React from 'react';
import PropTypes from 'prop-types';

export class ButtonLayout extends React.Component {
    render(){
        return (
            <div className="button-layout">
                <div id= 'input-box' className="input-box">
                    <input type="text" id='input' value={this.props.inputBox}
                        onChange = {(e) => this.props.userInput(e.target.value)} />
                </div>
                <div className="total-box">
                    {this.props.symbol}
                    {this.props.total}
                </div>
                <div id="first-row">
                    <button onClick = {()=> this.props.userInput(7)} className="button">7</button>
                    <button onClick = {()=> this.props.userInput(8)} className="button">8</button>
                    <button onClick = {()=> this.props.userInput(9)} className="button">9</button>
                    <button onClick = {()=> this.props.divide()} className="op-button">/</button>
                </div>
                <div id="second-row">
                    <button onClick = {()=> this.props.userInput(4)} className="button">4</button>
                    <button onClick = {()=> this.props.userInput(5)} className="button">5</button>
                    <button onClick = {()=> this.props.userInput(6)} className="button">6</button>
                    <button onClick = {()=> this.props.subtract()} className="op-button">-</button>
                </div>
                <div id="third-row">
                    <button onClick = {()=> this.props.userInput(1)} className="button">1</button>
                    <button onClick = {()=> this.props.userInput(2)} className="button">2</button>
                    <button onClick = {()=> this.props.userInput(3)} className="button">3</button>
                    <button onClick = {()=> this.props.add()} className="op-button">+</button>
                </div>
                <div id="fourth-row">
                    <button onClick = {()=> this.props.userInput(0)} className="button">0</button>
                    <button onClick = {()=> this.props.userInput(".")} className="button">.</button>
                    <button onClick = {()=> this.props.equals()} className="equal-button">=</button>
                    <button onClick = {()=> this.props.multiply()} className="op-button">x</button>
                </div>
                <div>
                    <button onClick = {()=> this.props.clear()} className="clear-button">Clear</button>
                </div>
            </div>

        );
    }
}
