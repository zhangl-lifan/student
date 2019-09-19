import axios from "axios";
import request from "../utils/request"

export let classList = async() => {
    return await request.get('/emstu/class/lists');
}

export let classAdd = () => {
    return axios.put('/emstu/class/create');
}