import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { getArticleById } from '../services/api';
import { Article } from '../types/article';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      getArticleById(id)
        .then(setArticle)
        .catch(error => console.error('Error fetching article:', error));
    }
  }, [id]);

  if (!article) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Text className="text-gray-600">{article.translated_content}</Card.Text>
          <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewsDetail;
