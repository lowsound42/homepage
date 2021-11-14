import IEmailPayload from '../interfaces/IEmailPayload';
import { getPost } from '../pages/api/api';
const validateEmail = async (payload: IEmailPayload) => {
    return 200;
};

export default validateEmail;
