import React, {Component} from 'react';
import Clicker from './Clicker';

class AppContainer extends Component{
    constructor(props){
        super(props);
        //Use this.state top set the initial value of numberOfClicks to 0
        this.state = {
            numberOfClicks: 0
         }
    }
    //Create a call back function that we can reference under the button listener inside of our child component
    updateNumber = () =>{
        //Update the value of state by adding 1 when this function is called in the child when the button is pressed
        this.setState({numberOfClicks : this.state.numberOfClicks + 1})
    }
    //Render a fragment to be merged into the DOM
    render(){
        return(
            <div>
                {/* Create a label that will show the number of times you have clicked the button */}
                <h2>You clicked the button {this.state.numberOfClicks} times</h2>
                {/* Run the child component inside of the parent/ call the function above and put it under a new variable that can be seen by the child component */}
                <Clicker updateNumber = {this.updateNumber}/>
            </div>
        )
    }
}

export default AppContainer;