import React from "react";
import SingleComments from "./SingleComments";
import AddFriend from "./AddFriend";
import {createRoot} from 'react-dom/client';
import hemisphereDisplay from "./hemisphere";

class App extends React.Component{

    // constructor(props) {
    //     super(props)
        
    //     this.state = { latitude: null }
    // }
    state = { latitude:null , error: '' };
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude:position.coords.latitude })
        },
            (error) => {
                this.setState({error:error.message})
            }
        );
    }
   
    render() {
       
        return(
            <div>
                <div>
                <hemisphereDisplay latitude={this.state.latitude}/>
                {this.state.error}
                </div>
                
            <div className="ui comments">
                <AddFriend>
                    <SingleComments name="saaswath"/>
                </AddFriend>
                
                <SingleComments name="upendran"/>
            </div>
            
            </div>
        ) 
            
            
        
    }
    
}

// ReactDOM.render(
//     <App/>,
//     document.querySelector('#root')
// )
const container = document.getElementById('app')
const root = createRoot(container);
root.render(<App/>);