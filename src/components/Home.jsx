import { useState, useEffect } from 'react'
import { getArticles } from '../api';
import { Link } from 'react-router-dom';

function Home() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((articlesFromApi) => {
            setArticles(articlesFromApi)
            setIsLoading(false)
        })
    }, [])

    if (isLoading)  return <p>Loading articles...</p>
    return ( 
        <div>
            <h3>View all articles here ... </h3>
            <div className="grid">
            <ul className="article-list">
                {articles.map((article) => {
                    return <li className="article-card" key={article.article_id}>
                        <img src={article.article_img_url} />
                        <h4 >{article.title}</h4>
                        <p>Topic : {article.topic}</p>
                        <p>Author : {article.author}</p>
                        <Link to={`/articles/${article.article_id}`}><button className="button">View article</button></Link>
                    </li>
                })}
            </ul>
            </div>
        </div>
    )
}

export default Home;