import Link from 'next/link';
import IArticle from '../interfaces/IArticle';
import ArticleCard from '../components/ArticleCard';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import { device } from '../styles/mediaQueryHelpers';
import { getAllPosts } from '../utilities/devTo';
interface IProps {
    data: { blogPosts: IArticle[] };
}
export default function Blog(props: IProps) {
    return (
        <>
            <BlogContainer>
                <BlogHolder>
                    <BlogHeader>My blogposts</BlogHeader>
                    {props.data.blogPosts.length > 0 ? (
                        <BlogList>
                            {props.data.blogPosts.map(
                                (element: any, index: number) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={`/post/${element.slug}`}
                                            passHref
                                        >
                                            <BlogListItem>
                                                <ArticleCard
                                                    title={element.title}
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
                            )}
                        </BlogList>
                    ) : (
                        <p>I haven&#8217;t written anything yet 😬</p>
                    )}
                </BlogHolder>
            </BlogContainer>
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
    font-size: 2.5rem;
`;

const BlogHolder = styled.div`
    @media ${device.laptop} {
        margin-left: 10rem;
    }
`;

const BlogContainer = styled.div`
    ${mixins.flexColumn}
    width: 70%;
`;
const BlogList = styled.ul`
    padding-left: 0rem;
`;
const BlogListItem = styled.li`
    list-style: none;
`;
