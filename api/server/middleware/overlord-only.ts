import { Middleware } from 'koa'
import { verify } from 'jsonwebtoken'

import * as Env from '@shared/env'
import { NotAuthorized } from '@shared/errors'

const middleware: Middleware = async (ctx, next) => {
  if (!ctx.user) {
    throw new NotAuthorized()
  }

  if (!ctx.user.isOverlord) {
    throw new NotAuthorized()
  }

  return next()
}

export default middleware
