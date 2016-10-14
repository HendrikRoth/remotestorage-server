process.umask(077)

const STORE_PATH = '/storage'
const PORT = process.env.PORT || 3000
const ALLOW_SIGNUP = process.env.ALLOW_SIGNUP || false

const reStore = require('restore')
const store = new reStore.FileTree({
    path: STORE_PATH
})

const server = new reStore({
    store:  store,
    http: {
        host: '0.0.0.0',
        port: PORT
    },
    allow: {
        signup: true
    }
})

server.boot()
console.log('Server listening on', PORT)
