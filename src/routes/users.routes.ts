import { Router, Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

const usersRouter = Router()

usersRouter.get('/users', (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.OK).json([])
})

usersRouter.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const { uuid } = req.params

  res.status(StatusCodes.OK).json({ uuid })
})

usersRouter.post('/users', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const userRequest = req.body

  res.status(StatusCodes.CREATED).json(userRequest)
})

usersRouter.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const { uuid } = req.params

  res.status(StatusCodes.OK).json({ uuid })
})

usersRouter.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const { uuid } = req.params

  res.status(StatusCodes.OK).json({ uuid })
})

export default usersRouter
