import React, {Component} from 'react';
import axios from 'axios';

class MyDataComponents extends Component {

    state = {
            count: 10,
            elements: []
        };
    componentDidMount(){

        console.log("data component mounted");
        this.retrieveData();
    }

    retrieveData(){
    axios.get('https://jsonplaceholder.typicode.com/todos/' + this.state.count).then((result) => {
                console.log(result.data);
                let currentElement = [...this.state.elements];  //copy of the array
                currentElement.push(result.data);
                this.setState({count: this.state.count + 1, elements: currentElement});
            });
    }
    render(){

        let myTableData = this.state.elements.map((element, elIndex)  =>{
            return <tr key ={elIndex} >
            <td>{element.id}</td>
            <td>{element.title}</td>

            </tr>;
        });

        let myTable = <table border="1">
        <thead>
        <tr>
            <th> ID </th>
            <th> Title </th>
            </tr>
            </thead>
        <tbody>
            {myTableData}
        </tbody>
        </table>;

        return <div> This is my data component
            <br/>
            <button onClick= { () => this.retrieveData()}>retrieve next data</button>
            <br/>
            {myTable}
        </div>;
    }


}

export default MyDataComponents;