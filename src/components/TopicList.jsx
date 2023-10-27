import { useEffect, useState } from "react"
import { getTopics } from "../api"
import { Link } from 'react-router-dom';

function TopicList() {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getTopics().then((topicsFromApi) => {
            setTopics(topicsFromApi)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading topics ...</p>
    return ( <div>
    <h3> Select a topic ...</h3>
    <ul className="topic-list">
        {topics.map((topic) => {
            return <li className="topic-card" key={topic.slug}>
                <h4 className="slug">{topic.slug}</h4>
                <p className="description">About topic : {topic.description}</p>
                <Link to={`/articles?topic=${topic.slug}`}><button className="button">View {`${topic.slug}`} articles</button></Link>
            </li>
        })}
    </ul>
    </div>
    )
}

export default TopicList