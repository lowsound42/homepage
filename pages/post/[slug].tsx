import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import IArticle from '../../interfaces/IArticle';
import { getAllPosts, getArticleFromCache } from '../../utilities/devTo';
const cacheFile = './blogcache.json';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../../styles/mediaQueryHelpers';
import Link from 'next/link';
import mixins from '../../styles/mixins';
import { motion } from 'framer-motion';
interface IParams extends ParsedUrlQuery {
    slug: string;
}

const Post = (article: IArticle) => {
    return (
        <motion.div animate={{ x: 0 }} transition={{ delay: 2 }}>
            <PostContainer>
                {article.cover_image !== null ? (
                    <Image
                        src={article.cover_image}
                        width="200"
                        height="200"
                        alt="cover image for blog post"
                    />
                ) : null}
                <h3>{article.title}</h3>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {article.body_markdown}
                </ReactMarkdown>
                <Link href={`/blog`} passHref>
                    <div className="backButtonHolder">Go back to blogs</div>
                </Link>
            </PostContainer>
        </motion.div>
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

const PostContainer = styled.div`
    ${mixins.flexColumn}
    align-items:flex-start;
    margin-top: 5rem;
    font-family: 'Space Mono';
    @media ${device.laptop} {
        width: 50%;
        margin: 0 auto;
        margin-top: 7rem;
    }
`;
