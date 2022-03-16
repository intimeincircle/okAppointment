import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";

export const createAppointmentValidator = withZod(
  z.object({
    serviceCardId: z.string(),
    fromTime: z.string(),
  }),
);
