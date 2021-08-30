import Router from 'koa-router'

const router = new Router({
  prefix: '/healthcheck',
})

router.get('/', (ctx) => {
  ctx.status = 201
  ctx.body = {
    data: {
      healthy: true,
    },
  }
})

export default router
