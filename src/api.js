import axios from "axios";

const NCNewsApi = axios.create({baseURL: 'https://nc-news-anxf.onrender.com/api'})

export function getArticles() {
    return NCNewsApi.get('/articles')
    .then((body) => {
    return body.data.articles
    })
  }

export function getIndividualArticle(article_id) {
    return NCNewsApi.get(`/articles/${article_id}`, {
        params: {
            article_id: article_id
        }
    }).then((body) => {
        return body.data.article
    })
}

export function getArticleComments(article_id) {
    return NCNewsApi.get(`/articles/${article_id}/comments`, {
        params: {
            article_id: article_id
        }
    }).then((body) => {
        return body.data.comments
    })
}

export function updateArticleVotes(article_id, value) {
    return NCNewsApi.patch(`/articles/${article_id}`, {
            inc_vote: value
    })
    .then((body) => {
        return body.data.article
    })
}

export function postComment(article_id, newCommentBody, authorInput) {
    const newComment = {
        username: authorInput,
        body: newCommentBody
        } 
    return NCNewsApi.post(`/articles/${article_id}/comments`, newComment)
    .then((body) => {
        return body.data.comment
    })
}