import { useState, useEffect } from 'react'
import { getArticles } from '../api';

function Home() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi)
        })
    }, [])
    return ( 
        <div>
            <h3>View all articles here ... </h3>
            <div className="grid">
            <ul className="article-list">
                {articles.map((article) => {
                    return <li className="article-card" key={article.article_id}>
                        <img src={article.article_img_url} />
                        <h4>{article.title}</h4>
                        <p>Topic : {article.topic}</p>
                        <p>Author : {article.author}</p>
                    </li>
                })}
            </ul>
            </div>
        </div>
    )
}

export default Home;