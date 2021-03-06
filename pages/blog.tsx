import Link from "next/link";
import Head from "next/head";
import IArticle from "../interfaces/IArticle";
import ArticleCard from "../components/ArticleCard";
import styled from "styled-components";
import mixins from "../styles/mixins";
import { device } from "../styles/mediaQueryHelpers";
import { getAllPosts } from "./api/api";
interface IProps {
  data: { blogPosts: IArticle[] };
}
export default function Blog(props: IProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <BlogContainer>
        <BlogHolder>
          <BlogHeader>Thoughts and stuff</BlogHeader>
          {props.data.blogPosts.length > 0 ? (
            <BlogList>
              {props.data.blogPosts.map((element: IArticle, index: number) => {
                // only pick articles with the blog tag, we do the same for projects
                if (element.tag_list.includes("blog")) {
                  return (
                    <ItemContainer key={index}>
                      <Link href={`/post/${element.slug}`} passHref>
                        <BlogListItem>
                          <ArticleCard
                            title={element.title}
                            time={element.published_timestamp}
                            description={element.description}
                          ></ArticleCard>
                        </BlogListItem>
                      </Link>
                    </ItemContainer>
                  );
                }
              })}
            </BlogList>
          ) : (
            <p>I haven&#8217;t written anything yet 😬</p>
          )}
        </BlogHolder>
      </BlogContainer>
    </>
  );
}

export async function getStaticProps(context: any) {
  const blogPosts = await getAllPosts();

  return {
    props: {
      data: {
        blogPosts: blogPosts,
      },
    },
  };
}

const BlogHeader = styled.h1`
  font-family: "Space Grotesk";
  font-weight: 700;
  font-size: 2rem;
`;
const ItemContainer = styled.div`
  margin-bottom: 2rem;
`;

const BlogHolder = styled.div``;

const BlogContainer = styled.div`
  ${mixins.flexColumn}
  font-family: 'Space Mono';
  margin: 0 auto;
  margin-top: 8rem;
  width: 80%;
  margin-bottom: 10rem;
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.laptop} {
    margin-top: 10rem;
    width: 40%;
  }
`;
const BlogList = styled.ul`
  padding-left: 0rem;
  margin-top: 3rem;
`;
const BlogListItem = styled.li`
  list-style: none;
`;
