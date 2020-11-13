const express = require('express')
const path =  require('path')
const data = require('./data')


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

.post("/saveCep", function(req, res){
    const cep = req.body

    if(Object.values(cep).includes('')){
        return res.send("Todos os campos devem ser preenchidos!")
    }
})
.get("/car", function(req, res){
    return res.render('car')
})


// Ligar o servidor
server.listen(3000)