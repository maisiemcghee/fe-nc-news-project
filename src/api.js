import axios from "axios";

const NCNewsApi = axios.create({baseURL: 'https://nc-news-anxf.onrender.com/api'})

export function getArticles() {
    return NCNewsApi.get('/articles')
    .then((body) => {
    return body.data.articles
    })
  }