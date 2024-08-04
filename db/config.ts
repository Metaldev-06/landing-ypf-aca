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
    url: column.text({ optional: false }),
    imgUrl: column.text({ optional: false }),
  },
});

export default defineDb({
  tables: { Oils, Promotions },
});
