import type { FunctionComponent } from "react";
import type { FetcherWithComponents } from "@remix-run/react/dist/components";

import type { ScheduleCard } from "@app/yueleme-api";
import { Stack } from "@mantine/core";
import { ValidatedForm } from "remix-validated-form";

import { updateValidator } from "~/components/business/scheduler/updateValidator";
import { FormSwitch } from "~/components/form/checkbox";
import { TimeInput } from "~/components/form/time-range";
import { SubmitButton } from "~/components/mySubmitButton";
import { FormInput } from "~/components/form/input";

export const UpdateForm: FunctionComponent<{
  defaultValue?: ScheduleCard;
  api?: FetcherWithComponents<unknown>;
}> = ({ api, defaultValue }) => {
  return (
    <ValidatedForm
      fetcher={api}
      validator={updateValidator}
      method="post"
      action={`/schedule/${defaultValue?.id}?index`}
      id="updateForm"
    >
      <Stack>
        <FormInput name="name" label="名称" />
        <FormInput name="id" label="id" />
        <FormSwitch name="d1Disabled" label="星期一" />
        <TimeInput
          endName="d1End"
          startName="d1Start"
          label="星期一可预约时间"
        />
        <FormSwitch name="d2Disabled" label="星期二" />
        <TimeInput
          endName="d2End"
          startName="d2Start"
          label="星期二可预约时间"
        />
        <FormSwitch name="d3Disabled" label="星期三" />
        <TimeInput
          endName="d3End"
          startName="d3Start"
          label="星期三可预约时间"
        />
        <FormSwitch name="d4Disabled" label="星期四" />
        <TimeInput
          endName="d4End"
          startName="d4Start"
          label="星期四可预约时间"
        />
        <FormSwitch name="d5Disabled" label="星期五" />
        <TimeInput
          endName="d5End"
          startName="d5Start"
          label="星期五可预约时间"
        />
        <FormSwitch name="d6Disabled" label="星期六" />
        <TimeInput
          endName="d6End"
          startName="d6Start"
          label="星期六可预约时间"
        />
        <FormSwitch name="d7Disabled" label="星期日" />
        <TimeInput
          endName="d7End"
          startName="d7Start"
          label="星期日可预约时间"
        />

        <SubmitButton content="更新" actionName="update" />
      </Stack>
    </ValidatedForm>
  );
};

export const UpdateForm1: FunctionComponent<{
  defaultValue?: ScheduleCard;
  api?: FetcherWithComponents<unknown>;
}> = ({ api, defaultValue }) => {
  return (
    <Stack>
      <FormInput name="name" label="name" />
      <FormInput name="id" label="id" />
    </Stack>
  );
};
