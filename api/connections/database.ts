import Knex from 'knex'
import * as Env from '@shared/env'

import baseConfig from '@domains/database/knexfile'

export default Knex({
  ...baseConfig,
  connection: {
    user: Env.db_user,
    password: Env.db_pass,
    host: Env.db_host,
    port: Env.db_port,
    database: Env.db_name,
  },
})
