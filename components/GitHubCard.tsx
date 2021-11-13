import styled from 'styled-components';
import { device } from '../styles/mediaQueryHelpers';
import mixins from '../styles/mixins';
import ICommits from '../interfaces/ICommits';
import { GoMarkGithub } from 'react-icons/go';
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
        <OuterContainer>
            <IconContainer>
                <GoMarkGithub size={40} />
            </IconContainer>
            <GitContainer>
                <GitTitle>My most recent commit</GitTitle>
                <GitTime>{new Date(commitTime).toLocaleString()}</GitTime>
                <GitMessage>
                    <CommitIntro>
                        Commit Message
                        {userCommits
                            ? `: ${userCommits.message}`
                            : `: ${createdEvent}`}
                    </CommitIntro>
                </GitMessage>
                <UrlPara>
                    <span>Take a look at the repo </span>
                    <GitLink href={`https://github.com/${userRepo}`}>
                        here
                    </GitLink>
                </UrlPara>
            </GitContainer>
        </OuterContainer>
    );
};
export default GitHubCard;

const UrlPara = styled.p`
    word-wrap: break-word;
    font-family: monospace;
    margin-top: 0.5rem;
    @media ${device.mobileS} {
        font-size: 1rem;
    }
`;
const GitContainer = styled.div`
    ${mixins.flexColumn}
    align-items: flex-start;
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
    @media ${device.mobileS} {
        font-size: 1rem;
    }
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
const OuterContainer = styled.div`
    @media ${device.mobileS} {
        width: 95%;
    }
    ${mixins.flexRow}
    @media ${device.laptop} {
        width: 30%;
    }
    border: 1px solid black;
    border-radius: 20px;
`;

const IconContainer = styled.div``;
