"use strict";
import React        from 'react';

import NameModifier from './NameModifier.jsx';

export default class HelloWorld extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state = {
            name: this.props.name || "David"
        };

        //binds custom methods 'this' to the component 'this'
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    getDefaultProps(){

    }

    componentWillMount(){

    }

    shouldComponentUpdate(nextProps, nextState){
        return ((nextProps !== this.props) || (nextState !== this.state)) ? true : false;
    }

    componentWillReceiveProps(nextProps){

    }

    componentWillUpdate(){

    }

    render(){

        //only ever return a single dom Node (single set of root level closing and ending tags)
        return(
            <div>
                <p>Hello, {this.state.name}</p>
                <NameModifier onBlur={this.handleNameChange} />
            </div>
        )

    }

    componentDidUpdate(){

    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    handleNameChange(e){

        this.setState({
            name: e.target.value
        });
    }
}