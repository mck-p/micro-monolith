import Koa from 'koa'
import errorHandler from './middleware/error-handler'
import defaultHeaders from './middleware/default-headers'
import requestLogger from './middleware/request-logger'

import DBRouter from '@domains/database/routes'

const app = new Koa()

app
  .use(requestLogger)
  .use(errorHandler)
  .use(defaultHeaders)
  .use(DBRouter.routes())

export default app
