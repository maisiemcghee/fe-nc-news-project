import { useState, useEffect } from "react"
import { getIndividualArticle } from "../api"
import { useParams } from "react-router-dom"

function ArticleCard() {
    const [selectedArticle, setSelectedArticle] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const {article_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getIndividualArticle(article_id).then((body) => {
            setSelectedArticle(body)
            setIsLoading(false)
        })
    }, [article_id])

    if (isLoading)  return <p>Loading article...</p>
    return (
        <div className="single-article">
            <h3 className="single-title">{selectedArticle.title}</h3>
            <p className="single-topic">Topic: {selectedArticle.topic}</p>
            <img className="single-img" src={selectedArticle.article_img_url} />
            <p className="single-body">{selectedArticle.body}</p>
            <p className="single-author">Author: {selectedArticle.author}</p>
        </div>
    )
}

export default ArticleCard