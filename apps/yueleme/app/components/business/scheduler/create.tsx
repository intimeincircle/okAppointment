import type { FunctionComponent } from "react";

import type { FetcherWithComponents } from "@remix-run/react/dist/components";
import { Stack } from "@mantine/core";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { z } from "zod";

import { SubmitButton } from "~/components/mySubmitButton";
import { FormInput } from "~/components/form/input";

export const nameValidator = withZod(
  z.object({
    name: z.string().min(1, { message: "First name is required" }),
  }),
);

export const CreateSchedulerNewForm: FunctionComponent<{
  api: FetcherWithComponents<unknown>;
}> = ({ api }) => {
  return (
    <ValidatedForm
      fetcher={api}
      validator={nameValidator}
      method="post"
      action="/schedule?index"
    >
      <Stack>
        <FormInput name="name" label="昵称" />
        <SubmitButton content="创建" actionName="create" />
      </Stack>
    </ValidatedForm>
  );
};
