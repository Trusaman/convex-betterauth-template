import { convexAdapter } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { requireEnv, requireMutationCtx } from "@convex-dev/better-auth/utils";
import { betterAuth } from "better-auth";
import { betterAuthComponent } from "../../convex/auth";
import { type GenericCtx } from "../../convex/_generated/server";
import { sendEmailVerification } from "../../convex/email";

const siteUrl = requireEnv("SITE_URL");

export const createAuth = (ctx: GenericCtx) =>
    betterAuth({
        baseURL: siteUrl,
        database: convexAdapter(ctx, betterAuthComponent),
        emailAndPassword: {
            enabled: true,
            // requireEmailVerification: false,
            requireEmailVerification: true,
        },
        emailVerification: {
            sendVerificationEmail: async ({ user, url }) => {
                await sendEmailVerification(requireMutationCtx(ctx), {
                    to: user.email,
                    url,
                });
            },
        },
        plugins: [convex()],
    });
