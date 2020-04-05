import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://player.soundario.com/'
})

export default instance