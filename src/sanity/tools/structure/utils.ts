import type { SchemaTypeDefinition } from "sanity";
import { ListItemBuilder } from "sanity/structure";
import sortBy from "lodash/sortBy";

export const filterItems = (
  items: ListItemBuilder[],
  types: SchemaTypeDefinition[],
  insert: ListItemBuilder[] = [],
  sort = true,
) => {
  const filtered = [
    ...(types
      .map(type => items.find(item => item.getId() === type.name))
      .filter(item => !!item) as ListItemBuilder[]),
    ...insert,
  ];
  return sort ? sortBy(filtered, "spec.title") : filtered;
};
