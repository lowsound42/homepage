import IEmailPayload from '../interfaces/IEmailPayload';
const validateEmail = async (payload: IEmailPayload) => {
    let returnMessage = 0;

    if (payload.email !== payload.confirmEmail) {
        returnMessage = 1;
    } else if (payload.message.length === 0) {
        returnMessage = 2;
    } else if (
        payload.email === payload.confirmEmail &&
        payload.message.length > 0
    ) {
        returnMessage = 200;
    }
    return returnMessage;
};

export default validateEmail;
