import { createCookie } from "@remix-run/node"; // or "@remix-run/cloudflare"

export const lqAuthCookie = createCookie("LQ_AUTH_REMIX");
