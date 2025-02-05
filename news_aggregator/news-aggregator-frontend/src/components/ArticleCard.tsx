import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    translated_content: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Card className="mb-4 shadow-lg">
      <Card.Body>
        <Card.Title className="font-semibold text-xl">{article.title}</Card.Title>
        <Card.Text className="text-gray-600">{article.translated_content}</Card.Text>
        <Link to={`/news/${article.id}`} className="btn btn-primary mt-3">Read More</Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;