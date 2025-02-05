import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import getArticles from '../services/api';
import { Article } from '../types/article';
const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles()
      .then(setArticles)
      .catch(error => console.error(error));
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {articles.map(article => (
          <Col key={article.id}>
            <ArticleCard article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;