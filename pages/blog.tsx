import Link from 'next/link';
import IArticle from '../interfaces/IArticle';
import ArticleCard from '../components/ArticleCard';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import { device } from '../styles/mediaQueryHelpers';
import { getAllPosts } from '../utilities/devTo';
import { motion } from 'framer-motion';
interface IProps {
    data: { blogPosts: IArticle[] };
}
export default function Blog(props: IProps) {
    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.4
                        }
                    }
                }}
            >
                <BlogContainer>
                    <BlogHolder>
                        <BlogHeader>Thoughts and stuff</BlogHeader>
                        {props.data.blogPosts.length > 0 ? (
                            <BlogList>
                                {props.data.blogPosts.map(
                                    (element: IArticle, index: number) => {
                                        if (element.tag_list.includes('blog')) {
                                            return (
                                                <Link
                                                    key={index}
                                                    href={`/post/${element.slug}`}
                                                    passHref
                                                >
                                                    <BlogListItem>
                                                        <ArticleCard
                                                            title={
                                                                element.title
                                                            }
                                                            time={
                                                                element.published_timestamp
                                                            }
                                                            description={
                                                                element.description
                                                            }
                                                        ></ArticleCard>
                                                    </BlogListItem>
                                                </Link>
                                            );
                                        }
                                    }
                                )}
                            </BlogList>
                        ) : (
                            <p>I haven&#8217;t written anything yet 😬</p>
                        )}
                    </BlogHolder>
                </BlogContainer>
            </motion.div>
        </>
    );
}

export async function getServerSideProps(context: any) {
    const blogPosts = await getAllPosts();

    return {
        props: {
            data: {
                blogPosts: blogPosts
            }
        }
    };
}

const BlogHeader = styled.h1`
    font-family: 'Space Grotesk';
    font-weight: 700;
    font-size: 2rem;
`;

const BlogHolder = styled.div``;

const BlogContainer = styled.div`
    ${mixins.flexColumn}
    margin-top: 5rem;
    @media ${device.laptop} {
        margin-top: 10rem;
    }
`;
const BlogList = styled.ul`
    padding-left: 0rem;
    margin-top: 3rem;
`;
const BlogListItem = styled.li`
    list-style: none;
`;
