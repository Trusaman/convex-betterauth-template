import { createAuthClient } from "better-auth/react";
import { convexClient } from "@convex-dev/better-auth/client/plugins";
import { adminClient } from "better-auth/client/plugins";
import { ac, admin, user, myCustomRole } from "@/lib/permissions";
export const authClient = createAuthClient({
    plugins: [
        convexClient(),
        adminClient({ ac, roles: { admin, user, myCustomRole } }),
    ],
});
