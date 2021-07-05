const express = require('express')
const app = express()
const port = 8080

app.get('/todolist', (req, res) => {
  res.send('<h1>Bem Vindo a sua lista de tarefas</h1>')
})

app.get('/todolist/atividade', (req, res) => {
    res.send(`<h1>Rota ativada com GET e recurso "ATIVIDADES"</h1>
                <ul>
                <li>Escovar os dentes</li>
                <li>Assistir a aula</li>
                <li>Almoçar</li>
                <li>Descançar</li>
                </ul>
    `)
  })

  app.get('/todolist/status-de-atividade', (req, res) => {
    res.send(`<h1>Rota ativada com GET e recurso "STATUS DE ATIVIDADE"</h1>
    
    
    `)
  })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})