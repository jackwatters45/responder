import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import type {
	accountsTable,
	filtersTable,
	locationsTable,
	planEnum,
	responsesTable,
	statusEnum,
} from "~/server/db/schema";

export type AccountReturn = InferSelectModel<typeof accountsTable>;
export type AccountParams = InferInsertModel<typeof accountsTable>;

export type LocationReturn = InferSelectModel<typeof locationsTable>;
export type LocationParams = InferInsertModel<typeof locationsTable>;

export type ResponseReturn = InferSelectModel<typeof responsesTable>;
export type ResponseParams = InferInsertModel<typeof responsesTable>;

export type FiltersReturn = InferSelectModel<typeof filtersTable>;
export type FiltersParams = InferInsertModel<typeof filtersTable>;

export type PlanEnum = (typeof planEnum.enumValues)[number];
export type StatusEnum = (typeof statusEnum.enumValues)[number];
