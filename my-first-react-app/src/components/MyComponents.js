import React, {Component} from 'react';
import './MyComponents.css';


class MyComponents extends Component {

    state = {
        count: 0
        //num: "1"
    };

    increaseCount = () => {
        console.log("increaseed");
        console.log(this.state.count);
        this.setState({count: this.state.count + 1});

    };

    divStyle = {
        fontSize:"50px"
    }

    render(){

        let myVar = "my var"

        return <div className = "MyClass" style = {{fontSize: this.state.count + "px"}}  >This is my component
                    And my name is {this.props.name}
                     <br/> also my variable is {myVar}
                     <br/> and my child is {this.props.children}
                     <br/> and my count is {this.state.count}
                     <br/> and my num is {this.state.num}
                     <br/>
                        <button onClick={ () => this.increaseCount() } >increase count </button>   </div>;
      }
}


export default MyComponents;