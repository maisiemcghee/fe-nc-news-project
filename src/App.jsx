import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import TopicList from './components/TopicList'
import AuthorList from './components/AuthorList'
import LogIn from './components/LogIn'
import { Route, Routes, Link } from "react-router-dom"
import './App.css'
import SingleArticle from './components/SingleArticle'
import SingleTopic from './components/SingleTopic'

function App() {
  return (
    <div>
      <Header />
      <nav className="nav">
    <Link to="/">Home</Link> | <Link to="/topics">Topics</Link> | <Link to="/authors">Authors</Link> | <Link to="/login">Log in</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/topics" element={<TopicList />} />
    <Route path="/authors" element={<AuthorList />} />
    <Route path="/login" element={<LogIn />} />
    <Route path='/articles/:article_id' element={<SingleArticle />} />
    <Route path='/articles' element={<SingleTopic />} />
  </Routes>
    </div>
  )
}

export default App
