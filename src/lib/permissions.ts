import { createAccessControl } from "better-auth/plugins/access";

export const statement = {
    project: ["create", "share", "update", "delete"], // <-- Permissions available for created roles
    notes: ["create", "update", "delete"], // <-- Permissions available for created roles
} as const;

export const ac = createAccessControl(statement);

export const user = ac.newRole({
    project: ["create"],
    notes: ["create"],
});

export const admin = ac.newRole({
    project: ["create", "update"],
    notes: ["create", "update", "delete"],
});

export const myCustomRole = ac.newRole({
    project: ["delete", "share"],
    notes: ["create", "update", "delete"],
});
