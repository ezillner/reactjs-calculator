import React from 'react';
import './App.css';
import { ButtonLayout } from './components/button-layout';

class App extends React.Component {

  constructor(props){
    super (props);
    this.state = {
      input:"",
      previousNumber:0,
      operator:"",
      total:0

    };
    //ADD BINDING FUNCTIONS HERE
    this.addToInput=this.addToInput.bind(this);
    this.add=this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.divide=this.divide.bind(this);
    this.multiply=this.multiply.bind(this);
    this.equals=this.equals.bind(this);
    this.clear=this.clear.bind(this);
  }

  addToInput(val){
    this.setState({
      input: this.state.input + val
    })
  }


  add(){
   if(this.state.input === ""){
     this.setState({
       operator: "plus"
     })
    }else {
    //this.state.previousNumber = this.state.input;
    //this.state.total= parseFloat(this.state.total) + parseFloat(this.state.previousNumber);
    //this.state.operator = "plus"
    this.setState(
      {
      previousNumber: this.state.input,
      total: parseInt(this.state.total) + parseInt(this.state.input),
      input: "",
      operator : "plus"
      }, ()=> { 
      //console.log(this.state.total)
      
    //console.log("this is total: "+this.state.total);
    //console.log(this.state.previousNumber);
    //console.log(this.state.operator);
      });
    }
  }

  subtract(){
    if (this.state.input ===""){
      this.setState({
        operator: "minus"
      })
    } else {
    //this.state.previousNumber = this.state.input;
    //this.state.total= parseFloat(this.state.total) - parseFloat(this.state.previousNumber);
    //this.state.operator = "minus"
    this.setState({
      previousNumber: this.state.input,
      input: "",
      total: parseFloat(this.state.input) - parseFloat(this.state.total),
      operator: "minus"
      })
    }
  }

  multiply(){
    if (this.state.total === 0){
      this.setState({
        total: parseFloat(this.state.input),
        input: "",
        operator:"multiply"
      
      }, ()=> { 
        console.log(this.state.total)
      });
    }else if (this.state.input=== "") {
      this.setState({
        operator:"multiply"
      })
    }else {
    //this.state.previousNumber = this.state.input;
    //this.state.total= parseFloat(this.state.total) * parseFloat(this.state.previousNumber);
    //this.state.operator = "multiply"
    this.setState({
      previousNumber: this.state.input,
      input: "",
      total: parseFloat(this.state.total) * parseFloat(this.state.input),
      oeprator: "multiply"
      })
    }
  }

  divide(){
    if (this.state.total === 0){
      this.setState({
        total: this.state.input
      })
    } else if(this.state.input==="") {
      this.setState({
        operator: "divide"
      })
    } else {
      this.setState({
        previousNumber: this.state.input,
        total: parseFloat(this.state.total) / parseFloat(this.state.input)
      })
    }
    this.setState({
      //previousNumber: this.state.input,
      input:"",
      //total: parseFloat(this.state.total) / parseFloat(this.state.previousNumber),
      operator:"divide"
    })
  }

  equals(){
    this.setState({
      previousNumber: this.state.input
    })
    ///this.setState({
      ///previousNumber: this.state.input, 
    ///})
    if (this.state.operator === "plus"){
      this.setState({
        total: parseFloat(this.state.total) + parseFloat(this.state.input)
      })
    } else if (this.state.operator === "minus"){
      this.setState({
        total: parseFloat(this.state.total) - parseFloat(this.state.input)
      })
    } else if (this.state.operator==="multiply"){
      this.setState ({
        total: parseFloat(this.state.total) * parseFloat(this.state.input)
      })
    } else if (this.state.operator==="divide"){
      this.setState({
        total: parseFloat(this.state.total) / parseFloat(this.state.input)
      })
    }
  
    this.setState({
      input: "",
      operator: "equals"
    })
  }

  clear(){
    this.setState({
      input:"",
      previousNumber:0,
      currentNumber:0,
      operator:"",
      total:0
    })
  }

  /*symbol (){
    if (this.state.operator==="plus"){
      return ("hello")
    }
  }*/

  render() {
    return (
      <div>
        <ButtonLayout  
          userInput={this.addToInput}
          inputBox={this.state.input}
          add={this.add}
          multiply={this.multiply}
          subtract={this.subtract}
          divide={this.divide}
          equals={this.equals}
          total = {this.state.total}
          clear = {this.clear}
          symbol = {this.symbol}
          />
      </div>
    );
  }
}

export default App;
