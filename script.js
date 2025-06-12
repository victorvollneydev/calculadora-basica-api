const {somar, subtrair, multiplicar, dividir } = require('./utils')

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/api', (req, res) => {
  const numero1 = req.body.numeroA
  const numero2 = req.body.numeroB


  const resultado = {
    soma: somar(numero1, numero2),
    subtracao: subtrair(numero1, numero2),
    multiplicacao: multiplicar(numero1, numero2),
    divisao: dividir(numero1, numero2)
  }

  res.send(resultado)
})

app.listen(port, () => {
  console.log(`Servidor online na porta ${port}`)
})

