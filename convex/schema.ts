import { task } from "better-auth/react";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        // Fields are optional
        email: v.optional(v.string()),
        name: v.optional(v.string()),
    }),
});
