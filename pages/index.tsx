import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import IGithubEvent from "../interfaces/IGithubEvent";
import ICommits from "../interfaces/ICommits";
import IArticle from "../interfaces/IArticle";
import styled from "styled-components";
import helpers from "../utilities/simpleHelpers";
import { device } from "../styles/mediaQueryHelpers";
import mixins from "../styles/mixins";
import GitHubCard from "../components/GitHubCard";
import UserContext from "../context/UserContext";
import AboutHero from "../components/AboutHero";
import { motion } from "framer-motion";

const fakeCommit: ICommits = {
  author: { email: "o.khandxb@gmail.com", name: "Omar Khan" },
  distinct: true,
  message:
    "I guess I haven't made a commit in a while! Email me at o.khandxb@gmail.com and tell me I suck.",
  sha: "fakesha",
  url: "https://github.com/lowsound42",
};

interface IProps {
  data: { blogPosts: IArticle[] };
}

export default function Home(props: IProps) {
  const [userCommits, setUserCommits] = useState<ICommits>(fakeCommit);
  const [commitTime, setCommitTime] = useState<string>("");
  const [userRepo, setUserRepo] = useState<string>("");
  const [createdEvent, setCreatedEvent] = useState<string>("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getCommits = async () => {
      const response = await fetch(
        `https://api.github.com/users/lowsound42/events`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      const found = data.find(
        (object: IGithubEvent) =>
          object.type === "PushEvent" || object.type === "CreateEvent"
      );
      found.type === "PushEvent"
        ? setUserCommits(found.payload.commits[0])
        : setCreatedEvent("New repo created");
      setCommitTime(found.created_at);
      setUserRepo(helpers.extractGithubUrl(found.repo.url));
    };
    getCommits();
  }, []);
  return (
    <>
      <Head>
        <title>GetOmar</title>
      </Head>
      <HomeContainer>
        <AboutHero />
        <hr
          style={{
            borderTop: "1px solid black ",
            marginLeft: 20,
            marginRight: 20,
            width: "60%",
          }}
        />
        <GitHubCard
          commitTime={commitTime}
          userCommits={userCommits}
          userRepo={userRepo}
          createdEvent={createdEvent}
        />
        <hr
          style={{
            borderTop: "1px solid black ",
            marginLeft: 20,
            marginRight: 20,
            width: "60%",
          }}
        />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  @media ${device.mobileS} {
    ${mixins.flexColumn};
  }
  font-family: "Space Mono";
  margin-bottom: 10rem;
  @media ${device.mobileS} {
    ${mixins.flexColumn};
  }
  @media ${device.laptop} {
    margin-top: 5rem;
  }
`;
