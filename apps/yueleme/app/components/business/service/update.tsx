import type { FunctionComponent } from "react";
import { useState } from "react";
import type { FetcherWithComponents } from "@remix-run/react";

import { Accordion, Box, Stack } from "@mantine/core";
import { withZod } from "@remix-validated-form/with-zod";
import {
  useControlField,
  useFormContext,
  ValidatedForm,
} from "remix-validated-form";
import { z } from "zod";

import { FormSwitch } from "~/components/form/checkbox";
import { FormControlledInput, FormInput } from "~/components/form/input";
import { FormNumberInput } from "~/components/form/number-input";
import { FormRadioInput } from "~/components/form/radio";
import { ScheduleSelect } from "~/components/form/select-schedule";
import { FormTextarea } from "~/components/form/textarea";
import { SubmitButton } from "~/components/mySubmitButton";
import type { ScheduleCardSelect } from "~/components/select/search";

export const createServiceValidator = withZod(
  z.object({
    name: z.string().min(1, { message: "First name is required" }),
  }),
);

export const UpdateServiceForm: FunctionComponent<{
  dataList: ScheduleCardSelect[];
  api: FetcherWithComponents<unknown>;
}> = ({ api, dataList }) => {
  const [value, setValue] = useState<string[]>(["item-1"]);

  const [value1] = useControlField("urlName", "updateForm");

  const [valueCharge] = useControlField("charge", "updateForm");
  return (
    <>
      valueCharge:{valueCharge}
      <ValidatedForm
        fetcher={api}
        validator={createServiceValidator}
        method="post"
        id="updateForm"
        action="/service/my"
      >
        <Accordion multiple value={value} onChange={setValue}>
          <Accordion.Item value="item-1">
            <Accordion.Control>基本设置</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Box sx={{ display: "none" }}>
                  <FormInput name="id" label="id" />
                </Box>
                <ScheduleSelect
                  data={dataList}
                  name="scheduleId"
                  label="日程"
                />

                <FormControlledInput name="urlName" label="链接url" />
                <Box>
                  <>url: {value1}</>
                </Box>
                <FormTextarea name="description" label="内容" />
                <FormInput name="name" label="标题" />
                <FormNumberInput name="timeDuration" label="时长" />

                <FormSwitch name="needConfirmed" label="预约需要确认" />
                <SubmitButton content="更新" actionName="update" />
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Control>高级设置</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <FormTextarea name="faq" label="FAQ问答" />
                <FormTextarea
                  name="scheduledMsgAfterAppointment"
                  label="订阅后发送消息"
                />
                <FormNumberInput
                  name="limitedFutureBookingDays"
                  label="限制X天后预约"
                />

                <FormNumberInput
                  name="limitedBookFrequency"
                  label="限制每天预约量"
                />

                <SubmitButton content="更新" actionName="update" />
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Control>约定设置</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <FormRadioInput
                  label="请填写"
                  name="onLinePlatform"
                  dataList={[
                    {
                      label: "飞书",
                      value: "feishu",
                    },
                    {
                      label: "微博",
                      value: "wechat",
                    },
                  ]}
                />
                <SubmitButton content="更新" actionName="update" />
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Control>支付设置</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <FormSwitch name="charge" label="需要付费" />
                {valueCharge === "on" && (
                  <FormNumberInput name="price" label="价格" />
                )}

                <SubmitButton content="更新" actionName="update" />
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </ValidatedForm>
    </>
  );
};
