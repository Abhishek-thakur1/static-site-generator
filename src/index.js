const fs = require('fs');

const config = require('./config')
const createPost = require('./posts')

const posts = fs.readdirSync(config.dev.postsdir)
    .map(post => post.slice(0, -3))
    .map(post => postMethods.createPost(post))

console.log(posts)  