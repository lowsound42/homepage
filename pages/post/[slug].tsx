import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import IArticle from '../../interfaces/IArticle';
import { getAllPosts, getArticleFromCache } from '../../utilities/devTo';
const cacheFile = './blogcache.json';
import ReactMarkdown from 'react-markdown';
import { unlink } from 'fs/promises';

interface IParams extends ParsedUrlQuery {
    slug: string;
}

const Post = (article: IArticle) => {
    return (
        <>
            <h3>{article.title}</h3>
            <ReactMarkdown>{article.body_markdown}</ReactMarkdown>
        </>
    );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams;
    const blogCache = fs.readFileSync(
        path.join(process.cwd(), cacheFile),
        'utf-8'
    );
    const cache = JSON.parse(blogCache);

    const article: IArticle = await getArticleFromCache(cache, slug);
    return { props: article };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getAllPosts();
    fs.writeFileSync(path.join(process.cwd(), cacheFile), JSON.stringify(data));

    const paths = data.map(({ slug }: IParams) => {
        return {
            params: { slug }
        };
    });

    return { paths, fallback: false };
};
