import { Middleware } from 'koa'
import Log from '@shared/log'

const log = Log.child({
  system: 'middleware-error',
})

type MiddlewareError = Error & { statusCode: number }

const middleware: Middleware = async (ctx, next) => {
  try {
    await next()
  } catch (err: unknown) {
    const error = err as MiddlewareError

    const status =
      error.statusCode && error.statusCode > 99 && error.statusCode < 600
        ? error.statusCode
        : 500

    const message = error.message || 'Internal Server Error'

    ctx.body = {
      error: {
        message,
        status,
      },
    }

    ctx.status = status
  }
}

export default middleware
