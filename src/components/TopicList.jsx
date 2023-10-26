import { useEffect, useState } from "react"
import { getTopics } from "../api"
import { Link } from 'react-router-dom';

function TopicList() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((topicsFromApi) => {
            setTopics(topicsFromApi)
        })
    }, [])

    return ( <div>
    <p> Select a topic ...</p>
    <ul className="topic-list">
        {topics.map((topic) => {
            return <li className="topic-card" key={topic.topic_id}>
                <h4 className="slug">{topic.slug}</h4>
                <p className="description">About topic : {topic.description}</p>
                <Link to={`/topics/${topic.topic_id}`}><button className="button">View Topic</button></Link>
            </li>
        })}
    </ul>
    </div>
    )
}

export default TopicList