import Router from 'koa-router'
import DB from '@connections/database'

const router = new Router({
  prefix: '/entities',
})

router.get('/', async (ctx) => {
  const {
    limit = 100,
    offset = 0,
    sort_col = 'updated_at',
    sort_ord = 'desc',
  } = ctx.query

  const list = await DB.from('entities')
    .select('*')
    .limit(Number(limit))
    .offset(Number(offset))
    .orderByRaw(`${sort_col} ${sort_ord}`)

  ctx.status = 200
  ctx.body = {
    data: list,
  }
})

export default router
