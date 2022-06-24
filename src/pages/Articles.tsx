import { FC, useEffect, useState } from 'react';
import { api } from 'src/constants';

interface IArticle {
  id: string;
  title: string;
}

export const Articles: FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loadign, setLoadigin] = useState(false);
  const [error, setError] = useState('');

  const getFetchArticles = async () => {
    setLoadigin(true);
    setError('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const res = await fetch(api);
      if (res.ok) {
        const data = await res.json();
        setArticles(data);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoadigin(false);
    }
  };

  useEffect(() => {
    getFetchArticles();
  }, []);

  return (
    <>
      <h2>Articles</h2>
      {loadign && <p>Loading...</p>}
      <button onClick={getFetchArticles}>get data</button>
      {!loadign && (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
