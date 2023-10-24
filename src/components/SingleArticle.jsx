import { useState, useEffect } from "react"
import { getIndividualArticle } from "../api"
import { useParams } from "react-router-dom"
import SingleArticleComments from "./SingleArticleComments"

function SingleArticle() {
    const [selectedArticle, setSelectedArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {article_id} = useParams()
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        getIndividualArticle(article_id).then((body) => {
            setSelectedArticle(body)
            setIsLoading(false)
            setError(null)
        })
        .catch((err) => {
            setIsLoading(false)
            setError({ err })
        })
    }, [article_id])

    if (isLoading)  return <p>Loading article...</p>
    else {
        if(error) return <p>No comments</p>
        else {
    return (
        <>
        <div className="single-article">
            <h3 className="single-title">{selectedArticle.title}</h3>
            <p className="single-topic">Topic: {selectedArticle.topic}</p>
            <img className="single-img" src={selectedArticle.article_img_url} />
            <p className="single-body">{selectedArticle.body}</p>
            <p className="single-author">Author: {selectedArticle.author}</p>
        </div>
        <div>
            <SingleArticleComments />
        </div>
        </>
    )
        }
    }
}

export default SingleArticle