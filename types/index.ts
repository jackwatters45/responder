import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import type { z } from "zod";
import type { filter } from "~/app/[id]/filters/form";
import type { accounts, locations } from "~/server/db/schema";

export type SelectAccount = InferSelectModel<typeof accounts>;
export type InsertAccount = InferInsertModel<typeof accounts>;

export type SelectLocation = InferSelectModel<typeof locations>;
export type InsertLocation = InferInsertModel<typeof locations>;

export type Plan = "free" | "premium";

export type Filter = z.infer<typeof filter>;
