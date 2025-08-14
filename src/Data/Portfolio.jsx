import Init from "../Init/Init";
import api from "./API";

const pathList = {
    list: '/portfolio/',
}

export const getPortfolio = async () => {
    // return products;
    const response = await api.getCall(pathList.list, null, {});

    return response;
}