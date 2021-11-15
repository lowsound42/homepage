import IArticle from '../interfaces/IArticle';
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
