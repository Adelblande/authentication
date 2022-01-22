import express from 'express'
import usersRouter from './routes/users.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(usersRouter)

app.listen(3000, () => {
  console.log('Server started in port 3000')
})
