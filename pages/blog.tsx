import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../utilities/devTo';
import ArticleCard from '../components/ArticleCard';
import styled from 'styled-components';
import mixins from '../styles/mixins';
export default function Blog({ data }: any) {
    console.log(data);
    return (
        <>
            <Head>
                <title>GetOmar | Blog</title>
                <meta charSet="utf-8" />
                <meta name="keywords" content="web-development, programming" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <BlogContainer>
                <h1>My blogposts</h1>
                {data.length > 0 ? (
                    <BlogList>
                        {data.map((element: any, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    href={`/post/${element.slug}`}
                                    passHref
                                >
                                    <BlogListItem>
                                        <ArticleCard
                                            title={element.title}
                                            description={element.description}
                                        ></ArticleCard>
                                    </BlogListItem>
                                </Link>
                            );
                        })}
                    </BlogList>
                ) : (
                    <p>I haven&#8217;t written anything yet 😬</p>
                )}
            </BlogContainer>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getAllPosts();

    return {
        props: { data }
    };
};

const BlogContainer = styled.div`
    ${mixins.flexColumn}
    width: 100%;
`;
const BlogList = styled.ul``;
const BlogListItem = styled.li`
    list-style: none;
    padding-left: none;
`;
