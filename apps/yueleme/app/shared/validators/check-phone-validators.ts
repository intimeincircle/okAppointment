import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";

export const checkPhoneValidator = withZod(
  z.object({
    phone: z.string(),
    code: z.string(),
  }),
);

export const startPhoneSmsValidator = withZod(
  z.object({
    phone: z.string(),
  }),
);
