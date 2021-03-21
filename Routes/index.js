const comments = require('../controllers/index').comments;
const tags = require('../controllers/index').tags


module.exports= (app)=>{
app.get('/api', (req, res)=>{
    res.send('api is working')
})

app.post('/api/comments',  comments.create)
app.get('/api/comments', comments.list);


app.post('/api/tags', tags.create)
app.get('/api/tags', tags.list)

}