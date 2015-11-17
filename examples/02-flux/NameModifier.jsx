import React from 'react';


export default class NameModifier extends React.Component{
    constructor(props, state){
        super(props, state);
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="Change your name here" onBlur={this.props.onBlur}/> {/*onBlur Event handler fires when element loses focus*/}
                <input type="submit" name="submit" id="submit"/>
            </div>
        )
    }
}