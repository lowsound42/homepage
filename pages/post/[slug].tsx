import fs from "fs";
import Head from "next/head";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import IArticle from "../../interfaces/IArticle";
import { getAllPosts, getArticleFromCache } from "../api/api";
import { getComments } from "../api/api";
const cacheFile = "./blogcache.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import styled from "styled-components";
import { device } from "../../styles/mediaQueryHelpers";
import Link from "next/link";
import mixins from "../../styles/mixins";
import { useEffect, useState } from "react";
interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface IComment {
  body_html: string;
  created_at: string;
  user: { name: string };
}

const Post = (article: IArticle) => {
  const [comment, setComment] = useState<IComment[]>();

  useEffect(() => {
    getComments(article.id).then((result) => {
      setComment(result);
    });
  }, [article.id]);
  return (
    <>
      <Head>
        <title>Blog Post</title>
      </Head>
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
        {/* {comment !== undefined ? <div>Comments</div> : null}
        {comment !== undefined
          ? comment.map((item, index) => {
              return (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: item.body_html,
                  }}
                ></div>
              );
            })
          : null} */}
        <Link href={`/blog`} passHref>
          <div className="backButtonHolder">Go back to blogs</div>
        </Link>
      </PostContainer>
    </>
  );
};

export default Post;

// Huge thank you to James Wallis over at https://wallis.dev/ for writing such detailed posts about how he built his home page.
// This bottom part is me just pilfering that but it helped me really understand how to use getStaticPaths and getStaticProps.

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const blogCache = fs.readFileSync(
    path.join(process.cwd(), cacheFile),
    "utf-8"
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
      params: { slug },
    };
  });

  return { paths, fallback: false };
};

const PostContainer = styled.div`
  ${mixins.flexColumn}
  align-items:flex-start;
  padding: 0.5rem 2rem;
  margin-top: 5rem;
  font-family: "Space Mono";
  margin-bottom: 10rem;
  @media ${device.laptop} {
    width: 50%;
    margin: 0 auto;
    margin-top: 7rem;
    margin-bottom: 10rem;
  }
`;
