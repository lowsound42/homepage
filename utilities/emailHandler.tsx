import IEmailPayload from '../interfaces/IEmailPayload';
const emailCall = (payload: IEmailPayload, url: any) => {
    console.log(url);
    return (async () => {
        const rawResponse = await fetch(
            `${url}`, //hosted on heroku
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: payload.email,
                    message: payload.message
                })
            }
        );
        const content = await rawResponse;
        return content;
    })();
};

export default emailCall;
