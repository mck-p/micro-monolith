import { Middleware } from 'koa'

const middleware: Middleware = (ctx, next) => {
  ctx.set({
    Server: 'McK-P',
    Version: '0.0.1',
  })

  return next()
}

export default middleware
