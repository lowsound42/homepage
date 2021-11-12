import styled from 'styled-components';
import { device } from '../styles/mediaQueryHelpers';
import flexColumn from '../styles/mixins';
import ICommits from '../interfaces/ICommits';

interface IProps {
    commitTime: string;
    userCommits: ICommits;
    userRepo: string;
    createdEvent: string;
}

const GitHubCard = ({
    commitTime,
    userCommits,
    userRepo,
    createdEvent
}: IProps) => {
    console.log(userCommits);
    return (
        <GitContainer>
            <GitTitle>My most recent commit</GitTitle>
            <GitTime>{new Date(commitTime).toLocaleString()}</GitTime>
            <GitMessage>
                <CommitIntro>Commit Message</CommitIntro>
                {userCommits ? `: ${userCommits.message}` : `: ${createdEvent}`}
            </GitMessage>
            <UrlPara>
                <span>Take a look at the repo </span>
                <GitLink href={`https://github.com/${userRepo}`}>here</GitLink>
            </UrlPara>
        </GitContainer>
    );
};
export default GitHubCard;

const UrlPara = styled.p`
    word-wrap: break-word;
    font-family: monospace;
    margin-top: 0.5rem;
`;
const GitContainer = styled.div`
    ${flexColumn}
`;
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
    margin-bottom: 0rem;
`;

const CommitIntro = styled.span`
    text-decoration: underline;
`;

const GitLink = styled.a`
    color: blue;
    &:hover {
        cursor: pointer;
    }
`;
