const express = require("express")
const router = express.Router()
const app = express()
const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome: 'Simaria Conceição' ,
        imagem: 'https://github.com/simariacinceicao.png' ,
        minibio: 'Desenvolvedora e instrutora'
    })
}

function mostraPorta() {

    console.log ("Servidor criado e rodando na poerta ", porta);
}

app.use (router.get ('/mulher', mostraMulher))
app.listen(porta, mostraPorta)