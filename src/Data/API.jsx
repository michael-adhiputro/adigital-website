import axios from 'axios';
import {
    serializedURL,
    createRequestHash
} from '../Util/Util';

const availableMethod = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
};

const apiCall = async (argPath, argMethod, argParam, argRequest, argToken) => {
    const apiUrl = process.env.REACT_APP_API_URL + argPath.replace(':param', argParam);
    let response = {};
    let serializedRequest = '';

    const createdHash = createRequestHash(argRequest);
    argRequest.hash = createdHash;

    try {
        if(argMethod === availableMethod.get) {
            serializedRequest = serializedURL(argRequest);
            let constructedUrl = `${apiUrl}?${serializedRequest}`;

            response = await axios.request({
                url: constructedUrl,
                headers: { 
                    'Authorization': argToken,
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': true
                },
                method: availableMethod.get,
            });
        } else {
            response = await axios.request({
                url: `${apiUrl}`,
                headers: { 
                    'Authorization': argToken,
                    'Content-Type': 'application/json'
                },
                method: argMethod,
                data: argRequest
            });
        }

        return response.data;
    } catch(e) {
        // console.log(e.toString());
    }

}

const getCall = async (argPath = '', argParam = null, argRequest = {}, argToken = '') => {
    if(argPath === '') return false;

    for(let key in argRequest) {
        let value = argRequest[key];

        if(typeof value === 'object' || typeof value === 'array') {
            value = JSON.stringify(value);
        }

        argRequest[key] = value;
    }

    return await apiCall(argPath, availableMethod.get, argParam, argRequest, argToken);
}

const postCall = async (argPath = '', argParam = null, argRequest = {}, argToken = '') => {
    if(argPath === '') return false;

    for(let key in argRequest) {
        let value = argRequest[key];

        if(typeof value === 'object' || typeof value === 'array') {
            value = JSON.stringify(value);
        }

        argRequest[key] = value;
    }

    return await apiCall(argPath, availableMethod.post, argParam, argRequest, argToken);
}

const putCall = async (argPath = '', argParam = null, argRequest = {}, argToken = '') => {
    if(argPath === '') return false;

    for(let key in argRequest) {
        let value = argRequest[key];

        if(typeof value === 'object' || typeof value === 'array') {
            value = JSON.stringify(value);
        }

        argRequest[key] = value;
    }

    return await apiCall(argPath, availableMethod.put, argParam, argRequest, argToken);
}

const deleteCall = async (argPath = '', argParam = null, argRequest = {}, argToken = '') => {
    if(argPath === '') return false;

    return await apiCall(argPath, availableMethod.delete, argParam, argRequest, argToken);
}

const api = {
    getCall,
    postCall,
    putCall,
    deleteCall
};

export default api;