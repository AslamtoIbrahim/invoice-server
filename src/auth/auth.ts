import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaService } from '../prisma/prisma.service.js';

const prisma = new PrismaService();

export const auth = betterAuth({
  trustedOrigins: ['http://localhost:3000','https://invoice-server-steel.vercel.app', 'http://localhost:5173', 'https://eloquent-mousse-74eb8e.netlify.app'],
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: { enabled: true },
  advanced: {
    defaultCookieAttributes: {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    },
    disableOriginCheck: true,
  },
  // ⛔ You have to add GOOGLE_CLIENT_ID in env file
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
