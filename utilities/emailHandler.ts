import IEmailPayload from '../interfaces/IEmailPayload';
import { getPost } from '../pages/api/api';
import validateEmail from './validateEmail';
const emailCall = async (payload: IEmailPayload) => {
    try {
        let emailResponse = 500;
        let apiResponse;
        const validated = await validateEmail(payload);
        if (validated === 200) {
            apiResponse = await getPost(payload);
            emailResponse = apiResponse?.status || 500;
        } else {
            emailResponse = 500;
        }

        let returnValue = {
            errorMessage: validated,
            emailResponse: emailResponse
        };
        return returnValue;
    } catch (err) {
        console.log(err);
    }
};

export default emailCall;
