import axios from 'axios'

const address = "https://safe-refuge-86202.herokuapp.com/api"
const api = {
    getEndpoints: () => {
        return axios.get(address)
        .then(endpoints => endpoints.data.endpoints)
    },
    getArticles: () => {
        return axios.get(`${address}/articles`)
        .then(articles => articles.data.articleComments)
    },
    getTopics: () => {
        return axios.get(`${address}/topics`)
        .then(topics => topics.data.topics)
    },
    getUsers: () => {
        return axios.get(`${address}/users`)
        .then(users => users.data.userComments)
    },
    getSingleArticle: (id) => {
        return axios.get(`${address}/articles/${id}`)
        .then(articles => articles.data)
    },
    postComment: (id, comment) => {
        return axios.post(`${address}/articles/${id}/comments`, {"comment": comment})
        .then(data=> data)
    },
    getArticlesByTopic: (topic) => {
        return axios.get(`${address}/topics/${topic}/articles`)
        .then(articles => articles.data.articleComments)
    },
    getUser: (user) => {
        return axios.get(`${address}/users/${user}`)
        .then(user => user.data)
    },
    changeCommentVote: (id, vote) => {
        return axios.put(`${address}/comments/${id}?vote=${vote}`, "")
        .then(data => data)
    },
    changeArticleVote: (id, vote) => {
        return axios.put(`${address}/articles/${id}?vote=${vote}`, "")
        .then(data => data)
    },
    deleteComment: (id) => {
        return axios.delete(`${address}/comments/${id}`)
        .then(data => data)
    },
    getArticleComments: (id) => {
        return axios.get(`${address}/articles/${id}/comments`)
        .then(comments => comments.data.comments.length)
    } 
}

export default api