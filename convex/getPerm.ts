import { betterAuthComponent } from "./auth";
import { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { authClient } from "../src/lib/auth-client";

export const checkPermision = query({
    args: {},
    handler: async (ctx) => {
        // Get user email and other metadata from the Better Auth component
        const userMetadata = await betterAuthComponent.getAuthUser(ctx);

        console.log("User metadata: ", userMetadata);

        const canCreateProject = authClient.admin.checkRolePermission({
            permissions: {
                project: ["share"],
            },
            role: userMetadata?.role,
        });
        console.log("Can create project: ", canCreateProject);

        return canCreateProject;
    },
});
