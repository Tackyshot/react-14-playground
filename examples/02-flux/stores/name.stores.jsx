import alt          from '../alt.jsx';
import NameActions  from '../actions/name.actions.jsx';

class NameStore{
    constructor(){
        this.bindListeners({
            set: [NameActions.get, NameActions.create]
        });

        this.state = {
            names: []
        }
    }

    set(names){

        console.log("NAMES", names);

        this.setState({
            names: names
        })
    }
}

export default alt.createStore(NameStore);