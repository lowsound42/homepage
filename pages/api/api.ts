import IEmailPayload from "../../interfaces/IEmailPayload";

export const getPost = async(payload:IEmailPayload)=> {
  console.log('HERE!!!!', process.env.NEXT_PUBLIC_EMAIL_URL)
  const rawResponse = await fetch(
    `${process.env.NEXT_PUBLIC_EMAIL_URL}`, //hosted on heroku
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
    });
    const content = await rawResponse;
    return content;
}
