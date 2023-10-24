import { useEffect, useState } from "react"
import { getArticleComments } from "../api"
import { useParams } from "react-router-dom"

function SingleArticleComments() {
    const [articleComments, setArticleComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const {article_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getArticleComments(article_id).then((body) => {
            setArticleComments(body)
            setIsLoading(false)
            setError(null)
        })
        .catch((err) => {
            setIsLoading(false)
            setError({ err })
        })
    }, [article_id])

    if (isLoading)  return <p>Loading comments...</p>
    else {
        if(error) return <p>Failed to load comments</p>
        else {
    return (
        <div>
            <h2 className="comment-header"> Comment section </h2>
            <ul className="comment-list">
                {articleComments.map((articleComment) => {
                    return <li className="comment-card" key={articleComment.comment_id}>
                        <p className="comment-body">{articleComment.body}</p>
                        <p className="comment-author">Author : {articleComment.author}</p>
                        <p className="comment-votes">Votes : {articleComment.votes}</p>
                    </li>
                })}
            </ul>
        </div>
        
    )}
}
}

export default SingleArticleComments