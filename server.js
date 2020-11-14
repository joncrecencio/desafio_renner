const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')
const latLonStore = require('./stores')


const server = express()


server.use(express.static('public'))
server.set('view engine', 'njk')
    nunjucks.configure("views", {
    express: server,
    autoescape:false,
    noCache: true
})


// Rotas da aplicação
server.get("/", function(req, res){
    return res.render('index')
})

server.get("/login", function(req, res){
    return res.render('login')
})

server.get("/register", function(req, res){
    return res.render('register')
})

server.get("/showcase", function(req, res){
    return res.render('showcase', {items: data, latLong: latLonStore[0]})
})

server.get("/showcase2", function(req, res){
    return res.render('showcase', {items: data, latLong: latLonStore[1]})
})
server.get("/showcase3", function(req, res){
    return res.render('showcase', {items: data, latLong: latLonStore[2]})
})

server.get("/stores", function(req, res){
    return res.render('stores')
})

server.get("/car", function(req, res){
    return res.render('car')
})


// Ligar o servidor
server.listen(3000)