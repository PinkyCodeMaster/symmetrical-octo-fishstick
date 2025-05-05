import { emailOTP, magicLink, admin, multiSession, openAPI } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth, type User } from "better-auth";
import { stripe } from "@better-auth/stripe";
import { expo } from "@better-auth/expo";
import { db } from "@/config/drizzle";
import { user } from "@/db/schema";
import { resend } from "./resend";
import Stripe from "stripe";
import env from "./env";

const stripeClient = new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
})

export const auth = betterAuth({
    trustedOrigins: ["myapp://"],
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user
        }
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: true,
        autoSignInAfterVerification: true,
        sendResetPassword: async ({ user, url }: { user: User, url: string }) => {
            await resend.emails.send({
                from: env.RESEND_FROM_EMAIL,
                to: user.email,
                subject: 'Reset your password',
                replyTo: env.RESEND_FROM_EMAIL,
                text: `Click the link to reset your password: ${url}`
            })
        },
        changeEmail: {
            enabled: false,
        },
        deleteUser: {
            enabled: true,
            sendDeleteAccountVerification: async ({ user, url }: { user: User, url: string }) => {
                await resend.emails.send({
                    from: env.RESEND_FROM_EMAIL,
                    to: user.email,
                    subject: 'account deletion verification',
                    replyTo: env.RESEND_FROM_EMAIL,
                    text: `Click the link to delete your account: ${url}`
                })
            },
            beforeDelete: async (user: User, request: Request) => {
                if (user.email.includes("admin")) {
                    // todo: return error
                }
            },
        },
    },
    emailVerification: {
        sendOnSignUp: true,
        sendVerificationEmail: async ({ user, url }: { user: User, url: string }) => {
            await resend.emails.send({
                from: env.RESEND_FROM_EMAIL,
                to: user.email,
                subject: 'Verify your email address',
                replyTo: env.RESEND_FROM_EMAIL,
                text: `Click the link to verify your email: ${url}`
            })
        }
    },
    rateLimit: {
        enabled: true,
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24
    },
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["google", "facebook", "twitter", "linkedin", "apple", "microsoft", "email-password"],
            allowDifferentEmails: true,
            allowUnlinkingAll: true
        }
    },
    plugins: [
        expo(),
        magicLink({
            // @ts-ignore
            sendMagicLink: async ({ email, token, url }, request: Request) => {
                await resend.emails.send({
                    from: env.RESEND_FROM_EMAIL,
                    to: email,
                    subject: 'Magic link',
                    replyTo: env.RESEND_FROM_EMAIL,
                    text: `Click the link to login: ${url}`
                })
            }
        }),
        emailOTP({
            async sendVerificationOTP({
                email,
                otp,
                type
            }) {
                if (type === "sign-in") {
                    await resend.emails.send({
                        from: env.RESEND_FROM_EMAIL,
                        to: email,
                        subject: 'OTP',
                        replyTo: env.RESEND_FROM_EMAIL,
                        text: `Your OTP is: ${otp}`
                    })
                } else if (type === "email-verification") {
                    await resend.emails.send({
                        from: env.RESEND_FROM_EMAIL,
                        to: email,
                        subject: 'OTP',
                        replyTo: env.RESEND_FROM_EMAIL,
                        text: `Your OTP is: ${otp}`
                    })
                } else {
                    await resend.emails.send({
                        from: env.RESEND_FROM_EMAIL,
                        to: email,
                        subject: 'OTP',
                        replyTo: env.RESEND_FROM_EMAIL,
                        text: `Your OTP is: ${otp}`
                    })
                }
            },
            otpLength: 8,
            expiresIn: 600
        }),
        admin({
            adminRoles: ["sales", "marketing", "finance", "hr", "it", "customer-support", "customer-success", "manager", "admin", "superadmin", "super-admin"],
            defaultRole: "sales",
            adminUserIds: ["user_id_1", "user_id_2"],
            impersonationSessionDuration: 60 * 60 * 24,
            defaultBanReason: "Spamming",
            defaultBanExpiresIn: 60 * 60 * 24,
            bannedUserMessage: "Custom banned user message",
        }),
        multiSession({ maximumSessions: 3 }),
        openAPI(),
        stripe({
            stripeClient,
            stripeWebhookSecret: env.STRIPE_WEBHOOK_SECRET,
            createCustomerOnSignUp: true,
            onCustomerCreate: async ({ customer, stripeCustomer, user }, request) => {
                // Do something with the newly created customer
                console.log(`Customer ${customer.id} created for user ${user.id}`);
            },
        })
    ],
    advanced: {
        crossSubDomainCookies: {
            enabled: env.NODE_ENV === "production"
        }
    }
});