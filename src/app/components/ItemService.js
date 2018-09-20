// ItemService.js

import axios from 'axios';

class ItemService {

    sendData(data) {
        axios.post('api/items/add', {
            item: data
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}

export default ItemService;