import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";

export const updateValidator = withZod(z.object({}));
