import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return (
    knex.schema
      /**
       * Create THINGS
       */
      .createTable('entities', (table) => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'))

        table.text('title').notNullable()
        table.timestamps(true, true)
      })
      /**
       * Create ways to CONNECT THINGS
       */
      .createTable('entity_relationships', (table) => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'))

        table.text('title').notNullable()
        table.jsonb('meta')
        table.timestamps(true, true)
      })
      /**
       * Create ways to track the CONNECTION between THINGS
       */
      .createTable('relationships_between_entities', (table) => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'))

        table
          .uuid('from_id')
          .notNullable()
          .comment('The ID of the entity that owns this relationship.')

        table
          .uuid('to_id')
          .notNullable()
          .comment('The ID of the entity that receives this relationship')

        table.uuid('relationship_id').notNullable()

        table.foreign('from_id').references('entities.id')
        table.foreign('to_id').references('entities.id')

        table.foreign('relationship_id').references('entity_relationships.id')
        table.timestamps(true, true)
      })
  )
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('relationships_between_entities')
    .dropTable('entity_relationships')
    .dropTable('entities')
}
