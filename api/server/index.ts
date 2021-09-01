import Koa from 'koa'
import errorHandler from './middleware/error-handler'
import defaultHeaders from './middleware/default-headers'
import requestLogger from './middleware/request-logger'
import authenticate from './middleware/authenticate'

import * as routes from '@domains/routes'

const app = new Koa()

app.use(requestLogger).use(errorHandler).use(defaultHeaders).use(authenticate)

for (const router of Object.values(routes)) {
  app.use(router.routes())
}

export default app
