import { useState } from "react"
import { updateArticleVotes } from "../api"
import { useParams } from "react-router-dom"

function Voter({ likes }) {
     const [userLikes, setUserLikes] = useState(0)
     const { article_id } = useParams()

     const updateVote = (value) => {
        setUserLikes((currentLikes) => {
            return currentLikes + value
        })
        updateArticleVotes(article_id, value).catch(() => {
            setUserLikes((currentLikes) => {
                return currentLikes - value
            })
        })
     }

    return (
        <div>
            <p className="voter" >Votes : {likes + userLikes} <button className="like-button"
            disabled={userLikes === 1}
            onClick={() => {
                updateVote(1)
            }}>+</button>
            <button className="dislike-button"
            disabled={userLikes === -1}
            onClick={() => {
                updateVote(-1)
            }}>-</button></p>
        </div>
    )
}

export default Voter