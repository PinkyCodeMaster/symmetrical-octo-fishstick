import { pgTable, serial, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const tasks = pgTable("tasks", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    done: boolean("done").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().$onUpdate(() => new Date()),
});

// ✅ Select schema (no changes)
export const selectTasksSchema = createSelectSchema(tasks);

// ✅ Insert schema with custom validation
export const insertTasksSchema = createInsertSchema(tasks).extend({
    name: z.string().min(1).max(500),
}).omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

// ✅ Patch schema
export const patchTasksSchema = insertTasksSchema.partial();
