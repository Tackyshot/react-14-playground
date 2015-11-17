import request      from 'superagent'
import alt          from '../alt.jsx';

class NameActions{
    get(callback){

        return (dispatch)=> {
            request
                .get('/api/names')
                .set('Accept', 'application/json')
                .end((err, res)=> {
                    console.log("GET RESPONSE", res);
                    dispatch(JSON.parse(res.text).names);
                    callback();
                });
        }
    }

    create(name, callback){

        console.log("CREATE!!");
        return (dispatch)=>{
            request
                .post('/api/names')
                .send({
                    name: name
                })
                .set('Accept', 'application/json')
                .end((err, res)=>{
                    dispatch(JSON.parse(res.text).names);
                    callback();
                });
        }
    }

}

export default alt.createActions(NameActions);