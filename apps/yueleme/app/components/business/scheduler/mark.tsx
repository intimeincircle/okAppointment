import type { FunctionComponent } from "react";
import type { FetcherWithComponents } from "@remix-run/react/dist/components";

import { Stack } from "@mantine/core";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { z } from "zod";

import { SubmitButton } from "~/components/mySubmitButton";

export const nameValidator = withZod(z.object({}));

export const MarkForm: FunctionComponent<{
  id: number;
  api: FetcherWithComponents<unknown>;
}> = ({ api, id }) => {
  return (
    <ValidatedForm
      fetcher={api}
      validator={nameValidator}
      method="post"
      action="/schedule?index"
    >
      <Stack>
        <input type="hidden" name="id" value={id} />
        <SubmitButton content="设为默认" actionName="mark" />
      </Stack>
    </ValidatedForm>
  );
};
