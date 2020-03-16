import React,{Component} from 'react';
import ReactForm from './ReactForm.jsx'

class AppContainer extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div>
              <ReactForm/>  
            </div>
        )
    }
}

export default AppContainer;