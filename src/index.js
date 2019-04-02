import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component{
    constructor(props){
        super(props);

        this.state = { lat: null, errorMessage: ''};

    }

    componentDidMount(){
        console.log('Did Mount: When');
        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat: position.coords.latitude}),
            (err)=>this.setState({errorMessage: err.message})
        );
    }
    componentDidUpdate(){
        console.log('Update Mount: When');
    }

    renderContent(){
        console.log('Render: When');
       if(this.state.errorMessage && !this.state.lat){
           return <div>Error: {this.state.errorMessage}</div>
       }else if(!this.state.errorMessage && this.state.lat){
           return <SeasonDisplay lat={this.state.lat}/>
       }
        return <Spinner message="Accept location request"/>
    }
    render(){
        return this.renderContent();
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)