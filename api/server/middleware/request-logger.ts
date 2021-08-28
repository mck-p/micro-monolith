import Logger from 'koa-pino-logger'
import Log from '@shared/log'

export default Logger({ logger: Log.child({ system: 'request-logger' }) })
