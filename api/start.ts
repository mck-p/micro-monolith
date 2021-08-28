import Log from '@shared/log'
import * as Env from '@shared/env'
import Server from './server'

const start = () => {
  Log.trace('System starting')

  Server.listen(Env.port, () => Log.info({ port: Env.port }, 'Started'))
}

start()
