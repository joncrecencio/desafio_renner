const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')
const latLonStore1 = require('./store1')
const latLonStore2 = require('./store2')
const latLonStore3 = require('./store3')


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
    return res.render('showcase', {items: data, latLong: latLonStore1})
})

server.get("/showcase2", function(req, res){
    return res.render('showcase', {items: data, latLong: latLonStore2})
})
server.get("/showcase3", function(req, res){
    return res.render('showcase', {items: data, latLong: latLonStore3})
})

server.get("/stores", function(req, res){
    return res.render('stores')
})

server.get("/car", function(req, res){
    return res.render('car')
})


// Ligar o servidor
server.listen(3000)