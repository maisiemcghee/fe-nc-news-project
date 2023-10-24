import { useState } from "react"

function Voter({ likes }) {
    const [userLikes, setUserLikes] = useState(0);

    const updateLikes = (value) => {
        setUserLikes((currentLikes) => {
            return currentLikes + value;
        })
    }

    return (
        <div>
            <p className="comment-votes">Votes : {likes + userLikes} <button className="like-button"
                disabled={userLikes === 1}
                aria-label="like"
                onClick={() => {
                    updateLikes(1)
                }}>
                    +
                </button>
                <button className="dislike-button"
                disabled={userLikes === -1}
                aria-label="dislike"
                onClick={() => {
                    updateLikes(-1)
                }}>
                    -
                </button>
                </p>
        </div>
    )
}

export default Voter