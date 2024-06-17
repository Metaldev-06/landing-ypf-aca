import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config

const Oils = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ unique: true, optional: false }),
    type: column.text({ optional: false }),
    goo: column.text({ optional: false }),
    brand: column.text({ default: "ELAION" }),
    image: column.text({ optional: false }),
    url: column.text({ optional: false }),
  },
});

const Promotions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text({ unique: true, optional: false }),
    active_from: column.text({ optional: false }),
    active_to: column.text({ optional: false }),
    category: column.text({ optional: false }),
    url: column.text({ optional: false }),
    image: column.text({ optional: false }),
  },
});

export default defineDb({
  tables: { Oils, Promotions },
});
