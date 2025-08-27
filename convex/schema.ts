import { task } from "better-auth/react";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // Other tables here...
    tasks: defineTable({
        title: v.string(),
        completed: v.boolean(),
    }),
});
