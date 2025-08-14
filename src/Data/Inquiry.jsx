import Init from '../Init/Init';
import { getFormattedDatetime, responseFormat } from '../Util/Util';
import api from './API';

const pathList = {
    submitInquiry: '/inquiry/',
}

export const submitInquiry = async (
    email,
    service
) => {
    try {
        const response = await api.postCall(pathList.submitInquiry, null, {
            email,
            service: parseInt(service)
        });

        return response;
    } catch(e) {
        return responseFormat(-1, 'Failed to submit inquiry!');
    }
};