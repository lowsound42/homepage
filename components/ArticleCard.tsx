import styled from 'styled-components';
import mixins from '../styles/mixins';
import { device } from '../styles/mediaQueryHelpers';

interface IArticleProps {
    title: string;
    time: string;
    description: string;
}
const ArticleCard = ({ title, time, description }: IArticleProps) => {
    return (
        <ArticleContainer>
            <h3>{title}</h3>
            <DatePara>{new Date(time).toLocaleString('en-GB')}</DatePara>
            <p>{description}</p>
            <ReadMore className="readButtonHolder">Read More</ReadMore>
        </ArticleContainer>
    );
};
export default ArticleCard;

const ArticleContainer = styled.div`
    ${mixins.flexColumn}
    justify-content: center;
    align-items: flex-start;
`;

const DatePara = styled.div`
    font-size: 0.8rem;
    margin-top: -1rem;
`;

const ReadMore = styled.div``;
