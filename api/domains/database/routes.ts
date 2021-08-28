import Router from 'koa-router'
import overlordOnly from '@middleware/overlord-only'
import DB from '@connections/database'

const router = new Router({
  prefix: '/database',
})

router
  .post('/migrate', overlordOnly, async (ctx, next) => {
    const data = await DB.migrate.latest()

    ctx.status = 201
    ctx.body = {
      data,
    }
  })
  .post('/rollback', overlordOnly, async (ctx, next) => {
    const data = await DB.migrate.rollback(undefined, Boolean(ctx.query.all))

    ctx.status = 201
    ctx.body = {
      data,
    }
  })

export default router
