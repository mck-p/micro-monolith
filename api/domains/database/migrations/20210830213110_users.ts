import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table
      .uuid('id')
      .primary()
      .notNullable()
      .defaultTo(knex.raw('uuid_generate_v4()'))

    table.text('email').notNullable().unique()
    table.text('password').notNullable()
    table.jsonb('meta')
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
