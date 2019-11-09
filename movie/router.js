const Movie = require('./model')
const { Router } = require('express')
const router = new Router

// create a new movie resource
router.post('/movies', (req, res, next)=>{
    Movie
        .create(req.body)
        .then(movie => res.status(201).json(movie))
        .catch(next)
})

// read all movies (the collections resource)
router.get('/movies', (req, res, next)=>{
    Movie
        .findAll()
        .then(list=>res.status(200).send(list))
        .catch(next)
})

// read a single movie resource
router.get('/movies/:id', (req, res, next)=>{
    Movie
        .findByPk(req.params.id)
        .then(movie => {
            if(!movie){
                res.status(404).end()
            }else{
                res.status(200).json(movie)
            }
        })
        .catch(next)
})

// update a single movie resource
router.put('/movies/:id', (req, res, next)=>{
    Movie
        .findByPk(req.params.id)
        .then(movie => {
            if(!movie){
                res.status(404).end()
            }else{
                movie
                    .update(req.body)
                    .then(movie => res.status(200).json(movie))
            }
        })
        .catch(next)
})

// delete a single movie resource
router.delete('/movies/:id', (req, res, next)=>{
    Movie
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(numberOfMovieDeleted => {
            if(!numberOfMovieDeleted){
                res.status(404).end()
            }else{
                res.status(204).end()
            }
        })
        .catch(next)
})

module.exports = router

