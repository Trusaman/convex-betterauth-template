import VerifyEmail from "./emails/verifyEmail";
import { render } from "@react-email/components";
import { components } from "./_generated/api";
import { Resend } from "@convex-dev/resend";
import { type RunMutationCtx } from "@convex-dev/better-auth";

export const resend: Resend = new Resend(components.resend, {
    testMode: false,
});

export const sendEmailVerification = async (
    ctx: RunMutationCtx,
    {
        to,
        url,
    }: {
        to: string;
        url: string;
    }
) => {
    await resend.sendEmail(ctx, {
        from: "Test <ngocanh@tayduong.works>",
        to,
        subject: "Verify your email address",
        html: await render(<VerifyEmail url={url} />),
    });
};
