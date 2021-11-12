import IEmailPayload from '../interfaces/IEmailPayload';
import { getPost } from '../pages/api/api';
const emailCall = (payload: IEmailPayload) => {
    return (async () => {
        const apiResponse = getPost(payload);

        return apiResponse;
    })();
};

export default emailCall;
