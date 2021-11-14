import IEmailPayload from '../interfaces/IEmailPayload';
import { getPost } from '../pages/api/api';
import validateEmail from './validateEmail';
const emailCall = async (payload: IEmailPayload) => {
    try {
        const validated = await validateEmail(payload);
        let apiResponse = await getPost(payload);

        return apiResponse;
    } catch (err) {
        console.log(err);
    }
};

export default emailCall;
