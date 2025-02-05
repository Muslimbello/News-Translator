import axios from 'axios';
import { Article } from '../types/article';
const API_URL = 'http://localhost:8000/api/';

export const getArticles = async (): Promise<Article[]> => {
  const response = await axios.get(`${API_URL}articles/`);
  return response.data;
};

export const getArticleById = async (id: string): Promise<Article> => {
  const response = await axios.get(`${API_URL}articles/${id}/`);
  return response.data;
};

export default getArticles;
