import { useEffect, useState } from "react"
import { getArticlesByTopic } from "../api"
import { useSearchParams } from "react-router-dom"

function SingleTopic() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [topicArticles, setTopicArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const topicQuery = searchParams.get('topic')

    useEffect(() => {
        setIsLoading(true)
        getArticlesByTopic(topicQuery).then((body) => {
            setTopicArticles(body)
            setIsLoading(false)
            setError(null)
        })
        .catch((err) => {
            setIsLoading(false)
            setError({ err })
        })
    }, [topicQuery])

    if (isLoading) return <p>Loading {`${topicQuery}`} articles...</p>
    if (error) return <p>No articles for {`${topicQuery}`}</p>
    return (
    <div>
        <h3>Here are all available {topicQuery} articles</h3>
        <div className="grid">
        <ul className="article-list">
            {topicArticles.map((topicArticle) => {
                return <li className="article-card" key={topicArticle.article_id}>
                    <img src={topicArticle.article_img_url} />
                    <h4 className="title">{topicArticle.title}</h4>
                    <p className="topic">Topic : {topicArticle.topic}</p>
                    <p className="author">Author : {topicArticle.author}</p>
                </li>
            })}
        </ul>
        </div>
    </div>
    )
}

export default SingleTopic