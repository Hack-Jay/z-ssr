import axios from 'axios'

const createInstance = (ctx) => axios.create({
    baseURL: 'https://player.soundario.com/',
    headers: {
        cookie: ctx.request.header.cookies || ''
    }
})

export default createInstance