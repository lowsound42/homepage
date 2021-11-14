import styled from 'styled-components';
import { device } from '../styles/mediaQueryHelpers';
import mixins from '../styles/mixins';
import ICommits from '../interfaces/ICommits';
import { GoMarkGithub } from 'react-icons/go';
import helpers from '../utilities/simpleHelpers';
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
            <GitDesc>
                The most recent work I do on public facing repos shows up here
            </GitDesc>
            <InnerContainer>
                <IconContainer>
                    <GoMarkGithub size={40} />
                    <GitHeader>GitHub Activity</GitHeader>
                </IconContainer>
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
                        <span>Take a look at the repo </span>
                        <GitLink href={`https://github.com/${userRepo}`}>
                            here
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
`;

const UrlPara = styled.p`
    word-wrap: break-word;
    align-self: center;
    font-family: monospace;
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
    font-family: monospace;
    font-size: 1rem;
    margin-top: 0rem;
`;
const GitTitle = styled.h5`
    margin-bottom: 0.25rem;
    margin-top: 0rem;
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

const GitDesc = styled.div`
    font-family: monospace;
    margin-bottom: 2rem;
`;

const GitHeader = styled.h3`
    margin-left: 1rem;
`;

const CommitIntro = styled.span``;

const GitLink = styled.a`
    color: blue;
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
    border: 1px solid black;
    border-radius: 20px;
    padding: 1rem 1rem;
`;

const IconContainer = styled.div`
    ${mixins.flexRow}
    justify-content: flex-start;
    margin-bottom: 0rem;
`;
