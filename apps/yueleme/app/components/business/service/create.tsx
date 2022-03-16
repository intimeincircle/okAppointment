import type { FunctionComponent } from "react";
import type { FetcherWithComponents } from "@remix-run/react/dist/components";

import { Stack } from "@mantine/core";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { z } from "zod";

import { FormInput } from "~/components/form/input";
import { FormNumberInput } from "~/components/form/number-input";
import { FormTextarea } from "~/components/form/textarea";
import { SubmitButton } from "~/components/mySubmitButton";
import type { ScheduleCardSelect } from "~/components/select/search";
import { DemoScheduleSelect } from "~/components/select/search";

export const createServiceValidator = withZod(
  z.object({
    name: z.string().min(1, { message: "First name is required" }),
  }),
);

export const CreateServiceNewForm: FunctionComponent<{
  dataList: ScheduleCardSelect[];
  api: FetcherWithComponents<unknown>;
}> = ({ api, dataList }) => {
  return (
    <ValidatedForm
      fetcher={api}
      validator={createServiceValidator}
      method="post"
      action="/service/create"
    >
      <Stack>
        <FormInput name="urlName" label="链接url" />
        <FormTextarea name="description" label="内容" />
        <FormInput name="name" label="昵称" />
        <FormNumberInput name="time" label="时长" />

        <DemoScheduleSelect data={dataList} name="scheduleId" />

        <SubmitButton content="创建" actionName="create" />
      </Stack>
    </ValidatedForm>
  );
};
