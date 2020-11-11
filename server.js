const express = require('express')
const path =  require('path')

// const nunjucks = require('nunjucks')

const server = express()



server
.use(express.urlencoded({extended:true}))
.use(express.static('public'))
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')


// Rotas da aplicação
.get("/", function(req, res){
    return res.render('index')
})

.get("/login", function(req, res){
    return res.render('login')
})

.get("/register", function(req, res){
    return res.render('register')
})

.get("/showcase", function(req, res){
    return res.render('showcase')
})

.get("/stores", function(req, res){
    return res.render('stores')
})

// Ligar o servidor
server.listen(3000)