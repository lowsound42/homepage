import fs from "fs";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import IArticle from "../../interfaces/IArticle";
import { getAllPosts, getArticleFromCache } from "../api/api";
const cacheFile = "./blogcache.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import styled from "styled-components";
import { device } from "../../styles/mediaQueryHelpers";
import Link from "next/link";
import mixins from "../../styles/mixins";
import Head from "next/head";
interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Post = (article: IArticle) => {
  return (
    <>
      <Head>
        <title>Project Details</title>
      </Head>
      <PostContainer>
        {article.cover_image !== null ? (
          <Image
            src={article.cover_image}
            width="100%"
            height="100%"
            alt="cover image for blog post"
          />
        ) : null}
        <h3>{article.title}</h3>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.body_markdown}
        </ReactMarkdown>
        <Link href={`/projects`} passHref>
          <div className="backButtonHolder">Go back to projects</div>
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
  margin-bottom: 10rem;
  font-family: "Space Mono";
  @media ${device.laptop} {
    width: 50%;
    margin: 0 auto;
    margin-top: 7rem;
    margin-bottom: 10rem;
  }
`;
