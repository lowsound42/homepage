import IArticle from '../interfaces/IArticle';
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
            <p>Read More</p>
        </>
    );
};
export default ArticleCard;
