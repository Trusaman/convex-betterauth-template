import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // Other tables here...
    users: defineTable({
        email: v.optional(v.string()),
        name: v.optional(v.string()),
    }),
});
