import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../utilities/devTo';
import ArticleCard from '../components/ArticleCard';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import { useEffect, useState } from 'react';
export default function Blog(props: any) {
    console.log(props);
    return (
        <>
            <BlogContainer>
                <h1>My blogposts</h1>
                {props.blogPosts.length > 0 ? (
                    <BlogList>
                        {props.blogPosts.map((element: any, index: number) => {
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

const BlogContainer = styled.div`
    ${mixins.flexColumn}
    justify-content: center;
    width: 100%;
`;
const BlogList = styled.ul``;
const BlogListItem = styled.li`
    list-style: none;
    padding-left: none;
`;
