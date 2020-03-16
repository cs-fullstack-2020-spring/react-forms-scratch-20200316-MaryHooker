import React,{Component} from 'react';

class Clicker extends Component{
    constructor(props){
        super(props);
        // this.state = {}
    }
    // //Create a function that will run when the button is clicked/ Event Listener
    // buttonClicked = () => {
    //     //Call the function from the parent container
    //     this.props.updateNumber();
    // }

    render(){
        return(
            <div>
               {/* Could have used above function as well and called it inside the button*/}
               {/* Used this.props.to pull down the function inside of the new variable established inside of this child componentthat was called in the parent*/}
                <button onClick = {this.props.updateNumber}>Click Me!</button>
            </div>
        )
    }
}

export default Clicker;