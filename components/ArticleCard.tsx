import IArticle from '../interfaces/IArticle';
interface IArticleProps {
    title: string;
    description: string;
}
const ArticleCard = ({ title, description }: IArticleProps) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
        </>
    );
};
export default ArticleCard;
