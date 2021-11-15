import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import IArticle from '../../interfaces/IArticle';
import { getAllPosts, getArticleFromCache } from '../../utilities/devTo';
const cacheFile = './blogcache.json';
import ReactMarkdown from 'react-markdown';
import { unified } from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
interface IParams extends ParsedUrlQuery {
    slug: string;
}

const Post = (article: IArticle) => {
    return (
        <>
            <Image src={article.cover_image} width="200" height="200" />
            <h3>{article.title}</h3>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.body_markdown}
            </ReactMarkdown>
        </>
    );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams;
    const buf = fs.readFileSync(cacheFile);

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
