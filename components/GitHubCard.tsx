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
    return (
        <OuterContainer>
            <GitIntro>Creep my GitHub</GitIntro>
            <GitDesc>
                The most recent work I do on public facing repos shows up here
            </GitDesc>
            <InnerContainer>
                <GitContainer>
                    <GitTitle>Most recent commit</GitTitle>
                    <GitTime>
                        {new Date(commitTime).toLocaleString('en-GB')}
                    </GitTime>
                    <GitMessage>
                        <CommitIntro>
                            <b>Commit Message</b>
                            {userCommits
                                ? `: ${userCommits.message}`
                                : `: ${createdEvent}`}
                        </CommitIntro>
                    </GitMessage>
                    <UrlPara>
                        <span>Take a look at </span>
                        <GitLink
                            className="hereLink"
                            target="_blank"
                            rel="noreferrer"
                            href={`https://github.com/${userRepo}`}
                        >
                            the repo
                        </GitLink>
                    </UrlPara>
                </GitContainer>
            </InnerContainer>
        </OuterContainer>
    );
};
export default GitHubCard;

const OuterContainer = styled.div`
    ${mixins.flexColumn}
    width:100%;
    margin-top: 2rem;
    margin-bottom: 6rem;
`;

const UrlPara = styled.p`
    word-wrap: break-word;
    align-self: center;
    margin-top: 1.5rem;
    @media ${device.mobileS} {
        font-size: 1rem;
    }
`;
const GitContainer = styled.div`
    ${mixins.flexColumn}
    align-items: flex-start;
`;
const GitTime = styled.p`
    font-size: 1rem;
    margin-top: 0rem;
`;
const GitTitle = styled.h3`
    margin-bottom: 0.25rem;
    margin-top: 0rem;
`;
const GitMessage = styled.p`
    margin-top: 0rem;
    font-size: 1.2rem;
    margin-bottom: 0rem;
    @media ${device.mobileS} {
        font-size: 1rem;
    }
`;

const GitIntro = styled.h2`
    text-align: center;
`;

const GitDesc = styled.div`
    margin-bottom: 2rem;
    text-align: center;
`;

const CommitIntro = styled.span`
    font-size: 1rem;
`;

const GitLink = styled.a`
    &:hover {
        cursor: pointer;
    }
`;
const InnerContainer = styled.div`
    @media ${device.mobileS} {
        width: 85%;
    }
    @media ${device.mobileL} {
        width: 75%;
    }
    @media ${device.tablet} {
        width: 50%;
    }
    @media ${device.laptop} {
        width: 40%;
    }
    @media ${device.laptopL} {
        width: 30%;
    }
    border: 1px solid #696969;
    border-radius: 5px;
    padding: 1rem 1rem;
`;
