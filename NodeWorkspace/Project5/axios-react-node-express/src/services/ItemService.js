import axios from 'axios';


class ItemService {

    constructor(){
        this.apiUrl = "http://localhost:5225/items";
    }

    findAll = (okCallBack,errCallBack) => {
        axios.get(this.apiUrl).then(okCallBack,errCallBack);
    }

    findById = (id,okCallBack,errCallBack) => {
        axios.get(`${this.apiUrl}/${id}`).then(okCallBack,errCallBack);
    }

    add = (item,okCallBack,errCallBack) => {
        axios.post(this.apiUrl,item).then(okCallBack,errCallBack);
    }

    delete = (id,okCallBack,errCallBack) => {
        axios.delete(`${this.apiUrl}/${id}`).then(okCallBack,errCallBack);
    }
}
 const itemService = new ItemService();

 export default itemService;
