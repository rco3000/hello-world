const express = require("express")

const app = express()

app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/index.html")})


app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")})

app.get('/blog', function(req,res)
{
            res.send("pagina blog")
        
        })


app.get('/ola/:cargo/:nome/:cor', function(req,res){
    res.send("<h1> Olá sr. "+ req.params.nome+" </h1>"
    
    + '<h2> sua cor é '+ req.params.cor +' </h2>'
    
    + '<h3> o Sr. é '+ req.params.cargo +' </h3>')})

  
   
    
    
    
    




        

app.listen(8082)