import React from 'react';
import '../index.css'
const lightMachine = {
  Green:{
    LIGHT: 'Yellow'
  },
  Yellow:{
    LIGHT: 'Red'
  },
  Red:{
    LIGHT: 'Green'
  }
}

let currentLightState = 'Green';
let property = 'ui secondary button';
let font = 'fontGreen'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          light: 'Green'    //initial value
        };
      }

    transition(state, action){
      currentLightState = this.state.light
      const nextLightState =  lightMachine[currentLightState][action]
      this.setState({light: nextLightState})
    }
    update(State){
      switch(State){
        case 'Green':
          this.transition(State,'LIGHT')
          break;
        case 'Yellow':
          this.transition(State,'LIGHT')
          break;
        case 'Red':
          this.transition(State,'LIGHT')
          break;
        default:
          break;
    }
  }
  changeColor(state){
    console.log(currentLightState)
        if (this.state.light === 'Green'){
          property = 'ui red button';
          font = 'fontYellow';
          
        } else if (this.state.light === 'Yellow'){
          property = 'ui green button';
          font = 'fontRed';
    
        } else {
          property = 'ui yellow button';
          font = 'fontGreen';
         
        }
      }
    

    onHandleClick(){
      this.update(currentLightState);
      this.changeColor(this.state.light);
    };
  


    render(){
      
      
        return(            
            <div className= "container" >
              <h1> Stop Light Simulator! </h1>
              <div classname= 'button'>
              <button onClick={this.onHandleClick.bind(this)} className={property}>
                Change the Light!
              </button>
              </div>
              <div className = {font} >
                {this.state.light}
              </div>
            </div>
            );
        }
    }

export default App;