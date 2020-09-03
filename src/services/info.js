import axios from 'axios';

class Info{
    static all() {
        return axios.get('https://api.myjson.com/bins/18rx45').then(resp => resp.data)
    }
}

export default Info;