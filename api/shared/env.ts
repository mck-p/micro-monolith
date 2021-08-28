import getenv from 'getenv'

export const port = getenv.int('PORT')
export const log_level = getenv.string('LOG_LEVEL', 'info')
export const name = getenv.string('NAME', 'McKendrie-Phillips')

export const db_host = getenv.string('DB_HOST')
export const db_port = getenv.int('DB_PORT')
export const db_user = getenv.string('DB_USER')
export const db_pass = getenv.string('DB_PASS')
export const db_name = getenv.string('DB_NAME')

export const cache_host = getenv.string('CACHE_HOST')
export const cache_port = getenv.int('CACHE_PORT')
export const cache_pass = getenv.string('CACHE_PASS')

export const jwt_secret = getenv.string('JWT_SECRET')
