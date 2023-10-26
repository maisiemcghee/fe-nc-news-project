import { useState, useEffect } from "react"
import { getArticleComments, postComment } from "../api"
import { useParams } from "react-router-dom"

function AddComment({articleComments, setArticleComments}) {
    const [newCommentBody, setNewCommentBody] = useState('')
    const [authorInput, setAuthorInput] = useState('')
    const [hasPosted, setHasPosted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { article_id } = useParams()

    function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        setNewCommentBody('')
        setAuthorInput('')
        postComment(article_id, newCommentBody, event.target[1].value)
        .then(() => {
            setHasPosted(true)
            setIsLoading(false)
            setError(null)
        })
        .catch((err) => {
            setIsLoading(false)
            setError({ err })
        })
    }

    useEffect(() => {
        getArticleComments(article_id).then((body) => {
            setArticleComments(() => {
                return [...body]
            })
            setHasPosted(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setError({ err })
        })
        
    }, [hasPosted])

    if (isLoading)  return <p>Uploading comment ...</p>
    if (error) return <p>Failed to post comment - check internet connection</p>
    return <form onSubmit={handleSubmit} action="submit" id="add-comment">
        <ul><label>Add comment: </label><input type="text" id="comment-body" value={newCommentBody} onChange={(event) => setNewCommentBody(event.target.value)} required></input> </ul>
        <ul><label>Enter username: </label><input type="text" id="comment-author" value={authorInput} onChange={(event) => setAuthorInput(event.target.value)} required></input> </ul>
        <button type="submit" id="submit-comment">submit</button>
    </form>
}

export default AddComment