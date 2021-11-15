import styled from 'styled-components';

interface IArticleProps {
    title: string;
    time: string;
    description: string;
}
const ArticleCard = ({ title, time, description }: IArticleProps) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{new Date(time).toLocaleString('en-GB')}</p>
            <p>{description}</p>
            <ReadMore>Read More</ReadMore>
        </>
    );
};
export default ArticleCard;

const ReadMore = styled.p`
    &:hover {
        cursor: pointer;
    }
`;
