import express from 'express'
import next from 'next'

const dev = process.env.ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
.then( () => {
  const server = express()

  server.get('/detail/:back/:id', (req, res) => {
    const actualPage = '/detail'
    const queryParams = { id: req.params.id, back: req.params.back }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/about/:test', (req, res) => {
    const actualPage = '/about'
    const queryParams = { test: req.params.test }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if(err) throw err
    console.log('> Ready on http://localhost:3000')

  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
})
