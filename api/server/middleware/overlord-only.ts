import { Middleware } from 'koa'
import { verify } from 'jsonwebtoken'

import * as Env from '@shared/env'
import { NotAuthorized } from '@shared/errors'

const middleware: Middleware = async (ctx, next) => {
  if (ctx.headers.authorization) {
    const token = ctx.headers.authorization.replace('Bearer ', '')

    if (token) {
      try {
        await verify(token, Env.jwt_secret)
        return next()
      } catch (e) {
        throw new NotAuthorized()
      }
    }
  } else {
    throw new NotAuthorized()
  }
}

export default middleware
