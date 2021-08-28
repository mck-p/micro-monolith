import Pino from 'pino'

import * as Env from './env'

export default Pino({
  level: Env.log_level,
  name: Env.name,
  serializers: Pino.stdSerializers,
})
