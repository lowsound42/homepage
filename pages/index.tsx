import Head from 'next/head';
import { useEffect, useState, useContext } from 'react';
import IGithubEvent from '../interfaces/IGithubEvent';
import ICommits from '../interfaces/ICommits';
import styled from 'styled-components';
import extractGithubUrl from '../utilities/simpleHelpers';
import { device } from '../styles/mediaQueryHelpers';
import mixins from '../styles/mixins';
import GitHubCard from '../components/GitHubCard';
import UserContext from '../context/UserContext';
import TweetEmbed from 'react-tweet-embed';

const fakeCommit: ICommits = {
    author: { email: 'o.khandxb@gmail.com', name: 'Omar Khan' },
    distinct: true,
    message:
        "I guess I haven't made a commit in a while! Email me at o.khandxb@gmail.com and tell me I suck.",
    sha: 'fakesha',
    url: 'https://github.com/lowsound42'
};

export default function Home(props: any) {
    console.log(props);
    const [userCommits, setUserCommits] = useState<ICommits>(fakeCommit);
    const [commitTime, setCommitTime] = useState<string>('');
    const [userRepo, setUserRepo] = useState<string>('');
    const [createdEvent, setCreatedEvent] = useState<string>('');
    const { user } = useContext(UserContext);

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
                <GitHubCard
                    commitTime={commitTime}
                    userCommits={userCommits}
                    userRepo={userRepo}
                    createdEvent={createdEvent}
                />
                <TweetContainer>
                    <h3>Most recent Twitter nonsense</h3>
                    <DIV>
                        <TweetEmbed
                            className="tweetBox"
                            id={props.data.tweets[0].id}
                            options={{ width: '550px' }}
                        />
                    </DIV>
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
        props: {
            data: { tweets: tweets, selectedTweet: selectedTweet }
        }
    };
}

const HomeContainer = styled.div`
    ${mixins.flexColumn};
`;

const TweetContainer = styled(HomeContainer)`
    align-items: center;
`;
const DIV = styled.div`
    width: 100%;
`;
