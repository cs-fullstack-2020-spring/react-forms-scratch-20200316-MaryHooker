import React, { Component } from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
       
    }
    
    //Update state when new data entered
    newEntryChanged = (event) => {
        this.setState(
            {   //Event is called from parameter/target gives you the reference of the property that is firing the event which is the input tag in the html/ then we are referencing the value property inside the input field
                name: event.target.value
            }
        )

    }



    // //Got a reference to the input by giving it an id
    // myElement = document.getElementById('myField');

   

    render() {

        console.log(this.state.name);
        
        return (
            <div>
                <h1>Form Stuff</h1>
                {/* use a fieldset to hold the form */}
                <fieldset>
                    <legend>Enter New Entry</legend>
                    {/* When the form is initialized it will set itself to the current state */}
                    {/* value is a property you use to reference what is going to be inside of the input*/}
                    <input id='myField' onChange={this.newEntryChanged} type="text" value={this.state.name} />

                </fieldset>
            </div>
        )
    }
}

export default ReactForm;