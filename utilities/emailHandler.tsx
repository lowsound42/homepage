import IEmailPayload from '../interfaces/IEmailPayload';
import { getPost } from '../pages/api/api';
const emailCall = (payload: IEmailPayload) => {
    return (async () => {
        try {
            const apiResponse = getPost(payload);
            return apiResponse;
        } catch (err) {
            console.log(err);
        }
    })();
};

export default emailCall;
