import { Knex } from 'knex'
import path from 'path'

const config: Knex.Config = {
  client: 'pg',
  migrations: {
    directory: path.resolve(__dirname, 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
  },
}

export default config
