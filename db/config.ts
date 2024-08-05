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
    title: column.text({ optional: false }),
    description: column.text({ optional: false }),
    badge: column.text({ optional: true }),
    day: column.text({ optional: false }),
    date: column.text({ optional: true }),
    percent: column.text({ optional: false }),
    image: column.text({ optional: false }),
    color: column.text({ optional: false }),
  },
});

export default defineDb({
  tables: { Oils, Promotions },
});
