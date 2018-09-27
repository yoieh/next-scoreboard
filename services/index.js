import { normalize, schema } from "normalizr";

import dbData from "./data.json";

const itemSchema = new schema.Entity("items");
const itemListSchema = new schema.Array(itemSchema);

const normalizedData = normalize(dbData, itemListSchema);

export const getData = async () =>
  await new Promise(resolve =>
    setTimeout(() => resolve(normalizedData.entities.items), 5000)
  );
