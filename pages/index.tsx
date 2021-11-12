import Head from 'next/head';
import { useEffect, useState } from 'react';
import IGithubEvent from '../interfaces/IGithubEvent';
import ICommits from '../interfaces/ICommits';
import styled from 'styled-components';
import extractGithubUrl from '../utilities/simpleHelpers';
import { device } from '../styles/mediaQueryHelpers';
import flexColumn from '../styles/mixins';
export default function Home(props: any) {
    const [userCommits, setUserCommits] = useState<ICommits>();
    const [commitTime, setCommitTime] = useState<string>('');
    const [userRepo, setUserRepo] = useState<string>('');
    const [createdEvent, setCreatedEvent] = useState<string>('');

    useEffect(() => {
        const getCommits = async () => {
            const response = await fetch(
                `https://api.github.com/users/lowsound42/events`,
                {
                    method: 'GET'
                }
            );
            const data = await response.json();
            const found = data.find(
                (object: IGithubEvent) =>
                    object.type === 'PushEvent' || object.type === 'CreateEvent'
            );
            found.type === 'PushEvent'
                ? setUserCommits(found.payload.commits[0])
                : setCreatedEvent('New repo created');
            setCommitTime(found.created_at);
            setUserRepo(extractGithubUrl(found.repo.url));
        };
        getCommits();
    }, []);
    return (
        <div>
            <Head>
                <title>GetOmar</title>
                <meta charSet="utf-8" />
                <meta name="keywords" content="web-development, programming" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <HomeContainer>
                <GitContainer>
                    <GitTitle>My most recent commit</GitTitle>
                    <GitTime>{new Date(commitTime).toLocaleString()}</GitTime>
                    <GitMessage>
                        {userCommits ? userCommits.message : createdEvent}
                    </GitMessage>
                    <UrlPara>
                        <span>Check the repo out </span>
                        <a href={`https://github.com/${userRepo}`}>here</a>
                    </UrlPara>
                </GitContainer>
                <TweetContainer>
                    <h3>Latest Tweet</h3>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{
                            __html: props.data.selectedTweet.html
                        }}
                    ></div>
                </TweetContainer>
            </HomeContainer>
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const res = await fetch(
        'https://api.twitter.com/2/users/1589913914/tweets',
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`
            }
        }
    );
    const allTweets = await res.json();
    const tweets = allTweets.data.filter(
        (obj: any) => obj.text.slice(0, 2) !== 'RT'
    );

    const embedFetch = await fetch(
        `https://publish.twitter.com/oembed?url=https://twitter.com/twitter/status/${tweets[0].id}`,
        {
            method: 'GET'
        }
    );
    const selectedTweet = await embedFetch.json();
    if (!allTweets) {
        return {
            notFound: true
        };
    }

    return {
        props: { data: { tweets: tweets, selectedTweet: selectedTweet } }
    };
}

const UrlPara = styled.p`
    word-wrap: break-word;
`;
const HomeContainer = styled.div`
    ${flexColumn}
`;

const GitContainer = styled(HomeContainer)``;
const TweetContainer = styled(HomeContainer)``;
const GitTime = styled.p`
    font-family: monospace;
    font-size: 1rem;
    margin-top: 0rem;
`;
const GitTitle = styled.h4`
    margin-bottom: 0rem;
`;
const GitMessage = styled.p`
    margin-top: 0rem;
    font-size: 1.2rem;
    font-family: monospace;
`;
