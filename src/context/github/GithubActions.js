import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GIT_URL
const GITHUB_TOKEN = process.env.REACT_APP_GIT_TOKEN

const net = axios.create({
    baseURL: GITHUB_URL,
    headers: {Authorization: `token ${GITHUB_TOKEN}`},
})

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const response = await net.get(`/search/users?${params}`)

    return response.data.items
}

export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        net.get(`/users/${login}`),
        net.get(`/users/${login}/repos`)
    ])
    return {user: user.data, repos: repos.data}
}