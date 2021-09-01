import { Middleware } from 'koa'
import { verify } from 'jsonwebtoken'
import * as Env from '@shared/env'

const middleware: Middleware = async (ctx, next) => {
  let token

  if (ctx.headers.authorization) {
    token = ctx.headers.authorization.replace('Bearer ', '')
  } else {
    token = ctx.cookies.get('authorization')
  }

  let user

  if (token) {
    try {
      user = await verify(token, Env.jwt_secret)
    } catch (e) {}
  }

  ctx.user = user

  return next()
}

export default middleware
