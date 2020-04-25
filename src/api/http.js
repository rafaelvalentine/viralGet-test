import axios from 'axios'

export default () => ({
    newsApi: () => axios.create({
        baseURL: 'http://newsapi.org/v2/top-headlines',
        headers: {
            'x-Api-Key': process.env.REACT_APP_newAPI_key
        }
    })
})