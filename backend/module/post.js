const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    name: {type: String, require:true},
    description: {type: String, require:true}
})
mongoose.model('Post',postSchema)