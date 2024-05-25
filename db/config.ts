import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config

const Oils = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    type: column.text(),
    goo: column.text(),
    brand: column.text(),
  },
});

export default defineDb({
  tables: { Oils },
});
