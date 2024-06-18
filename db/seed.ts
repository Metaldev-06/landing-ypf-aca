import { db, Oils, Promotions } from "astro:db";
import { OilData, PromotionData } from "../data";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Oils).values(OilData);

  await db.insert(Promotions).values(PromotionData);
}
