"use strict";
import React        from 'react';

import NameModifier from './NameModifier.jsx';
import NameActions  from './actions/name.actions.jsx';
import NameStore    from './stores/name.stores.jsx';

export default class HelloWorld extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state = {
            name: []
        };

        //binds custom methods 'this' to the component 'this'
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    getDefaultProps(){

    }

    componentWillMount(){

        NameActions.get(()=>{
            this.setState({
                name: NameStore.getState().names
            });
        });

    }

    shouldComponentUpdate(nextProps, nextState){
        return ((nextProps !== this.props) || (nextState !== this.state)) ? true : false;
    }

    render(){

        console.log("NAME", this.state.name);

        //only ever return a single dom Node (single set of root level closing and ending tags)
        return(
            <div>
                {this.state.name.map((name)=>{

                    return(
                        <p>Hello, {name}</p>
                    )
                })}

                <NameModifier onBlur={this.handleNameChange} />
            </div>
        )

    }

    handleNameChange(e){

        NameActions.create(e.target.value, ()=>{
            this.setState({
                name: NameStore.getState().names
            });
        });

    }
}