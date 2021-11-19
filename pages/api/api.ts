import IEmailPayload from "../../interfaces/IEmailPayload";

export const getPost = async(payload:IEmailPayload)=> {
    try{
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
    }catch (err){
        console.log(err)  
    }
}

import IArticle from '../../interfaces/IArticle';
export const getAllPosts = () => {
    return (async () => {
        const response = await fetch(
            'https://dev.to/api/articles/me/published',
            {
                method: 'GET',
                headers: {
                    'api-key': `${process.env.NEXT_PUBLIC_DEV_TO_API_KEY}`
                }
            }
        );
        const data = await response.json();
        return data;
    })();
};

export const getArticleFromCache = (
    cache: IArticle[],
    slug: string
): IArticle => {
    const article = cache.find(
        (cachedArticle) => cachedArticle.slug === slug
    ) as IArticle;
    return article;
};



export const getComments = async(id:number)=> {
    try{
        const rawResponse = await fetch(
            `https://dev.to/api/comments?a_id=900281`, 
            {
                method: 'GET',
            });
            const content = await rawResponse.json();
            return content;
    }catch (err){
        console.log(err)  
    }
}

